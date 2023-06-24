import mongoose from "mongoose";
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL || "";

(async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
  }
})();

export default mongoose;
