const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    ID:{
        type:String   
    },
    Department:{
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

const pmember = mongoose.model('panelmember',schema)
module.exports=pmember