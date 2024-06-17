import express from 'express'
import connectDb from './db.js'
import bodyParser from 'body-parser'
// import { CreateMenu, CreateUser } from './controllers/Create.js'
// import { GetMenus, GetUsers, GetWorkUser } from './controllers/Read.js'
import { PersonRouter } from './Routers/PersonRouter.js'
import { MenuRouter } from './Routers/MenuRouter.js'

const port = 5000
const app = express()

app.use(bodyParser.json())
connectDb()


app.use('/', PersonRouter)
app.use('/', MenuRouter)





app.listen(port, () => console.log('Listen'))