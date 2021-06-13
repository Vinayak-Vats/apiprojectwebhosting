const mongoose = require ("mongoose");
const validator = require ("validator");

const resourceSchema = new mongoose.Schema({
    Book_Name : {type:String,
            Required:true,
            minlength:4 ,                  //setting minimum length . only used for a string
     },     
            
    
    Author_Name:{
            type:String,
            required:true
            },
    
    Softcopy_OR_Hardcopy:{
        type:String,
        required:true
        },

    Description:{
        type:String,
        required:true
    },

    Book_Image: {
        type:String,
        Required:true,
             },

    Book_Edition:{
        type:String,
        Required: true
    },

    Subject:{
    type:String,
    Required:true,
    },
    
    Resource_url:{
        type:String,
        Required:true
    }
})

//creating a new collection

const Resource = new mongoose.model("Resource",resourceSchema);

module.exports = Resource;