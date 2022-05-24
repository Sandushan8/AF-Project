const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    ID:{
        type:String   
    },
    Type:{
        type:String
    },
    Details:{
        type:String
    },
    Deadline:{
        type:String
    },
    Marks:{
        type:String
    }
})

const pmember = mongoose.model('panelmember',schema)
module.exports=pmember