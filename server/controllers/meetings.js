const Meeting = require("../models/meeting");

const fetchMeetings = async (req, res) => {
  const meetings = await Meeting.find({});
  res.send(meetings);
};

const createMeeting = async (req, res) => {
  const meeting = await Meeting.create(req.body);
  res.send(meeting);
};

module.exports = {
  fetchMeetings,
  createMeeting,
};
