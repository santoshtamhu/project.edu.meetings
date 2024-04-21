const express = require("express");
const { fetchCourses, createCourse } = require("../controllers/courses");
const checkValidationSchema = require("../middlewares/checkValidationSchema");
const upload = require("../middlewares/multer");

const router = express.Router();

router.get("/", fetchCourses);
router.post("/", upload.single("image"), checkValidationSchema, createCourse);

module.exports = router;
