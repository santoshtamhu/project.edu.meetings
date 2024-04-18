const express = require("express");
const {
  fetchMeetings,
  createMeeting,
  deleteMeeting,
  fetchSingleMeeting,
} = require("../controllers/meetings");
const router = express.Router();

router.get("/", fetchMeetings);

router.get("/:_id", fetchSingleMeeting);

router.post("/", createMeeting);

router.delete("/:_id", deleteMeeting);

module.exports = router;
