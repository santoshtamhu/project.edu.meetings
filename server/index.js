const express = require("express");
const meetingsRoute = require("./routers/meetings");
const app = express();
const port = 8000;

//mongodb database
require("./config/database");

//req.body
app.use(express.json());

//Routes
app.use("/api/meetings", meetingsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
