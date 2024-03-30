const Course = require("../models/course");

const fetchCourses = async (req, res) => {
  const courses = await Course.find({});
  res.send(courses);
};

const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.send(course);
};

module.exports = {
  fetchCourses,
  createCourse,
};
