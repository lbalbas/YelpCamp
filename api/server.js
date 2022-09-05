import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import apiRouter from "./routes/index.js"

const app = express()
const db = process.env.DB_URI;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true, 
 mongod: true}))
app.use(cors())
app.options('*', cors())


app.use('/', apiRouter)

app.listen(3001)
