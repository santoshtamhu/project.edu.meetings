const express = require("express");
const {
  fetchCourses,
  createCourse,
  deleteCourse,
} = require("../controllers/courses");
const checkValidationSchema = require("../middlewares/checkValidationSchema");
const upload = require("../middlewares/multer");
const handleObjectIdValidation = require("../middlewares/handleObjectIdValidation");
const Course = require("../models/course");

const router = express.Router();

router.get("/", fetchCourses);
router.post("/", checkValidationSchema, upload.single("image"), createCourse);
router.delete("/:_id", handleObjectIdValidation(Course), deleteCourse);

module.exports = router;
