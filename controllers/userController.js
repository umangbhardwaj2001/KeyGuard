const User = require("../models/userModel");

let getAllUsers = new Promise((resolve,reject)=>{
  users.find().then((resolve)=>{
    res.json(users)
  }).catch(reject)
})





// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
module.exports = {
  getAllUsers,
};
