const { default: mongoose } = require("mongoose");
const Meeting = require("../models/meeting");

const handleObjectIdValidation = (model) => {
  return async (req, res, next) => {
    // checking if the id is a valid mongodb objectId
    let ObjectId = mongoose.Types.ObjectId;
    if (!ObjectId.isValid(req.params._id)) {
      return res.status(404).send("invalid object id");
    }
    let matched = await model.findById(req.params._id);
    if (!matched) {
      return res.sendStatus(404);
    }
    next();
  };
};

module.exports = handleObjectIdValidation;
