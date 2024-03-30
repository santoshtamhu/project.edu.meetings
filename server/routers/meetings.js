const express = require("express");
const {
  fetchMeetings,
  createMeeting,
  deleteMeeting,
  fetchMeeting,
} = require("../controllers/meetings");
const router = express.Router();

router.get("/", fetchMeetings);

router.post("/", createMeeting);

router.delete("/:_id", deleteMeeting);

module.exports = router;
