import React from 'react'
import { NavBarUploads } from '../../Components/Admin/NavBarUploads'

export const UpDoc = () => {
  return (
    <div>
      <NavBarUploads/>
      <div>
        <h1> Upload documents</h1>
        <br/>
        <h2>Enter a File Name:</h2>
        <form>
          <input type='file'/>
        </form>
      </div>
      </div>
  )
}
