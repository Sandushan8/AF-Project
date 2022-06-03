const axios =require("axios")

const stugrp = axios.get('http://localhost:8000/users/student')



test('fetch student groups',()=>{
    expect(stugrp).not.toBeNull()
})