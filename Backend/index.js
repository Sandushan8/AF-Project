const express = require('express')


const app = express();

app.use((req,res)=>{
    res.send('Hiii')
})

app.listen(3001,()=>{
    console.log('Server on port 3000')
})