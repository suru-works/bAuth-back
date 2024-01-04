// controllers/auth/login.js

const express = require("express");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;

  const user = User.findOne({ email });

  if (!user) {
    res.sendStatus(401);
    return;
  }

  if (!user.comparePassword(password)) {
    res.sendStatus(401);
    return;
  }

  res.send({ token: user.generateToken() });
});

module.exports = router;
