const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
const { event, gallery, club, clubMember } = require("./mongo");
const userRoutes = require("./src/authentication/routes/user.routes");
const app = express();
const { User } = require("./mongo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// ROOT ROUTE
app.get("/", cors(), (req, res) => {});

// USER AUTHENTICATION ROUTES
app.use("/api/users/", userRoutes);

// EVENT ROUTES
app.post("/add-event/:id", async (req, res) => {
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

  try {
    await event.insertMany([data]);
    res.send("Data added successfully");
  } catch (e) {
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

  try {
    await event.updateMany({ _id: id }, { $set: { ...data } });
    res.send("Data edited successfully");
  } catch (e) {
    res.send(e);
  }
});

app.get("/all-events", async (req, res) => {
  try {
    const data = await event.find({}).sort({ startDate: -1 });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send("Error in fetching the data!");
  }
});

app.get("/all-events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await event.find({ _id: id });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send("Error in fetching the data!");
  }
});

app.get("/upComing-events", async (req, res) => {
  const todayDate = new Date();
  try {
    const data = await event.find({ startDate: { $gte: todayDate } });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send("Error in fetching the data!");
  }
});

app.get("/completed-events", async (req, res) => {
  const todayDate = new Date();
  try {
    const data = await event
      .find({ startDate: { $lt: todayDate } })
      .sort({ startDate: -1 });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send("Error in fetching the data!");
  }
});

// GALLERY ROUTES
app.post("/add-to-gallery", async (req, res) => {
  const { imgUrl } = req.body;
  const data = {
    imgUrl: imgUrl,
  };
  try {
    await gallery.create(data);
    res.send("Image added successfully");
  } catch (e) {
    console.log(e);
  }
});

app.get("/get-images", async (req, res) => {
  try {
    const data = await gallery.find();
    res.send(data);
  } catch (e) {
    res.status(500).send("Error fetching data!");
  }
});

// CLUB ROUTES
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

  try {
    await club.insertMany([data]);
    res.send("Data added successfully");
  } catch (e) {
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
  const { clubId, clubName } = req.query;
  try {
    let data;
    if (clubId) {
      data = await club.find({ _id: clubId });
    } else if (clubName) {
      data = await club.find({ clubName: clubName });
    } else {
      throw new Error("Missing parameters: clubId or clubName");
    }
    res.send(data);
  } catch (e) {
    res.status(500).send("Error fetching data: " + e.message);
  }
});




app.put("/edit-club/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    await club.updateOne({ _id: id }, { $set: updateData });
    res.send("Club updated successfully");
  } catch (e) {
    res.status(500).send(e);
  }
});


// CLUB MEMBERS ROUTES
app.post("/add-club-member/:id", async (req, res) => {
  const { memberId, name, imageUrl, branch, position, isClubAdmin } = req.body;
  const { id } = req.params;

  try {
    const foundClub = await club.findById(id);
    if (!foundClub) {
      console.error("Club not found::", id);
      return res.status(404).json({ message: "Club not found." });
    }

    const newMember = new clubMember({
      memberId,
      name,
      clubName: foundClub.clubName,
      imageUrl,
      branch,
      position,
      isClubAdmin,
    });
    await newMember.save();

    const user = await User.findOne({ studentId: memberId });
    if (user) {
      user.clubsIn.push({ club: foundClub._id, isClubAdmin });

      if (isClubAdmin) {
        user.isClubAdmin = true;
        if (!foundClub.clubAdmins) {
          foundClub.clubAdmins = [];
        }
        foundClub.clubAdmins.push(user._id);
      } else {
        user.isClubAdmin = false;
      }
      await user.save();
      await foundClub.save();
    }

    res.status(201).json({ message: "Member added successfully." });
  } catch (error) {
    console.error("Error adding club member:", error);
    res.status(500).json({ message: "Internal server error." });
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

// CLUB EVENTS ROUTES
app.get("/club-events", async (req, res) => {
  const { clubName } = req.query;
  try {
    const data = await event
      .find({ clubName: clubName })
      .sort({ startDate: -1 });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

// EMAIL ROUTES
app.post("/send-email", (req, res) => {
  const { feedback, suggestions } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kavach1365@gmail.com",
      pass: "jtfa amtj hmuv azdy",
    },
  });

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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Error sending feedback");
    } else {
      res.status(200).send("Feedback sent successfully");
    }
  });
});

app.listen(8005, () => {
  console.log("Port Connected");
});
