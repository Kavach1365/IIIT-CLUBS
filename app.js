const express = require("express");
const cors = require("cors");
const { upcomingEvent, addToGallery } = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.get("/upcoming-events", async (req, res) => {
  try {
    const data = await upcomingEvent.find();
    // console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error fetching data!");
  }
});

app.post("/add-upcoming-events", async (req, res) => {
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

  console.log(data);

  try {
    await upcomingEvent.insertMany([data]);
    res.send("Data added successfully");
  } catch (e) {
    res.send(e);
  }
});

app.post("/add-to-gallery", async (req, res) => {
  const { imgUrl } = req.body;
  const data = {
    imgUrl: imgUrl,
  };
  try {
    await addToGallery.create(data);
    res.send("Image added successfully");
  } catch (e) {
    console.log(e);
  }
});

app.get("/get-images", async (req, res) => {
  // console.log("Getting Images");
  try {
    const data = await addToGallery.find();
    // console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error fetching data!");
  }
});

app.listen(8000, () => {
  console.log("Port Connected");
});
