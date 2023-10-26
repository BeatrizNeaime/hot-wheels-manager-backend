import express from 'express';
import postRoute from './post.routes.js';
import carsRoute from './car.routes.js';

const routes = (app) => {
    app.route('/api').get((req, res) => {
        res.status(200).json({
            message: 'Welcome to the API'
        })
    })

    app.use('/api/v1',
        express.json(),
        postRoute,
        carsRoute
    )

}

export default routes;