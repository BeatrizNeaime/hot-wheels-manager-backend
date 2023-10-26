import express from 'express';
import CarsController from '../controllers/cars.controller.js';

const carsRoute = express.Router();

carsRoute.get('/cars', CarsController.getCars);
carsRoute.post('/cars', CarsController.insertCar);

export default carsRoute;