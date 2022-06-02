const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

    staff_type:{
        type:String,
    },
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
});

const RegisterStaff = new mongoose.model("Staff", registerSchema);

module.exports = RegisterStaff;