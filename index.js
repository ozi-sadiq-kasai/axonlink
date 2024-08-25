const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
// const DBConnect= require('./db')
const authRoutes = require('./routes/authRoutes');
const cookieSession = require('cookie-session')
const passport = require('passport')

// Import User model and passport services
require('./models/User')
require('./services/passport')


mongoose.connect(keys.mongoURI)

const app = express()
app.use(
 cookieSession({
  maxAge: 30 * 24 * 60 *60 * 1000,
  keys:[keys.cookieKey]
 })
)

app.use(passport.initialize())
app.use(passport.session())


// Import routes
app.use(authRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))