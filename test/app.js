const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const postRouter = require('./routes/post.router')
const cors = require('cors')
const checkTime = require('./middleware/checkTime')

// middleware
app.use(checkTime)
app.use(express.json())
app.use(cors({credentials: true}))

// routes

app.use('/api/v1/post', postRouter)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port http://localhost:${port}`))
    } catch (error) {
        console.log(error);
        
    }
}

start()



