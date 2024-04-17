module.exports = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Server Error";
  let errors = null;

  if (err.name == "ValidationError") {
    statusCode = 400;
    message = "Validation error";
    let errsArray = Object.entries(err.errors); // converts the "errors" object to an array [key, value]
    errors = [];
    errsArray.forEach((el) => {
      errors.push({
        field: el[0],
        msg: el[1].message,
      });
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    stack: err.stack,
  });
};
