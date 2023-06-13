const express = require("express");
const {UsersController} = require("../controller/user.controller");
const {verifyUser} = require("../middlewares/verifyAuth");

const router = express.Router();

router.post("/register", UsersController.signUp);
router.post("/login", UsersController.signIn);

module.exports = router;