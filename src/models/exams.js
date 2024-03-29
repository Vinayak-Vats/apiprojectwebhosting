const mongoose = require ("mongoose");
const validator = require ("validator");

const examschema = new mongoose.Schema({
    Exam_Name : {type:String,
            Required:true,
    },
            
    
    Date: {
                type:String,
                Required:true
            },
    
    Detail:{
        type:String,
        required:true
        },

    Documents_Required:{
        type:String,
        required:true
    },

    Eligibility_Criteria: {
        type:String,
        Required:true
             },

    Registeration_Form_Link:{
        type:String,
        Required: true
    },

    Image_url:{
        type:String,
        Required:true
    }
})

//creating a new collection

const Exam = new mongoose.model("Exam",examschema);

module.exports = Exam;