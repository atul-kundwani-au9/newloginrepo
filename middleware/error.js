const ErrorResonse = require("../utils/errorRespose")


const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;
  
    if (err.code === 11000) {
    const message = `Duplicate Field Value Enter`;
   error = new ErrorResonse(message, 400);
    }
   
    if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResonse(messages, 400)
    }

    
    res.status(error.statusCode || 500).json({
    success: false,
   error: error.message || "Server Error",

    });
};

module.exports = errorHandler;