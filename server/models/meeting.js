const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const MeetingSchema = new Schema(
  {
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
      type: Number,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    important: {
      type: Boolean,
    },
    attractive: {
      type: Boolean,
    },
    image: {
      path: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model("Meetings", MeetingSchema);

module.exports = Meeting;
