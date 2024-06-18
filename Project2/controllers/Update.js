import { MenuModel } from "../models/menuSchema.js"
import { PersonModel } from "../models/personSchema.js"

const repeatFunction = async (req, res, modelName) => {
    try {
        const params = req.params.id
        const updatedData = req.body

        const response = await modelName.findByIdAndUpdate(params, updatedData,
            { new: true, runValidators: true })
        if (!response) {
            return res.status(402).json({ message: 'Person not Found' })
        }
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const UpdateUser = async (req, res) => {
    await repeatFunction(req, res, PersonModel)
}

export const UpdateMenu = async (req, res) => {
    await repeatFunction(req,res,MenuModel)
}