import mongoose from "mongoose";

const Menu=new mongoose.Schema({
    name:{
       type:String,
       required:true,
       unique:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    },
},{
    timestamps:true
})

export const MenuModel=mongoose.model('menu',Menu)

