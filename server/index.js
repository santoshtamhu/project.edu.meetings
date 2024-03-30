const express = require("express");
const meetingsRoute = require("./routers/meetings");
const coursesRoute = require("./routers/courses");
const app = express();
const port = 8000;

//mongodb database
require("./config/database");

//req.body
app.use(express.json());

//Routes
app.use("/api/meetings", meetingsRoute);
app.use("/api/courses", coursesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
