import React, {useState} from 'react'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const UpDoc = () => {
  const [fname,setfilename] = useState('')
  const [file,setfile] = useState('')

  

  const senddoc=()=>{
    const formData = new FormData();
    formData.append('File',file)
    axios.post(`http://localhost:8000/upload/${fname}`,formData,{headers:{'Content-Type':'multipart/form-data'}})
  }
  
  return (
    <div>
      <NavBarUploadsSub/>
      
      <div className='formbody'>
      <label className='ttitle'>Upload_documents</label>
      <div className='Form'> 
        <br/>
        <h2>Enter a File Name:</h2>
        <input type='text' onChange={(e)=>{setfilename(e.target.value)}}/>
        <br/><br/>
        <input type='file' onChange={(e)=>{setfile(e.target.files[0])}}/>
        <br/>
        <br/>
        <Link to='/AdminUploads'><input type='submit' value=' Add ' className='formsubmit' onClick={senddoc}/></Link> 
        <Link to='/AdminUploads'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
      </div>
      </div>
      </div>
  )
}
