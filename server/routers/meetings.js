const express = require("express");
const {
  fetchMeetings,
  createMeeting,
  deleteMeeting,
  fetchSingleMeeting,
} = require("../controllers/meetings");
const upload = require("../middlewares/multer");
const handleObjectIdValidation = require("../middlewares/handleObjectIdValidation");
const checkValidationSchema = require("../middlewares/checkValidationSchema");
const router = express.Router();

router.get("/", fetchMeetings);

router.get("/:_id", handleObjectIdValidation, fetchSingleMeeting);

router.post("/", upload.single("image"), checkValidationSchema, createMeeting);

router.delete("/:_id", handleObjectIdValidation, deleteMeeting);

module.exports = router;
