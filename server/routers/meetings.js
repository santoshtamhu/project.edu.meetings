const express = require("express");
const { fetchMeetings, createMeeting } = require("../controllers/meetings");
const router = express.Router();

router.get("/", fetchMeetings);

router.post("/", createMeeting);

module.exports = router;
