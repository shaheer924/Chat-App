const jwt = require('jsonwebtoken');

const AuthenticationMiddleware = (req, res, next) => {
    try {
        let token = ""
        if(req.headers.Authorization && req.headers.Authorization.startsWith('Bearer')){
            token = req.headers.Authorization.split(' ')[1]
        }

        let decode = jwt.decode(token)
    } catch (e) {
        return next(new AppError(e.message,500))
    }
}

module.exports = AuthenticationMiddleware