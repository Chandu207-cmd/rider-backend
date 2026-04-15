const userModel = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { full_name, phone } = req.body;

    if (!full_name || !phone) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await userModel.createUser(full_name, phone);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser, getUsers };
