const express = require("express");
const { fetchCourses, createCourse } = require("../controllers/courses");

const router = express.Router();

router.get("/", fetchCourses);
router.post("/", createCourse);

module.exports = router;
