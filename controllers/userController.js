const User = require("../models/userModel");

let getAllUsers = (req, res) => {
  User.find()
    .then((resolve) => {
      res.json(resolve);
    })
    .catch((reject) => {
      console.log(reject);
    });
};

module.exports = {
  getAllUsers,
};
