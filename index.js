const express = require('express')
const exphbs = require('express-handlebars')
const { v4 } =require('uuid')
const dotenv = require('dotenv')
const { 
    allCar, 
    updatedCardById, 
    carById, 
    deletedCarById,
    addData 
} = require('./data/dataModel')
const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.engine('hbs', exphbs({extname: 'hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    const data = allCar()
    res.render('home', {
        title: 'Home page',
        data: data.reverse()
    })
})

app.post('/', (req, res) => {
    const {model, carName} = req.body
    if(!model || !carName) {
        return res.render('home', {
            error: "Hamma maydonlar to'lishi shart"
        })
    }

    const newCar = {
        id: v4(),
        model,
        carName
    }

    addData(newCar)

    res.redirect('/')
})

app.get('/edit/:id', (req, res) => {
    const car = carById(req.params.id)
    res.render('edit', {
        carName: car[0].carName,
        model: car[0].model,
        id: car[0].id
    })
})

app.post('/edit/:id', (req, res) => {
    const id = req.params.id

    const { carName, model } = req.body

    const updatedCar = {
        carName,
        model
    }

    updatedCardById(id, updatedCar)

    res.redirect("/")
})

app.post('/delete/:id', (req, res) => {
    deletedCarById(req.params.id)

    res.redirect("/")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})