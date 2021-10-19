const { v4 } = require('uuid')
const {
    getAllData,
    addNewData,
    deleteData,
    getOneData,
    updatedDataById
} = require('../models/carModel')

const getHomepage = (req, res) => {
    const data = getAllData()
    res.render("home", {
        title: "Home page",
        data: data.reverse()
    })
}

const addData = (req, res) => {
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
}

const dateDelete = (req, res) => {
    const id = req.params.id
    deleteData(id)
    res.redirect('/')
}

const editPage = (req, res) => {
    const id = req.params.id
    const data = getOneData(id)
    res.render("edit", {
        title: "Update data",
        data: data
    })
}

const editData =  (req, res) => {
    const id = req.params.id
    const { model, carName } = req.body

    const updatedCar = {
        model,
        carName
    }

    updatedDataById(id, updatedCar)

    res.redirect('/')
}

const viewsCarPage = (req, res) => {
    const id = req.params.id

    const car = getOneData(id)

    res.render("carDetails", {
        title: car.carName,
        car
    })
}

module.exports = {
    getHomepage,
    addData,
    dateDelete,
    editPage,
    editData,
    viewsCarPage
}