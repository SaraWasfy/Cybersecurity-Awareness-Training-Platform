const userModel = require("../models/user.js");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    const newUser = new userModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      username: req.body.username,
      password: hashedPassword,
    });
    newUser.save().catch((err) => console.log(err));
    res.status(200).send("created");
};
  
const getUsers = async (req, res) => {
    //retrieve all users from the database
    const users = await userModel.find({});
    console.log(users);
    res.status(200).send(users);
};

const updateUser = async (req, res) => {
    //update a user in the database
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    var Username = req.body.username;
    var Name = req.body.name;
    var Email = req.body.email;
    var Password = hashedPassword;
    var DateOfBirth = req.body.dateOfBirth;
    var Type = req.body.tyoe;
  
    userModel
      .findOneAndUpdate(
        { Username: Username },
        {
          Name: Name,
          Email: Email,
          Password: Password,
          DateOfBirth: DateOfBirth,
          Type: Type,
        }
      )
      .catch((err) => console.log(err));
    res.status(200).send("Updated");
};
  
const deleteUser = async (req, res) => {
    //delete a user from the database
    var Username = req.body.username;
    await userModel.deleteOne({ Username: Username });
    res.status(200).send("Deleted");
};
  
const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      const token = createToken(user._id);
      const maxAge = 3 * 24 * 60 * 60;
  
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const logout = (req, res) => {
    // Clear the JWT cookie to log the user out
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logged out successfully" });
};

const getProfile = async (req, res) => {
    const token = req.cookies.jwt;
  
    if (!token) {
      return res.status(401).json({ message: "You are not logged in." });
    }
  
    const decodedToken = jwt.verify(token, "supersecret");
    const userId = decodedToken.name;
    const user = await userModel.findById(userId);
  
    res.send(user);
  };

module.exports = {
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login,
    logout,
    getProfile,
}