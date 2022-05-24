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

const cosuper = mongoose.model('cosupervisor',schema)
module.exports=cosuper