import express from 'express'
import connectDb from './db.js'
import bodyParser from 'body-parser'
import { PersonRouter } from './Routers/PersonRouter.js'
import { MenuRouter } from './Routers/MenuRouter.js'
import dotenv from 'dotenv'
dotenv.config()
// import passport from 'passport'
import { middlewareFunction } from './middleware/DemoMiddleware.js'
import { passportAuth } from './middleware/Auth.js'


const app = express()
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000

app.use(bodyParser.json())
connectDb()


app.use(middlewareFunction)

app.use(passportAuth.initialize())

// const passportAuthenticate = passportAuth.authenticate('local', { session: false })

app.get('/', async (req, res) => {
    res.send('welcome to the hotel')
})

// app.use('/user',passportAuthenticate, PersonRouter)   //it is session authentication
app.use('/user', PersonRouter)
app.use('/menu', MenuRouter)





app.listen(port, () => console.log('Listen'))