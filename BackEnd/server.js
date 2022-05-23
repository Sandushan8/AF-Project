const express = require("express");
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

//Ihill files
const iroutes = require('./Routes/Admin/apiRoutesA')

const app = express();

//port Number Assign
const port = process.env.port || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
//Database Connection URL
const URL = process.env.DB_URL;

mogoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

//Check the database connection
const connection = mogoose.connection;
connection.once("open",()=>{
    console.log("This database is Connection success!");
})
//Thivanka Routes
app.use("/details",require("./Routes/Student/apiRoutes"));

//Ihill Routes
app.post('/submission',iroutes.creates)
app.get('/submission',iroutes.finds)
app.put('/submission/:id',iroutes.updates)
app.delete('/submission/:id',iroutes.deletes)
//-----------------
app.post('/markingscheme',iroutes.createm)
app.get('/markingscheme',iroutes.findm)
app.put('/markingscheme/:id',iroutes.updatem)
app.delete('/markingscheme/:id',iroutes.deletem)
//-------------------
app.post('/upload/:fname',iroutes.uploadfile)

//Display the working port
app.listen(port,()=>{
    console.log(`This Server is running in this ${port} port`)
})