const express = require("express");
const cors = require("cors");
const collection = require("./DB");
const app = express();
const port = 9080;

// Middleware
app.use(express.json());
app.use(cors());

// For Registration
app.post("/registration", async (req, res) => {
  const { firstName, lastName, email, country, state, city, gender, dob, age } =
    req.body;

  const newRegistration = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    country: country,
    state: state,
    city: city,
    gender: gender,
    dateOfBirth: dob,
    age: age,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.send("exist");
    } else {
      res.send("notexist");
      await collection.insertMany([newRegistration]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await collection.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
