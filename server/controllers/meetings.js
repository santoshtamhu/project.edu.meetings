const { mongoose } = require("mongoose");
const Meeting = require("../models/meeting");

const fetchMeetings = async (req, res) => {
  const meetings = await Meeting.find({});
  res.send(meetings);
};

const createMeeting = async (req, res) => {
  const meeting = await Meeting.create(req.body);
  res.send(meeting);
};

const deleteMeeting = async (req, res, next) => {
  try {
    let ObjectId = mongoose.Types.ObjectId;
    if (!ObjectId.isValid(req.params._id)) {
      return res.sendStatus(404);
    }
    let matched = await Meeting.findById(req.params._id);
    if (!matched) {
      return res.sendStatus(404);
    }
    await Meeting.findByIdAndDelete(req.params._id);
    res.send("meeting deleted successfully!");
  } catch (err) {
    next(err);
  }
};
module.exports = {
  fetchMeetings,
  createMeeting,
  deleteMeeting,
};
