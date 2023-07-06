const mongoose = require('mongoose');

const roomModel = new mongoose.Schema({
    name: {
        type: String,
    },
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }]
})

const Room = mongoose.model('Room', roomModel)

module.exports = Room