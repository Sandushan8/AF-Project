const router = require("express").Router();
const student = require('../../Models/Student/studentReg')
const panelmember = require('../../Models/Admin/registration')

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
// router.route("/supervisor").get((req, res) => {
 
// })
// router.route("/cosupervisor").get((req, res) => {
 
// })

router.route("/panelmember").get((req, res) => {
    panelmember.find({staff_type:'Panel Member'}).then(data=>{
        res.json(data)
    })
})
router.route('/panelmember/:id').delete((req,res) =>{
    let id = req.params.id
    panelmember.findByIdAndDelete(id)
})






module.exports = router