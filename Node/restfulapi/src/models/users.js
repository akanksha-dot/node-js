const mongoose = require("mongoose");
const validator = require("validator");

const userinfo = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    
        email : {
            type: String,
            required : true,
            unique :[true , 'This Email id is already present'],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("INVALID EMAIL")
            }
        }


        },

         age :{
            type: Number,
            required : true
         },

         gender :{
            type: String,
            required : true
         }
    
    
})

/* we will create new collection*/

const Users = new mongoose.model('User',userinfo);

module.exports = Users;
