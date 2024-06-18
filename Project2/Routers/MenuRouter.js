import express from 'express'
import { CreateMenu } from '../controllers/Create.js'
import { GetMenuReciepeByName, GetMenus } from '../controllers/Read.js'
import { UpdateMenu } from '../controllers/Update.js'
import { DeleteMenu } from '../controllers/Delete.js'

export const MenuRouter=express.Router()

MenuRouter.post('/menu',CreateMenu)
MenuRouter.get('/menu',GetMenus)
MenuRouter.get('/menu/:taste',GetMenuReciepeByName)
MenuRouter.put('/menu/:id',UpdateMenu)
MenuRouter.delete('/menu/:id',DeleteMenu)