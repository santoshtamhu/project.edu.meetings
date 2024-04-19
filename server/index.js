const express = require("express");
const meetingsRoute = require("./routers/meetings");
const coursesRoute = require("./routers/courses");
const cors = require("cors");
const handleError = require("./middlewares/handleError");
const uploadsRoute = require("./routers/uploads");

const app = express();
const port = 8000;

//mongodb database
require("./config/database");

//cors
app.use(cors());

//req.body
app.use(express.json());

//Routes
app.use("/api/meetings", meetingsRoute);
app.use("/api/courses", coursesRoute);
app.use("/api/uploads", uploadsRoute);

//Error handling middleware
app.use(handleError);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
