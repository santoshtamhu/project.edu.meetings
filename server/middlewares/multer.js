const multer = require("multer");

// Define storage for uploaded files
const storage = multer.diskStorage({
  /* destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder where the uploaded images will be stored
  }, */
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize multer middleware
const upload = multer({ storage: storage });

module.exports = upload;
