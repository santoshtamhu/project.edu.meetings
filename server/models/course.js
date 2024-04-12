const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
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
    required: true,
  },
  image: Object,
});

const Course = mongoose.model("Courses", CourseSchema);

module.exports = Course;
