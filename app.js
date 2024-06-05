const express = require("express");
const cors = require("cors");
const { event, gallery, club } = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.get("/events", async (req, res) => {
  try {
    const data = await event.find();
    // console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error fetching data!");
  }
});

app.post("/add-event", async (req, res) => {
  const {
    clubName,
    eventName,
    imgUrl,
    startDate,
    endDate,
    venue,
    eligibility,
    description,
  } = req.body;
  //console.log(req.body);
  const data = {
    clubName,
    eventName,
    imgUrl,
    startDate,
    endDate,
    venue,
    eligibility,
    description,
  };

  //console.log(data);

  try {
    await event.insertMany([data]);
    res.send("Data added successfully");
    //console.log("Data added successfully");
  } catch (e) {
    //console.log("Data not added");
    res.send(e);
  }
});

app.put("/edit-event/:id", async (req, res) => {
  const { id } = req.params;
  const {
    clubName,
    eventName,
    imgUrl,
    startDate,
    endDate,
    venue,
    eligibility,
    description,
  } = req.body;
  //console.log(req.body);
  const data = {
    clubName,
    eventName,
    imgUrl,
    startDate,
    endDate,
    venue,
    eligibility,
    description,
  };

  //console.log(data);

  try {
    await event.updateMany({ _id: id }, { $set: { ...data } });
    res.send("Data edited successfully");
    console.log("Data edited successfully");
  } catch (e) {
    //console.log("Data not added");
    res.send(e);
  }
});

app.post("/add-to-gallery", async (req, res) => {
  const { imgUrl } = req.body;
  const data = {
    imgUrl: imgUrl,
  };
  try {
    await gallery.create(data);
    res.send("Image added successfully");
    console.log("Image added successfully");
  } catch (e) {
    console.log(e);
  }
});

app.get("/get-images", async (req, res) => {
  // console.log("Getting Images");
  try {
    const data = await gallery.find();
    // console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error fetching data!");
  }
});

app.post("/add-club", async (req, res) => {
  const {
    clubName,
    tagLine,
    description,
    category,
    instagramUrl,
    twitterUrl,
    youtubeUrl,
    mailId,
    clubImage,
    clubBanner,
  } = req.body;
  //console.log(req.body);
  const data = {
    clubName,
    tagLine,
    description,
    category,
    instagramUrl,
    twitterUrl,
    youtubeUrl,
    mailId,
    clubImageUrl: clubImage,
    clubBannerUrl: clubBanner,
  };

  //console.log(data);

  try {
    await club.insertMany([data]);
    res.send("Data added successfully");
    //console.log("Data added successfully");
  } catch (e) {
    // console.log("Data not added");
    // console.log(e);
    res.send(e);
  }
});

app.get("/clubs", async (req, res) => {
  try {
    const data = await club.find();
    res.send(data);
  } catch (e) {
    res.status(500).send("Error fetching data!");
  }
});

app.get("/clubProfile", async (req, res) => {
  const { clubId } = req.query;
  try {
    const data = await club.find({ _id: clubId });
    res.send(data);
  } catch (e) {
    console.log("Error");
    res.status(500).send("Error fetching data!");
  }
});

app.get("/all-events", async (req, res) => {
  try {
    const data = await event.find({});
    console.log("completed-events");
    console.log(data);
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error in fetching the data!");
  }
});

app.get("/upComing-events", async (req, res) => {
  const todayDate = new Date();
  try {
    const data = await event.find({ startDate: { $gt: todayDate } });
    console.log("Upbsdb");
    console.log(data);
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error in fetching the data!");
  }
});
app.get("/completed-events", async (req, res) => {
  const todayDate = new Date();
  try {
    const data = await event.find({ startDate: { $lt: todayDate } });
    console.log("completed-events");
    console.log(data);
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error in fetching the data!");
  }
});

app.listen(8005, () => {
  console.log("Port Connected");
});
