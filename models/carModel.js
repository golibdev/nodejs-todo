const fs = require('fs')
const path = require('path')

const getAllData = () => {
    const data = fs.readFileSync(path.join(__dirname, '..', 'data', "data.json"), 'utf8')

    const cars = JSON.parse(data)

    return cars
}

const addNewData = (newCar) => {
    const data = fs.readFileSync(path.join(__dirname, '..', 'data', "data.json"), 'utf8')

    const cars = JSON.parse(data)

    console.log(cars)

    cars.push(newCar)

    fs.writeFileSync(path.join(__dirname, '..', 'data', "data.json"), `${JSON.stringify(cars)}`)

}

const deleteData = (id) => {
    const data = fs.readFileSync(path.join(__dirname, '..', 'data', "data.json"), 'utf8')

    const cars = JSON.parse(data)

    const deleted = cars.filter(car => car.id !== id)

    fs.writeFileSync(path.join(__dirname, '..', 'data', "data.json"), `${JSON.stringify(deleted)}`)
}

const getOneData = (id) => {
    const data = fs.readFileSync(path.join(__dirname, '..', 'data', "data.json"), 'utf8')

    const cars = JSON.parse(data)
    const idx = cars.findIndex(car => car.id === id)

    return cars[idx]

}

const updatedDataById = (id, updatedCar) => {
    const data = fs.readFileSync(path.join(__dirname, '..', 'data', "data.json"), 'utf8')

    const cars = JSON.parse(data)

    const idx = cars.findIndex(car => car.id === id)

    cars[idx] = {
        id: cars[idx].id,
        model: updatedCar.model,
        carName: updatedCar.carName
    }

    fs.writeFileSync(path.join(__dirname, '..', 'data', "data.json"), `${JSON.stringify(cars)}`)
}

module.exports = {
    getOneData,
    getAllData,
    addNewData,
    deleteData,
    updatedDataById
}