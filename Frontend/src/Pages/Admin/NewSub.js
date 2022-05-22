import React, {useState} from 'react'
import { NavBarUploads } from '../../Components/Admin/NavBarUploads'
import axios from 'axios'

export const NewSub = () => {
  const [ID,setID] = useState('')
  const [Type,setType] = useState('')
  const [Details,setDetails] = useState('')
  const [Deadline,setDeadline] = useState('')
  const [Marks,setMarks] = useState('')
  
  const submitA = () =>{
    axios.post('http://localhost:8000/submission', 
    {ID:ID, 
    Type:Type,
    Details:Details,
    Deadline:Deadline,
    Marks:Marks})
    
  }

  return (
    <div>
      <NavBarUploads/>
        <div>
        <h1>New Submission</h1>
        <label>Submission ID</label><br/>
        <input type='text' onChange={(e)=>{
          setID(e.target.value)
        }}/><br/><br/>
        <label>Type</label><br/>
        <input type='text' onChange={(e)=>{
          setType(e.target.value)
        }}/><br/><br/>
        <label>Details</label><br/>
        <input type='text' onChange={(e)=>{
          setDetails(e.target.value)
        }}/><br/><br/>
        <label>Deadline</label><br/>
        <input type='text' onChange={(e)=>{
          setDeadline(e.target.value)
        }}/><br/><br/>
        <label>Marks allocated</label><br/>
        <input type='text' onChange={(e)=>{
          setMarks(e.target.value)
        }}/><br/><br/>
        <div className='formbuttons'>
          <input type='submit' value=' Add ' className='formsubmit' onClick={submitA}/>
          <input type='submit' value=' Cancel ' className='formcancel'/>
        </div>
        </div>
    </div>
  )
}
