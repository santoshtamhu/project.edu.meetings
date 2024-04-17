const Course = require("../models/course");

const fetchCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

const createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

module.exports = {
  fetchCourses,
  createCourse,
};
