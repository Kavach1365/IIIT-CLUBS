const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/clubCouncil")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch(() => {
    console.log("Failed");
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
