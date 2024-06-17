import mongoose from "mongoose";

const Person=new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    addess:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    },
},{
    timestamps:true
})

export const PersonModel=mongoose.model('User',Person)

