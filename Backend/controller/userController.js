const baseController = require("./baseController");
const User = require('../model/userModel');
const AppError = require("../utils/AppError");
const jwt = require('jsonwebtoken')

class userController extends baseController {

    constructor() {
        super(User);
    }
    
    signToken (user_id) {
        return jwt.sign({id: user_id}, 'i-aa-senior-node-javascript-developer', {
            expiresIn: '3d'
        })
    }
    register = async (req, res, next) => {
        try {
            let {email, phone_no} = req.body
            let user = await User.findOne({
                $or: [
                    {email: email},
                    {phone_no: phone_no}
                ]
            })

            if(user) return next(new AppError('email or phone number already registered',400))

            let data = await User.create(req.body)

            this.responseBody('User created successfully', data, res, 201)
        } catch (e) {
            return next(new AppError(e.message,500))
        }
    }

    login = async (req, res, next) => { 
        try {
            let {email, password} = req.body

            let user = await User.findOne({email: email})

            if(!user) return next(new AppError('User not found', 404))

            let cond = await user.compare_password(password, user.password )

            if(!cond) return next(new AppError('Password is incorrect', 400))

            let token = this.signToken(user._id)

            this.responseBody('User loggedin successfully', {user, token}, res, 200 )

        } catch (e) {
            return next(new AppError(e.message,500))
        }
    }
}

module.exports = new userController()