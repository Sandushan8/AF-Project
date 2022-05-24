const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    ID:{
        type:String   
    },
    Department:{
        type:String
    },
    Specialization:{
        type:String
    },
    RField:{
        type:String
    },
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    MobileN:{
        type:String
    }
})

const supervisor = mongoose.model('supervisor',schema)
module.exports= supervisor