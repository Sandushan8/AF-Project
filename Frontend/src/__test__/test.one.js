import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from '../Pages/Student/homePage'

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<HomePage></HomePage>,div)
})