const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { event, gallery, club, clubMember } = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", cors(), (req, res) => {});

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
    const data = await event.find({}).sort({ startDate: -1 });
    // console.log(data);
    res.status(200).send(data);
  } catch (e) {
    // console.log(e);
    res.status(500).send("Error in fetching the data!");
  }
});

app.get("/all-events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await event.find({ _id: id });
    //console.log(data);
    res.status(200).send(data);
  } catch (e) {
    // console.log(e);
    res.status(500).send("Error in fetching the data!");
  }
});

app.get("/upComing-events", async (req, res) => {
  const todayDate = new Date();
  try {
    const data = await event.find({ startDate: { $gte: todayDate } });
    // console.log("Upbsdb");
    // console.log(data);
    res.status(200).send(data);
  } catch (e) {
    //console.log(e);
    res.status(500).send("Error in fetching the data!");
  }
});
app.get("/completed-events", async (req, res) => {
  const todayDate = new Date();
  try {
    const data = await event
      .find({ startDate: { $lt: todayDate } })
      .sort({ startDate: -1 });
    // console.log("completed-events");
    console.log(data);
    res.status(200).send(data);
  } catch (e) {
    //console.log(e);
    res.status(500).send("Error in fetching the data!");
  }
});

app.post("/add-club-member", async (req, res) => {
  const { memberId, name, clubName, imageUrl, branch, position } = req.body;
  const data = {
    memberId,
    name,
    clubName,
    imageUrl,
    branch,
    position,
  };
  //console.log(data);
  try {
    await clubMember.insertMany([data]);
    res.status(200).send("Data added successfully");
    //console.log("Data added successfully");
  } catch (e) {
    // console.log("Data not added");
    //console.log(e);
    res.status(500).send(e);
  }
});

app.get("/club-members", async (req, res) => {
  const { clubName } = req.query;
  try {
    const data = await clubMember.find({ clubName: clubName });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/club-events", async (req, res) => {
  const { clubName } = req.query;
  //console.log(clubName);
  try {
    const data = await event
      .find({ clubName: clubName })
      .sort({ startDate: -1 });

    //console.log(data);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/send-email", (req, res) => {
  const { feedback, suggestions } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kavach1365@gmail.com",
      pass: "jtfa amtj hmuv azdy",
    },
  });

  // Setup email data
  let mailOptions = {
    from: "swapnithmadire123@gmail.com",
    to: "kavach1365@gmail.com",
    subject: "Feedback & Suggestions",
    text: `
      You have received a feedback!
      Feedback: ${feedback}
      Suggestions: ${suggestions}
      From: "user@gmail.com"
    `,
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending feedback");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Feedback sent successfully");
    }
  });
});

app.listen(8005, () => {
  console.log("Port Connected");
});
