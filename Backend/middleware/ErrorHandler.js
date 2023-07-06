const ErrorHandler = async = (err,req, res, next ) => {
    let message = err.message || 'Something went wrong'
    let statusCode = err.statusCode || 500

    res.status(statusCode).json({
        message,
        success: false,
        stack: err.stack,
        error: err
    })
}

module.exports = ErrorHandler