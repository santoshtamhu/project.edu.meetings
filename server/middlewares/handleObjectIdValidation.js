const { default: mongoose } = require("mongoose");
const Meeting = require("../models/meeting");

const handleObjectIdValidation = async (req, res) => {
  // checking if the id is a valid mongodb objectId
  let ObjectId = mongoose.Types.ObjectId;
  if (!ObjectId.isValid(req.params._id)) {
    return res.status(404).send("invalid object id");
  }
  let matched = await Meeting.findById(req.params._id);
  if (!matched) {
    return res.sendStatus(404);
  }
};

module.exports = handleObjectIdValidation;
