const fs = require('fs')
const path = require('path')

const allCar = () => {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
    const cars = JSON.parse(data)

    return cars
}

const addData = (newCar) => {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
    const arr = JSON.parse(data)

    arr.push(newCar)

    console.log(arr)

    fs.writeFileSync(path.join(__dirname, 'data.json'), `${JSON.stringify(arr)}`)
}

const carById = (id) => {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
    let cars = JSON.parse(data)
    const car = cars.filter(car => car.id === id)
    return car
}

const deletedCarById = (id) => {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
    let cars = JSON.parse(data)
    const newCars = cars.filter(car => car.id !== id)

    console.log(newCars)

    fs.writeFileSync(path.join(__dirname, 'data.json'), `${JSON.stringify(newCars)}`, 'utf8')
}

const updatedCardById = (id, updatedCar) => {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
    let cars = JSON.parse(data)
    const idx = cars.findIndex(car => car.id === id)

    cars[idx] = {
        id: cars[idx].id,
        carName: updatedCar.carName,
        model: updatedCar.model
    }

    fs.writeFileSync(path.join(__dirname, 'data.json'), `${JSON.stringify(cars)}`, 'utf8')
    console.log("edited")
}

module.exports = {
    allCar,
    carById,
    updatedCardById,
    deletedCarById,
    addData
}