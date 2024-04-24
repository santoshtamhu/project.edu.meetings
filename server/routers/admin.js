const express = require("express");
const { login, getAdmin } = require("../controllers/admin");

const router = express.Router();

router.post("/login", login);
router.get("/", getAdmin);

module.exports = router;
