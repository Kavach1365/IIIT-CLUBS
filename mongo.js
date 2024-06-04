const mongoose = require("mongoose");

const uri =
  "mongodb+srv://kavach:kavach123@cluster0.t0v6c.mongodb.net/club_council?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongodb connected sucessfully");
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
});

const event = mongoose.model("event", eventsSchema);

const gallery = mongoose.model("gallery", gallerySchema);

const club = mongoose.model("club", clubSchema);
module.exports = { event, gallery, club };
