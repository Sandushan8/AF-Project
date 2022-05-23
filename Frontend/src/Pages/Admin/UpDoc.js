import React from 'react'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'

export const UpDoc = () => {
  return (
    <div>
      <NavBarUploadsSub/>
      
      <div className='formbody'>
      <label className='ttitle'>Upload_documents</label>
      <div className='Form'> 
        <br/>
        <h2>Enter a File Name:</h2>
        <input type='text'/>
        <br/><br/>
        <input type='file'/>
        <br/>
        <br/>
        <input type='submit' value=' Add ' className='formsubmit'/>
        <input type='submit' value=' Cancel ' className='formcancel'/>
        
        
      </div>
      </div>
      </div>
  )
}
