const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const ErrorHandler = require('./middleware/ErrorHandler')
const router = require('./router/router_v1')
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const http = require('http')
const ChatSocket = require('./socket/chat')

class App {
    app
    constructor() {
        this.app = express();

        this.initializeMiddleware();
        this.connectMongodb()
        this.initializeRouter()
        this.initializeSocketServer()
        this.initializeErrorHandler()
    }
    initializeMiddleware() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }

    connectMongodb() {
        mongoose.connect('mongodb://0.0.0.0:27017/chatapp').then(res => {
            console.log('Database connected successfully')
        }).catch(err => {
            console.log(err)
        })
    }

    initializeErrorHandler() {
        this.app.use(ErrorHandler)
    }

    initializeRouter() {
        this.app.use('/api/v1', router)
    }

    initializeSocketServer() {
        const server = http.createServer(this.app)
        const io = new Server('3001', {
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST"],
            },
        })
        ChatSocket(io)
    }

    listen() {
        this.app.listen(5000, () => {
            console.log('listening on port 5000');
        })
    }
}

module.exports = App
