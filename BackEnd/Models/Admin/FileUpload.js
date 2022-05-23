const mongoose = require('mongoose')

var schema = new mongoose.Schema(
    {
        Name:{
            type:String
        },
        File:{
            data:Buffer,
            contentType:String
        }

    })


const fileup = mongoose.model('files',schema)
module.exports=fileup