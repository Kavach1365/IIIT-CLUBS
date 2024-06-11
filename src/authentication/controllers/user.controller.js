const { User } = require("../../../mongo.js");
const bcrypt = require("bcryptjs");``
const generateTokenAndSetCookie = require("../utils/generateToken.js");

const signup = async (req, res) => {
  try {
    const { username, email, studentId, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken" });
    }
    
    const existingId = await User.findOne({ studentId });
    if (existingId) {
      return res.status(400).json({ error: "ID already taken" });
    }
    const idRegex = new RegExp("^[bB]\\d{6}$");
    if (!idRegex.test(studentId)) {
      return res.status(400).json({ error: "Invalid Student ID" });
    }

    const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already taken" });
    }
 
    if (password.length < 6) {
      return res.status(400).json({ error: "Password length is too short" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email: email,
      username: username,
      studentId: studentId,
      password: hashedPassword,
    });

    if (newUser) {
      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        profileImg: newUser.profileImg,
        studentId: newUser.studentId,
        isAdmin: newUser.isAdmin,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in Signup controller", error);
    res.status(500).json({ error: "Internal Server Error:" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "Username or Password wrong" });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({ error: "Username or Password wrong" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.send(user);
    

  } catch (error) {
    console.log("Error in Login controller", error);
    res.status(500).json({ error: "Internal Server Error:" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ error: "Logged Out Successfully" });
  } catch (error) {
    console.log("Error in Logout controller", error);
    res.status(500).json({ error: "Internal Server Error:" });
  }
};

const authCheck = async (req, res) => {
  try {
    //console.log(req.user._id);
    const user = await User.findById(req.user._id).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in authCheck Controller", error.message);
    res.status(500).json({ error: "Internal Server Error:" });
  }
};

module.exports = { signup, login, logout, authCheck };
