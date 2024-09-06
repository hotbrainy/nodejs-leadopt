const mongoose = require("mongoose");
const uri = process.env.MONGO_URI || "mongodb://mongo:27017/lead_opt?";
const connectDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      dbName: "lead_opt",
    });
    console.log("MongoDB Connected.");
  } catch (err) {
    console.error(err);
  }
  console.log({ uri }, process.env.MONGO_URI , process.env.MONGO_URI2 );
};

module.exports = connectDatabase;
