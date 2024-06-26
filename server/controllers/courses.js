const { default: mongoose } = require("mongoose");
const Course = require("../models/course");
const cloudinary = require("../utils/cloudinary");

// FETCH COURSE
const fetchCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

// CREATE COURSE
const createCourse = async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const course = await Course.create({
      ...req.body,
      image: {
        url: result ? result.secure_url : "",
      },
    });
    res.json(course);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// DELETE COURSE
const deleteCourse = async (req, res, next) => {
  try {
    await Course.findByIdAndDelete(req.params._id);
    res.send("course deleted successfully!");
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
module.exports = {
  fetchCourses,
  createCourse,
  deleteCourse,
};
