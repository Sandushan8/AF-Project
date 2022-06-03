const express = require("express");
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();

//port Number Assign
const port = process.env.port || 8000;

app.use(cors());
app.use(bodyParser.json());

//Database Connection URL
const URL = process.env.DB_URL;

mogoose.connect(URL,{
    useUnifiedTopology:true,
});

//Check the database connection
const connection = mogoose.connection;
connection.once("open",()=>{
    console.log("This database is Connection success!");
})

//Thivanka Routes
app.use("/details",require("./Routes/Student/apiRoutes"));

//Punsisi Supervisor-Routes
const supervisorRouter = require('./Routes/Supervisor/apiRoutes.js');

app.use('/supervisor', supervisorRouter);

//Ihill Routes
//submission type
app.post('/submission',iroutes.creates)
app.get('/submission',iroutes.finds)
app.put('/submission/:id',iroutes.updates)
app.delete('/submission/:id',iroutes.deletes)
//-----------------
//marking schemes
app.post('/markingscheme',iroutes.createm)
app.get('/markingscheme',iroutes.findm)
app.put('/markingscheme/:id',iroutes.updatem)
app.delete('/markingscheme/:id',iroutes.deletem)
//-------------------
//file uploads
app.use('/files',require('./Routes/Admin/Upload'))
//-------------------
//user routes
app.use('/users',require('./Routes/Admin/Users'))

//Display the working port
app.listen(port,()=>{
    console.log(`This Server is running in this ${port} port`)
})