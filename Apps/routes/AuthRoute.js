const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

const {
    login,
    studentLogin
} = require("../controllers/AuthController");

router.route("/login").post(login)
router.route("/studentLogin").post(studentLogin)

module.exports = router;