const Course = require("../models/course");

const fetchCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

const createCourse = async (req, res, next) => {
  try {
    let path = "";
    if (req.file) {
      path = req.file.path.replaceAll("\\", "/");
    }
    const course = await Course.create({
      ...req.body,
      image: {
        path: "/" + path,
      },
    });
    res.json(course);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

module.exports = {
  fetchCourses,
  createCourse,
};
