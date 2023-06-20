const express = require("express");
const app = express();
require("dotenv").config();

PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
