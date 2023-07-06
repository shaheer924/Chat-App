function ChatSocket(io) {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`)
        socket.on('join_room', (data) => {
            console.log(data)
            socket.join(data)
        })

        socket.on('send_message', (data) => {
            socket.to(data.room).emit('receive_message', data)
        })
    })
}

module.exports = ChatSocket;