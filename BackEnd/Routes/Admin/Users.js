const router = require("express").Router();
const student = require('../../Models/Student/studentReg')
const panelmember = require('../../Models/Admin/panelmember')

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
router.route("/panelmember").post((req, res) => {
 const pm = new panelmember({
     ID:req.body.ID,
     Department:req.body.Dep,
     Name:req.body.Name,
     Email:req.body.Email,
     MobileN:req.body.MobileN,
     
    })
    console.log(req.body)
    pm.save(pm).then(data=>{
        res.json(data)
    })
})
router.route("/panelmember").get((req, res) => {
    panelmember.find().then(data=>{
        res.json(data)
    })
})
router.route('/panelmember/:id').delete((req,res) =>{
    let id = req.params.id
    panelmember.findByIdAndDelete(id)
})






module.exports = router