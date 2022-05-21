import React from 'react'
import { NavBarUsers } from '../../Components/Admin/NavBarUsers'
import '../../css/Admin/user.css'
export const Users = () => {
  return (
    <div>
      <NavBarUsers/>
      <div className='usercontainer'>
        <h1 className='userh'>Summary</h1>
        <div className='summary'>
        <ul className='halfU'>
        <h1>Students</h1>
        </ul>
        <ul className='halfU'>
        <h1>Staff</h1>
        </ul>
      </div>
        </div>
      
      </div>
     
  )
}
