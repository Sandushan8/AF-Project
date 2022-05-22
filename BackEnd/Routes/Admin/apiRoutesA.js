const submission = require('../../Models/Admin/SubmissionT')
const markingscheme = require('../../Models/Admin/MarkingScheme')
const multr = require("multer");
const fileup = require('../../Models/Admin/FileUpload')

//submission
exports.creates = async (req,res) =>{
    const sub = new submission({
        ID:req.body.ID, 
        Type:req.body.Type,
        Details:req.body.Details, 
        Deadline:req.body.Deadline, 
        Marks:req.body.Marks
    })
    sub
        .save(sub)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Error in create"
            })
        })
}

exports.finds = async (req,res)=>{
    submission.find().then(sub=>{
        res.send(sub)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Error in Get"
        })
    })
 }

 exports.updates = async (req,res)=>{
    if(!req.body){
        return res.send({message:'Empty'})
    }

    const id = req.body.ID
    submission.updateOne({ID:id}, req.body)
    .then(data=>{
            res.send(data)   
    })
}

exports.deletes = async (req,res)=>{
    if(!req.body){
        return res.send({message:'Empty'})
    }
    const id = req.params.id
    submission.findByIdAndDelete(id)
    .then(
            res.send('Successfully deleted') 
    )
}
//----------------------------------------------------------------------------------------------------------------------------------

//Marking schemes
exports.createm = async (req,res) =>{
    
    const mscheme = new markingscheme({
        Title:req.body.Title, 
        Type:req.body.Type,
        Details:req.body.Details, 
        MarksA:req.body.MarksA, 
        SpecialI:req.body.SpecialI
    })
    mscheme
        .save(mscheme)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Error in create"
            })
        })
}

exports.findm = async (req,res)=>{
    markingscheme.find().then(sub=>{
        res.send(sub)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Error in Get"
        })
    })
 }

 exports.updatem = async (req,res)=>{
    if(!req.body){
        return res.send({message:'Empty'})
    }
    const id = req.params.id
    markingscheme.findByIdAndUpdate({ID:id}, req.body)
    .then(data=>{
            res.send(data)   
    })
}

exports.deletem = async (req,res)=>{
    if(!req.body){
        return res.send({message:'Empty'})
    }
    const id = req.params.id
    markingscheme.findByIdAndDelete(id)
    .then(
            res.send('Successfully deleted') 
    )
}
//------------------------------------------------------------------------------------------------------------------------------

//storage
//fileup

const strg = multr.diskStorage({
    destination:'./uploads',
    filename:(req,file,callback) =>{
        callback(null,file.originalname)
    },
})

const upload = multr({
    storage:strg
}).single('File')

exports.uploadfile = async (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newFile = new fileup({
                Name: req.body.Name,
                File:{
                    data:req.file.filename,
                    contentType: 'txt'
                }
            })
            newFile.save()
            .then(()=>res.send('Success upload')).catch(err=>{console.log(err)})
        }
    })
}
