const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/:_id", (req, res, next) => {
  try {
    const filename = req.params._id;
    let rootPath = path.resolve();
    const filePath = path.join(rootPath, "uploads", filename);
    res.sendFile(filePath);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
