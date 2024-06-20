import { GenerateToken } from "../middleware/JwtAuth.js";
import { MenuModel } from "../models/menuSchema.js";
import { PersonModel } from "../models/personSchema.js";

export const CreateUser = async (req, res) => {
    const data = req.body
    try {
        const newUser = await PersonModel.create({
            age: data.age,
            work: data.work,
            mobile: data.mobile,
            email: data.email,
            address: data.address,
            salary: data.salary,
            username: data.username,
            password: data.password
        });
        const userPayload = {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email
        }
        const token = GenerateToken(userPayload)
        res.status(201).json({ id: newUser._id, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const CreateMenu = async (req, res) => {
    const data = req.body
    try {
        const newMenu = await MenuModel.create({
            name: data.name,
            price: data.price,
            taste: data.taste,
            is_drink: data.is_drink,
            ingredients: data.ingredients,
            num_sales: data.num_sales,
        });
        res.status(201).json({ id: newMenu._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const LoginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(401).json({ message: 'Please Enter email or password' })
        }
        const user=await PersonModel.findOne({email})
        if(!user){
            return res.status(402).json({ message: 'User not exist' })
        }
        if(!(await user.comparePassword(password))){
            return res.status(400).json({ message: 'Password is Incorrect' })
        }

        const userPayload = {
            id: user.id,
            username: user.username,
            email: user.email
        }
        const token = GenerateToken(userPayload)
        res.status(201).json({ id: user._id, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
