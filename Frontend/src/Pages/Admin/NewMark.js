import React, {useState} from 'react'
import axios from 'axios'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'
import '../../css/Admin/forms.css'
export const NewMark = () => {
  const [Title,setTitle] = useState('')
  const [Type,setType] = useState('')
  const [Details,setDetails] = useState('')
  const [MarksA,setMarksA] = useState('')
  const [SpecialI,setSpecialI] = useState('')
  
  const submitM = () =>{
    axios.post('http://localhost:8000/markingscheme', 
    {Title:Title, 
    Type:Type,
    Details:Details,
    MarksA:MarksA,
    SpecialI:SpecialI
  })
    
  }
  return (
    <div>
      <NavBarUploadsSub/>
        <div className='formbody'>
        <h1 className='ttitle'>New_Marking_Scheme</h1>
        <div className='Form'>
        <label>Title</label><br/>
        <input type='text' onChange={(e)=>{
          setTitle(e.target.value)
        }}/><br/><br/>
        <label>Type</label><br/>
        <input type='text' onChange={(e)=>{
          setType(e.target.value)
        }}/><br/><br/>
        <label>Details</label><br/>
        <input type='text' onChange={(e)=>{
          setDetails(e.target.value)
        }}/><br/><br/>
        <label>Marks allocation</label><br/>
        <input type='text' onChange={(e)=>{
          setMarksA(e.target.value)
        }}/><br/><br/>
        <label>Special Instructions</label><br/>
        <input type='text' onChange={(e)=>{
          setSpecialI(e.target.value)
        }}/><br/><br/>
        <div className='formbuttons'>
          <input type='submit' value=' Add ' className='formsubmit' onClick={submitM}/>
          <input type='submit' value=' Cancel ' className='formcancel'/>
        </div>
        </div>
        </div>
    </div>
  )
}
