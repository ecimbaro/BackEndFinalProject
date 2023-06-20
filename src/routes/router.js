const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => {
  res.send("Bienvenidos a mi primer Server");
});

module.exports = router;
