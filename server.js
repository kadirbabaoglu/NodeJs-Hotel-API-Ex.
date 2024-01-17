const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const db = require('./config/config.js')
const authRoutes = require('./routes/auth.js')
const hotelRoutes = require('./routes/hotel.js')
const roomRoutes = require('./routes/room.js')
const userRoutes = require('./routes/user.js')
dotenv.config();

const app = express()
app.use(cors())
app.use(bodyParser.json({limit : '30mb' , extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb' , extended : true}))
app.use(cookieParser())
app.use('/' , authRoutes)
app.use('/' , hotelRoutes)
app.use('/' , roomRoutes)
app.use('/' , userRoutes)


db();


const port = process.env.Port
app.listen(port, () => {
  console.log(`Server is listing in port ${port}`)
})