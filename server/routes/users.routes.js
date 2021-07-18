const express = require("express");
const router = express.Router();
const { signup, login } = require("../models/users.model");

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (validate(username, password)) {
    return signup(res, username, password);
  }
  return res.send({
    success: false,
    data: null,
    error: "Invalid data provided by user",
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return login(res, username, password);
  }
  return res.send({
    success: false,
    data: null,
    error: "Invalid data provided by user",
  });
});

function validate(username, password) {
  return (
    username &&
    username.length >= 4 &&
    username.length <= 20 &&
    password &&
    password.length >= 4 &&
    password.length <= 20
  );
}
module.exports = router;
