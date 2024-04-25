const { default: mongoose } = require("mongoose");
require("dotenv").config();
// const MONGO = process.env.MONGODB_URI;
mongoose
  .connect(
    "mongodb+srv://187sang:ULLrL6ySG73euSgY@cluster0.676clk8.mongodb.net/project-edu-meetings?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB Connected!"));
