const router = require("express").Router();
const student = require('../../Models/Student/studentReg')
const staff = require('../../Models/Admin/registration')
//student
router.route("/student").get((req, res) => {
 student.find().then((data)=>{
     res.json(data)
 })
})

router.route('/student/:gid/:pmid').patch((req,res)=>{
    let groupid = req.params.gid
    let panelmid = req.params.pmid
    console.log(groupid,panelmid)
    student.updateOne({GrpID:groupid},{$set:{PanelM:panelmid}})
    .then((data)=>{
        res.json(data)
    })
})
//staff
//supervisor
router.route("/supervisor").get((req, res) => {
    staff.find({staff_type:'Supervisor'}).then(data=>{
        res.json(data)
    })
})
//cosupervisor
router.route("/cosupervisor").get((req, res) => {
    staff.find({staff_type:'Co-Supervisor'}).then(data=>{
        res.json(data)
    })
})
//panelmember
router.route("/panelmember").get((req, res) => {
    staff.find({staff_type:'Panel Member'}).then(data=>{
        res.json(data)
    })
})

router.route("/staff").get((req, res) => {
    staff.find().then(data=>{
        res.json(data)
    })
})

router.route('/staff/:id').put((req,res)=>{
    let id =req.params.id
    staff.findByIdAndUpdate(id,req.body)
    .then(data=>{
        res.send(data)
    })
})

router.route('/staff/:id').delete((req,res) =>{
    let id = req.params.id
    staff.findByIdAndDelete(id)
    .then(
        res.send('Successfully deleted') 
    )
})

router.route('/staff').post((req,res)=>{
    const data = new staff({
        staff_type:req.body.staff_type, 
        username:req.body.username,
        email:req.body.email, 
        password:req.body.password 
    })
    data
        .save(data)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Error in create"
            })
        })
})

module.exports = router