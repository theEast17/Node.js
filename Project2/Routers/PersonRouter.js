import express from 'express'
import { CreateUser } from '../controllers/Create.js'
import { GetUsers, GetWorkUser } from '../controllers/Read.js'
import { UpdateUser } from '../controllers/Update.js'


export const PersonRouter=express.Router()

PersonRouter.post('/user',CreateUser)
PersonRouter.get('/user',GetUsers)
PersonRouter.get('/user/:work',GetWorkUser)
PersonRouter.put('/user/:id',UpdateUser)