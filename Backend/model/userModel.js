const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: {
        type: String,
        required: [true, 'username is required']
    },
    email :{
        type: String,
        required: [true, 'email is required']
    },
    phone_no :{
        type: String,
        required: [true, 'phone_no is required']
    },
    country_code: {
        type: Number,
        required: [true, 'country_code is required']
    },
    image: {
        type: String,
        default: "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 30,
        required: [true, 'password is required']
    },
    confirm_password: {
        type: String,
        required: [true, 'confirm_password is required'],
        validate: function(value) {
            return value === this.password
        },
    },
    is_first_login: {
        type: Boolean,
        default: false
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    otp_code: {
        type: Number,
        select: false
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    },
})


userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10)
    this.confirm_password = undefined
})

userSchema.methods.compare_password = (password, confirm_password) => {
    return bcrypt.compare(password, confirm_password)
}

const User = mongoose.model('User', userSchema)

module.exports = User