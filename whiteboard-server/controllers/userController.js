const User = require("../models/userModel");

// Getting all users from the database
exports.getUsers = async (req, res, next) => {
  await User.find()
    .then((users) => {
      res.status(200).json({ message: "All Participants", users });
    })
    .catch((err) => res.status(400).json({err}));
};

// Getting a user profile data
exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "Participant not found" });
    } else {
      res.status(200).json({ message: "Participant profile", user });
    }
  } catch (err) {
    throw(err);
  }
};

//updating a user data
exports.updateUser = async (req, res, next) => {
  try {
    const update = req.body;
    const userId = req.params.userId;
    await User.findByIdAndUpdate(userid, update);
    const user = user.findById(userId);
    if (!user) {
      res.status(404).json({ message: "Participant not found" });
    } else {
      res.status(200).json({ message: "Participant's profile updated", user });
    }
  } catch (err) {
    throw(err);
  }
};

//Deleting an existing user
exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      data: null,
      message: "Participant has been removed",
    });
  } catch (err) {
    throw(err);
  }
};
