const express = require("express");
const {
  fetchMeetings,
  createMeeting,
  deleteMeeting,
  fetchSingleMeeting,
} = require("../controllers/meetings");
const upload = require("../middlewares/multer");
const handleObjectIdValidation = require("../middlewares/handleObjectIdValidation");
const router = express.Router();

router.get("/", fetchMeetings);

router.get("/:_id", fetchSingleMeeting);

router.post("/", upload.single("image"), createMeeting);

router.delete("/:_id", deleteMeeting);

module.exports = router;
