import React from 'react'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'

export const UpDoc = () => {
  return (
    <div>
      <NavBarUploadsSub/>
      <div>
        <label className='ttitle'> Upload documents</label>
        <br/>
        <h2>Enter a File Name:</h2>
        <form>
          <input type='file'/>
        </form>
      </div>
      </div>
  )
}
