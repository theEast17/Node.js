import express from 'express'
import { CreateUser, LoginUser } from '../controllers/Create.js'
import { GetUserProfile, GetUsers, GetWorkUser } from '../controllers/Read.js'
import { UpdateUser } from '../controllers/Update.js'
import { DeleteUser } from '../controllers/Delete.js'
import { JwtAuthMiddleware } from '../middleware/JwtAuth.js'


export const PersonRouter=express.Router()

PersonRouter.post('/signup',CreateUser)
PersonRouter.post('/login',LoginUser)
PersonRouter.get('/',JwtAuthMiddleware,GetUsers)
PersonRouter.get('/profile',JwtAuthMiddleware,GetUserProfile)
PersonRouter.get('/:work',JwtAuthMiddleware,GetWorkUser)
PersonRouter.put('/:id',JwtAuthMiddleware,UpdateUser)
PersonRouter.delete('/:id',JwtAuthMiddleware,DeleteUser)