const { User } = require("../../../mongo.js");
const jwt = require("jsonwebtoken");

exports.protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const decode = jwt.verify(token, "JWT_SECRET");
    if (!decode) {
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }

    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in ProtectRoute Middleware:", error.message);
    return res.status(500).json({ error: "Internal Server Error:" });
  }
};
