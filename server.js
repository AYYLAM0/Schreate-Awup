const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port =process.env.PORT || 3001
app.use(express.json())

mongoose.connect(proccess.env.MONGODB_URI||'mongodb://localhost/ScraightUP',{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('connection established')
})
const userRouter = require('./routes/user-routes')
const jobRouter = require('./routes/job-routes')
const budgetRouter = require('./routes/budget-routes')

app.use('./user-routes', userRouter)
app.use('./job-routes', jobRouter)
app.use('./budget-routes', budgetRouter)


app.listen(port, () => console.log(`App Listening on: ${port}`))