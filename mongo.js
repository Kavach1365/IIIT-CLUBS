const mongoose = require("mongoose");

const uri =
  "mongodb+srv://swapnithkumar:5kB8WazfLz8nOX3Y@clubs.yly74p6.mongodb.net/clubCouncil?retryWrites=true&w=majority&appName=clubs";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongodb connected sucessfully");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB", error);
  });

const upcomingEventsSchema = mongoose.Schema({
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
    type: String,
    required: true,
  },
  endDate: {
    type: String,
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

const upcomingEvent = mongoose.model("upcomingEvent", upcomingEventsSchema);

const addToGallery = mongoose.model("addToGallery", gallerySchema);
module.exports = { upcomingEvent, addToGallery };
