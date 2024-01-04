const express = require("express");
const User = require("../../models/User");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  newUser.save((err, user) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(user);
  });
});

module.exports = router;
