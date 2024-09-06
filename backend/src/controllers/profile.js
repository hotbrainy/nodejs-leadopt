const { Profile } = require("../models");
const getProfiles = (req, res) => {
  return Profile.find(req.query)
    .then((profiles) => {
      res.send(profiles);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error", error: error.message });
    });
};
const createProfile = (req, res) => {
  return Profile.create(req.body)
    .then((profile) => {
      res.send(profile);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error", error });
    });
};

const updateProfile = (req, res) => {
  const { id } = req.params;
  return Profile.findByIdAndUpdate(id, req.body)
    .then((profile) => {
      res.send(profile);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error", error });
    });
};

module.exports = {
  getProfiles,
  createProfile,
  updateProfile,
};
