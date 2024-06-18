import { MenuModel } from "../models/menuSchema.js"
import { PersonModel } from "../models/personSchema.js"



const repeatFunction = async (req, res, modelName) => {
    const params = req.params.id
    try {
        const response = await modelName.findByIdAndDelete(params)
        if (!response) {
            return res.status(402).json({ error: 'No user found' })
        }
        res.status(200).json({ id: response._id })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const DeleteUser = async (req, res) => {
    await repeatFunction(req, res, PersonModel)
}

export const DeleteMenu = async (req, res) => {
    await repeatFunction(req, res, MenuModel)
}