const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    let admin = await Admin.findOne({ username }); // check if admin exists

    if (admin) {
      let matched = password === admin.password; // validate password
      if (matched) {
        admin = admin.toObject();
        admin.password = undefined;

        // generate jwt token
        const token = jwt.sign(admin, "adminToken", {
          expiresIn: "48h",
        });
        return res.json({ token, admin });
      }
    }
    res.status(401).json({
      msg: "invalid credentials!",
    });
  } catch (err) {
    next(err);
  }
};

const getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.find({});
    res.json(admin);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

module.exports = {
  login,
  getAdmin,
};
