
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {UsersModel} = require("../models/user.model");
const mongoose = require("mongoose");

class UsersController {
  constructor() {}

  async getProfile(req, res) {
    try {
      const user = req.user;
      const profile = await UsersModel.findById(user.id.toString());
      if (!profile) {
        return res.status(401).send('Invalid token');
      }
      res.status(200).json(profile);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async signUp(req, res) {
    try {
      let newUser;
      const user = req.body;
      let oldUser = await UsersModel.findOne({
        email: user.email
      });
      // check user if exist
      if (oldUser) {

        if (oldUser.active) {
          return res.status(409).send("User already exist. Please login.");
        } else {
          return res.status(410).send("User already exist but not active.");
        }
      }


      // create new user
      user.passwordHash = await bcrypt.hash(user.password, 10);
      newUser = await UsersModel.create(user);
      let token = jwt.sign({
        email: newUser.email,
        username: newUser.username,
        id: newUser._id
      }, process.env.JWT_SECRET)
      res.status(201).json({
        token
      });
    } catch (err) {
      console.log(err)
      res.status(500).send(err.message);
    }
  }

  async signIn(req, res) {
    try {
      let oldUser,
        token;
      const {username, password} = req.body;
      // check user if exist
      oldUser = await UsersModel.findOne({
        username
      })
      if (!oldUser) {
        return res.status(400).send("Invalid Credentials");
      }

      // check password if correct
      if (await bcrypt.compare(password, oldUser.passwordHash)) {
        token = jwt.sign({
          email: oldUser.email,
          username: oldUser.username,
          id: oldUser._id
        }, process.env.JWT_SECRET, {
          expiresIn: '7d'
        })
      } else {
        return res.status(400).send("Invalid Credentials");
      }
      res.status(200).json({
        token,
        role: oldUser.role
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = {
  UsersController: new UsersController()
};
