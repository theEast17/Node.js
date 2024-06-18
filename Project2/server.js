import express from 'express'
import connectDb from './db.js'
import bodyParser from 'body-parser'
import { PersonRouter } from './Routers/PersonRouter.js'
import { MenuRouter } from './Routers/MenuRouter.js'
import  dotenv  from 'dotenv'
dotenv.config()


const app  = express()
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000

app.use(bodyParser.json())
connectDb()


app.use('/', PersonRouter)
app.use('/', MenuRouter)





app.listen(port, () => console.log('Listen'))