const mongoose = require ("mongoose");
const validator = require ("validator");

const sign_upSchema = new mongoose.Schema({
    User_Name : 
            {type:String,
            Required:true
            },                           
    
    Email: {
        type:String,
        Required:true,
        unique: [true,"Follow the format"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
     },
     Password:{
        type:String,
        Required:true
    }
     })

//creating a new collection

const Sign_up = new mongoose.model("Sign_up",sign_upSchema);

module.exports = Sign_up;