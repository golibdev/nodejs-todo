const express = require('express')
const exphbs = require('express-handlebars')
const { v4 } =require('uuid')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.engine('hbs', exphbs({extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use('/', require('./routes/homeRoutes'))

connectDB()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})