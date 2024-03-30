const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  month: {
    type: String,
  },
  day: {
    type: Number,
  },
  image: String,
});

const Meeting = mongoose.model("Meetings", MeetingSchema);

module.exports = Meeting;
