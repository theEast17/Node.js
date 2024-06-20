import { MenuModel } from "../models/menuSchema.js";
import { PersonModel } from "../models/personSchema.js";

export const GetUsers = async (req, res) => {
    try {
        const data = await PersonModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetUserProfile=async(req,res)=>{
    try {
        const data=req.userPayload
        const userId=data.id
        const user=await PersonModel.findById(userId)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const GetWorkUser = async (req, res) => {
    try {
        const params = req.params
        if (params.work === 'waiter' || params.work === 'chef' || params.work === 'manager') {
            const response = await PersonModel.find({ work: params.work })
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: 'Invalid Worktype' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetMenus = async (req, res) => {
    try {
        const data = await MenuModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetMenuReciepeByName = async (req, res) => {
    try {
        const params = req.params
        if (params.taste === 'spicy' || params.taste === 'sweet' || params.taste === 'sour') {
            const response = await MenuModel.find({ taste: params.taste })
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: 'Invalid taste' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
