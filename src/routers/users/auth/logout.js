const express = require("express");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", (req, res) => {
  req.user.removeToken();

  res.sendStatus(200);
});

module.exports = router;
