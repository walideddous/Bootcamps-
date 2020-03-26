const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  // Log to console for dev
  console.log(err);

  //Mongoose Bad objecId
  if (err.name === "CastError") {
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(el => el.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || `Server Error`
  });
};

module.exports = errorHandler;
