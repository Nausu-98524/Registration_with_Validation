const mongoose = require("mongoose");

const DB =
  "mongodb+srv://frequent_research:frequent_research123@cluster0.ybjdjuo.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Conected");
  })
  .catch((err) => {
    console.log("Db Failed..");
  });

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  age: { type: Number, required: true },
});


const collection = mongoose.model("collection", userSchema);
module.exports = collection;