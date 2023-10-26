import Car from "../models/Car.model.js";

class CarsController {
    getCars = async (req, res, next) => {
        try {
            const cars = await Car.find();
            console.log(cars);
            res.status(200).json(cars);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    insertCar = async (req, res, next) => {
        const car = req.body;
        try {
            const newCar = await Car.create(car);
            res.status(201).json(newCar);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    }
}

export default new CarsController;