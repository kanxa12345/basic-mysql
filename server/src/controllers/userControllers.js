const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../model/userModel');

// register new user
const registerNewUser = async (req, res) => {
//   try {
//     const existingUser = await User.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res.status(403).json({ msg: "User already exists." });
//     } else {
//       const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
//       req.body.password = hashPassword;
//       req.body.avatar = req.file.filename;
//       await User.create(req.body);
//       res.status(201).json({ msg: "registered successfully!" });
//     }
//   } catch (err) {
//     res.status(400).json({ msg: "Registration failed" });
//   }
};

// login user
const loginUser = async (req, res) => {
//   try {
//     const userDetail = await User.findOne({ email: req.body.email });
//     if (userDetail) {
//       const matched = await bcrypt.compare(
//         req.body.password,
//         userDetail.password
//       );
//       if (matched) {
//         const token = jwt.sign(
//           { email: userDetail.email },
//           process?.env.SECRET_KEY
//         );
//         return res
//           .status(201)
//           .json({ msg: "Login Successfully", token, userDetail });
//       } else {
//         return res.status(403).json({ msg: "Password didn't match" });
//       }
//     } else {
//       return res.status(401).json({ msg: "Email not found" });
//     }
//   } catch (err) {
//     res.status(400).json({ msg: "Login failed" });
//   }
};





module.exports = { registerNewUser, loginUser };