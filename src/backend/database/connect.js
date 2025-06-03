const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://goodadet20:ikdlIpgtHOr7Mwqz@cluster0.0ob4gcw.mongodb.net/"
    );
    console.log("MongoDB connected Successfully!");
  } catch (error) {
    console.log("Error", error);
  }
}


module.exports = connectToDB;