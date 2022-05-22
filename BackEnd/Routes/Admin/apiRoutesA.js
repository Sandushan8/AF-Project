const submission = require('../../Models/Admin/SubmissionT')





exports.create = async (req,res) =>{
    console.log(req.body)
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

exports.find = async (req,res)=>{
    submission.find().then(sub=>{
        res.send(sub)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Error in Get"
        })
    })
 }

 exports.update = async (req,res)=>{
    if(!req.body){
        return res.send({message:'Empty'})
    }

    const id = req.body.ID
    submission.updateOne({ID:id}, req.body)
    .then(data=>{
            res.send(data)   
    })
}

exports.delete = async (req,res)=>{
    if(!req.body){
        return res.send({message:'Empty'})
    }
    const id = req.params.id
    
    submission.deleteOne({ID:id})
    .then(
            res.send('Successfully deleted') 
    )
}