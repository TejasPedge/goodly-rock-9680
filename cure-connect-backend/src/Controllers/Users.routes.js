const express = require("express");
const UserRoutes = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModal } = require("../Models/User.model");

// Get all the Users Data from the Database
UserRoutes.get("/", async (req, res) => {
  try {
    const user = await UserModal.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//Add Users data in the Database [ Sign UP users ]
UserRoutes.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await UserModal.findOne({ email: email });
    if (userExists) {
      return res.status(400).send({ msg: "User already exists" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModal({ email, name, password: hash });
      await user.save();
      res.status(200).send({ msg: "New user has been registred" });
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// verify users credientials and send jwt-token in the response;
UserRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModal.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { authorID: user._id, author: user.name },
            "masai"
          );
          res.status(200).send({
            msg: "login successfull",

            user: { user: user.name, token, email: user.email },
          });
        } else {
          res.status(200).send({ msg: "wrong credentials" });
        }
      });
    } else {
      res.status(200).send({ msg: "wrong credentials" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// Delete users from the Database, only admin can do this operation
UserRoutes.delete("/delete/:id", async (req, res) => {
  try {
    const user = await UserModal.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }
    res.status(200).send({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { UserRoutes };
