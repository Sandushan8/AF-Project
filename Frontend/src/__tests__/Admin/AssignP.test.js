const axios =require("axios")

const stugrp = axios.get('http://localhost:8000/users/student')
const sub = axios.get('http://localhost:8000/submark/sub')
const mark = axios.get('http://localhost:8000/submark/mark')

test('fetch student groups',()=>{
    expect(stugrp).not.toBeNull()
})

test('fetch submissions',()=>{
    expect(sub).not.toBeNull()
})

test('fetch marking schemes',()=>{
    expect(mark).not.toBeNull()
})

