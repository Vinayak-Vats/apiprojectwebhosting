const mongoose = require ("mongoose");
const validator = require ("validator");

const coachSchema = new mongoose.Schema({
    Coaching_Name : 
            {type:String,
            Required:true
            },                           
    
    Subject:{
            type:String,
            required:true
            },
    
    Faculty_Name:{
        type:String,
        required:true
        },

    Teaching_experience: {
        type:String,
        Required:true
             },

    Exam:{
        type:String,
        Required: true
    },

    Address:{
    type:String,
    Required:true
    },

    Address2:{
        type:String,
        Required:true
    },

    Contact:{
        type:String,
        Required:true,
        Unique:false,
    },
    State:{
        type:String,
        Required:true
    },
    City:{
        type:String,
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
     Image_url:{
        type:String,
        Required:true
    },
    Website:{
        type:String,
        Required:true
    },
    Mission:{
        type:String,
        Required:true
    }
     })

//creating a new collection

const Coaching = new mongoose.model("Coaching",coachSchema);

module.exports = Coaching;