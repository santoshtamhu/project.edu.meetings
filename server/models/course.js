const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    image: {
      url: String,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Courses", CourseSchema);

module.exports = Course;
