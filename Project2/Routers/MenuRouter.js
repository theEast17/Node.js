import express from 'express'
import { CreateMenu } from '../controllers/Create.js'
import { GetMenuReciepeByName, GetMenus } from '../controllers/Read.js'

export const MenuRouter=express.Router()

MenuRouter.post('/menu',CreateMenu)
MenuRouter.get('/menu',GetMenus)
MenuRouter.get('/menu/:taste',GetMenuReciepeByName)