const mongoose = require ("mongoose");
const validator = require ("validator");

const coachSchema = new mongoose.Schema({
    Name : {type:String,
            Required:true,
            minlength:4 ,                  //setting minimum length . only used for a string
             },               
            
    
    Address:{
            type:String,
            required:true
            },
    
    Contact:{
        type:String,
        required:true
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
    Subjects: {
        type:String,
        Required:true,
             },

    Exam:{
        type:String,
        Required: true
    },

    Faculty:{
    type:String,
    Required:true,
    },

    Experience:{
        type:String,
        Required:true,
    },

    Website:{
        type:String,
        Required:true,
    }

     
})

//creating a new collection

const Coaching = new mongoose.model("Coaching",coachSchema);

module.exports = Coaching;