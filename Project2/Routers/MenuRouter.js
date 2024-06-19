import express from 'express'
import { CreateMenu } from '../controllers/Create.js'
import { GetMenuReciepeByName, GetMenus } from '../controllers/Read.js'
import { UpdateMenu } from '../controllers/Update.js'
import { DeleteMenu } from '../controllers/Delete.js'

export const MenuRouter=express.Router()

MenuRouter.post('/',CreateMenu)
MenuRouter.get('/',GetMenus)
MenuRouter.get('/:taste',GetMenuReciepeByName)
MenuRouter.put('/:id',UpdateMenu)
MenuRouter.delete('/:id',DeleteMenu)