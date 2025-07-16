const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(
      "mongodb+srv://vishal2004vishwa:vishal2004@cluster0.izgc2gr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Database connection Success");
    })
    .catch((err) => {
      console.log("Some issue in database ", err);
    });
};

module.exports = db;