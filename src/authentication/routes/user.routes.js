const express = require("express");
const {signup, login, logout, authCheck} = require("../controllers/user.controller.js");
const { protectRoute } = require("../middlewares/protectRoute.js");
const router = express.Router();


router.route('/authCheck').get(protectRoute,authCheck)
router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').post(logout)
module.exports = router;
