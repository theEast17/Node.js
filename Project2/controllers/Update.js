import { PersonModel } from "../models/personSchema.js"

export const UpdateUser = async (req, res) => {
    try {
        const params = req.params.id
        const updatedData = req.body

        if(!updatedData){
            return res.status(400).json({ message: 'Insert the data' })
        }

        const response = await PersonModel.findByIdAndUpdate(params, updatedData, { new: true, runValidators: true })
        if (!response) {
            return res.status(402).json({ message: 'Person not Found' })
        }
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({ message: 'Internal Error' })
    }
}