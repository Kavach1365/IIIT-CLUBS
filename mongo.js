const mongoose = require("mongoose");

const uri =
  "mongodb+srv://kavach:kavach123@cluster0.t0v6c.mongodb.net/club_council?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB", error);
  });

const eventsSchema = mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  clubName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  eligibility: {
    required: true,
    type: Array,
  },
  description: {
    type: String,
    required: true,
  },
});

const gallerySchema = mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
});

const clubSchema = mongoose.Schema({
  clubName: {
    type: String,
    required: true,
  },
  tagLine: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  clubImageUrl: {
    type: String,
    required: true,
  },
  clubBannerUrl: {
    type: String,
    required: true,
  },
  twitterUrl: {
    type: String,
    required: true,
  },
  instagramUrl: {
    type: String,
    required: true,
  },
  mailId: {
    type: String,
    required: true,
  },
  youtubeUrl: {
    type: String,
    required: true,
  },
  clubAdmins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }],
});

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    studentId: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minLength: 4,
    },
    profileImg: {
      type: String,
      default: "https://shorturl.at/JjmV9",
    },
    isSuperAdmin:{
      type:Boolean,
      default:false,
    },
    clubsIn: [
      {
        club: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "club",
          required: true,
        },
        isClubAdmin: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const clubMemberSchema = mongoose.Schema({
  memberId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  clubName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  isClubAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const event = mongoose.model("event", eventsSchema);

const gallery = mongoose.model("gallery", gallerySchema);

const club = mongoose.model("club", clubSchema);

const User = mongoose.model("User", userSchema);

const clubMember = mongoose.model("clubMember", clubMemberSchema);

module.exports = { event, gallery, club, clubMember, User };
