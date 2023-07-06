const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    },
    message: {
        type: String
    },
    room: {
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    }
}, {
    timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat