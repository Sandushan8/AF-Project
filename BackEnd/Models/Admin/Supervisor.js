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

const supervisor = mongoose.model('supervisor',schema)
module.exports= supervisor