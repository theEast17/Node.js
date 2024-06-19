import express from 'express'
import { CreateUser } from '../controllers/Create.js'
import { GetUsers, GetWorkUser } from '../controllers/Read.js'
import { UpdateUser } from '../controllers/Update.js'
import { DeleteUser } from '../controllers/Delete.js'


export const PersonRouter=express.Router()

PersonRouter.post('/',CreateUser)
PersonRouter.get('/',GetUsers)
PersonRouter.get('/:work',GetWorkUser)
PersonRouter.put('/:id',UpdateUser)
PersonRouter.delete('/:id',DeleteUser)