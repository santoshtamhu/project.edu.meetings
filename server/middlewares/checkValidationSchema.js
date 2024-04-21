const Joi = require("joi");

const imageValidationSchema = Joi.object({
  mimetype: Joi.string().valid(
    "image/png",
    "image/svg",
    "image/webp",
    "image/jpg",
    "image/jpeg"
  ),
  size: Joi.number().max(1 * 1024 * 1024),
});

const checkValidationSchema = async (req, res, next) => {
  try {
    await imageValidationSchema.validateAsync(req.file, {
      allowUnknown: true,
      abortEarly: false,
    });
    next();
  } catch (err) {
    return res.status(400).send({
      msg: "validation error",
      errors: err.details.map((el) => {
        return {
          field: el.context.key,
          msg: el.message,
        };
      }),
    });
  }
};

module.exports = checkValidationSchema;
