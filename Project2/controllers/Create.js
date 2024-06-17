import { MenuModel } from "../models/menuSchema.js";
import { PersonModel } from "../models/personSchema.js";

export const CreateUser = async (req, res) => {
    const data = req.body
    try {
        const newUser = await PersonModel.create({
            name: data.name,
            age: data.age,
            work: data.work,
            mobile: data.mobile,
            email: data.email,
            address: data.address,
            salary: data.salary
        });
        res.status(201).json({ id: newUser._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const CreateMenu=async (req, res) => {
    const data = req.body
    try {
        const newMenu = await MenuModel.create({
            name:data.name,
            price: data.price,
            taste:data.taste,
            is_drink:data.is_drink,
            ingredients:data.ingredients,
            num_sales:data.num_sales,
          });
          res.status(201).json({ id: newMenu._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
