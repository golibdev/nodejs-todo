const { Router } = require('express')
const { v4 } = require('uuid')
const {
    getAllData,
    addNewData,
    deleteData,
    getOneData,
    updatedDataById
} = require('../models/carModel')
const router = Router()

router.get('/', (req, res) => {
    const data = getAllData()
    res.render("home", {
        title: "Home page",
        data: data.reverse()
    })
})

router.post("/", (req, res) => {
    const data = getAllData()
    const { model, carName } = req.body

    if(!model || !carName) {
        return res.render("home", {
            err: "Hamma maydonlar to'dirilishi shart",
            data: data.reverse()
        })
    }

    const newCar = {
        id: v4(),
        model: model,
        carName: carName
    }

    addNewData(newCar)

    res.redirect("/")
})

router.post("/delete/:id", (req, res) => {
    const id = req.params.id
    deleteData(id)
    res.redirect('/')
})

router.get('/edit/:id', (req, res) => {
    const id = req.params.id
    const data = getOneData(id)
    res.render("edit", {
        title: "Update data",
        data: data
    })
})

router.post('/edit/:id', (req, res) => {
    const id = req.params.id
    const { model, carName } = req.body

    const updatedCar = {
        model,
        carName
    }

    updatedDataById(id, updatedCar)

    res.redirect('/')
})

router.get('/views/:id', (req, res) => {
    const id = req.params.id

    const car = getOneData(id)

    res.render("carDetails", {
        title: car.carName,
        car
    })
})

module.exports = router