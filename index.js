import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dbConnect from './config/dbConnect.js'
import 'dotenv/config.js';
import routes from './routes/index.js';

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
routes(app)

dbConnect()
app.listen(port, () => console.log(`Server running on port: ${port}`))
