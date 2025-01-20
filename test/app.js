const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
require('dotenv').config()
const bookRouter = require('./routes/book_rt')
const authorRouter = require('./routes/author_rt')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/api/v1/tasks', tasks)
app.use(bookRouter)
app.use(authorRouter)

app.use(notFound)
app.use(errorHandler)
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



