const mongoose = require("mongoose");
require("dotenv").config();

/**
 * It connects to the database and logs a message to the console
 */
mongoose.set("strictQuery", true);

const db = () => {
  mongoose.connect(process.env.URL);
  console.log("Connected to the world");
};

export default db