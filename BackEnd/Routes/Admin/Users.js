const router = require("express").Router();
const student = require('../../Models/Student/studentReg')

router.route("/student").get((req, res) => {
 student.find().then((data)=>{
     res.json(data)
 })
})
// router.route("/supervisor").get((req, res) => {
 
// })
// router.route("/cosupervisor").get((req, res) => {
 
// })
// router.route("/panelmember").get((req, res) => {
 
// })




module.exports = router