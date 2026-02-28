require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error ❌", err));

// POST API → Create user
app.post("/user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// GET API → Get all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Server start
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});