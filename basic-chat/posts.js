const express = require('express')
const {createServer} = require('node:http')
const {join} = require('node:path')
const {Server} = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery: {}
})

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'posts.html'))
})


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
    });

server.listen(3000, () => {
    console.log('server is running ar http://localhost:3000')
})