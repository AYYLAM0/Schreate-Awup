const express = require('express')
const session = require("express-session")
const mongoose = require('mongoose')
const app = express()
const passport = require("passport")
const port = process.env.PORT || 3001

require("./config/passport")(passport);
app.use(express.json())
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

require('dotenv').config()
const atlas = process.env.ATLAS_URI
mongoose.connect(atlas || "mongodb://localhost/ScraightUP",{ 
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

app.use('/api/scraightUp/user-routes', userRouter)
app.use('/api/scraightUp/job-routes', jobRouter)
app.use('/api/scraightUp/budget-routes', budgetRouter)


app.listen(port, () => console.log(`App Listening on: ${port}`))