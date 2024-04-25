const express = require("express");
const meetingsRoute = require("./routers/meetings");
const coursesRoute = require("./routers/courses");
const cors = require("cors");
const handleError = require("./middlewares/handleError");
const uploadsRoute = require("./routers/uploads");
const adminRouter = require("./routers/admin");
const Meeting = require("./models/meeting");
require("dotenv").config();
const port = process.env.API_PORT;

const app = express();

// database
require("./config/database");

//cors
app.use(cors());

//req.body
app.use(express.json());

app.get("/api/test", (req, res) =>
  res.status(200).json({ message: "hello world" })
);

app.get("/api/testmeetings", (req, res) => {
  const meeting = Meeting.find({});
  res.send(meeting);
});

//Routes
app.use("/api/meetings", meetingsRoute);
app.use("/api/courses", coursesRoute);
app.use("/api/uploads", uploadsRoute);
app.use("/api/admin", adminRouter);

//Error handling middleware
app.use(handleError);

if (port) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
