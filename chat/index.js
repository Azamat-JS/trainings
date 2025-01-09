const app = require('express')()
const http = require('http').createServer(app)
const { log } = require('console')
const path = require('path')
const io = require('socket.io')(http)
require('dotenv').config()

const port = 4002

app.get('/', (req, res) => [
    res.sendFile(path.join(__dirname, "index.html"))
])

io.on('connection', (socket) => {
    socket.on('join room', (room) => {
        socket.join(room)
    })

    socket.on('leave room', (room) => {
        socket.leave(room)
    })
    socket.on('chat message', (data) => {
        const {room, msg} = data
        io.to(room).emit('chat message', msg)
    })
    
    socket.on('disconnect', ()=> {
    
    })
})


http.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})