import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Admin/NavBarA.css'
export const NavBarSGSub = () => {
  return (
    <div className='navA'>
        <nav className='Adnav'>
            <label className='alogo'>STUDENT GROUPS</label>
            <ul className='a_navul'>
            <Link to='/AdminStudentg'><li className='a_navli'>Home</li></Link>
            <Link to='/AssignP'><li className='a_navli'>Assign panel members</li></Link>
            </ul>
        </nav>
    </div>
  )
}