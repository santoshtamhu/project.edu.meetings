const express = require("express");
const meetingsRoute = require("./routers/meetings");
const coursesRoute = require("./routers/courses");
const cors = require("cors");
const handleError = require("./middlewares/handleError");
const uploadsRoute = require("./routers/uploads");
const adminRouter = require("./routers/admin");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

// database
require("./config/database");

//cors
app.use(cors());

//req.body
app.use(express.json());

//Routes
app.use("/api/meetings", meetingsRoute);
app.use("/api/courses", coursesRoute);
app.use("/api/uploads", uploadsRoute);
app.use("/api/admin", adminRouter);

//Error handling middleware
app.use(handleError);

if (PORT) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
