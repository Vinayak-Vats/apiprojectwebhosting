const mongoose = require ("mongoose");
const validator = require ("validator");

const loginSchema = new mongoose.Schema({                           
    
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

const Login = new mongoose.model("Login",loginSchema);

module.exports = Login;