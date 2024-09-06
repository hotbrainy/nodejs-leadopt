const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    company: {
      type: String,
    },
    position: {
      type: String,
    },
    linkedInURL: {
      type: String,
    },
    photoURL: {
      type: String,
    },
    timeInRole: {
      type: String,
    },
    connections: {
      type: String,
    },
    connectionDistance: {
      type: String,
    },
    activities: {
      type: String,
    },
  },
  {
    timestamps: true,
    toObject: true,
    toJSON: true,
    virtuals: true,
  }
);

module.exports = Profile = mongoose.model("Profile", ProfileSchema);
