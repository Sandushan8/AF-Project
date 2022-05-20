import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Admin/NavBarA.css'
export const NavBarUsers = () => {
  return (
    <div className='navA'>
        <nav className='Adnav'>
            <label className='alogo'>USERS</label>
            <ul className='a_navul'>
            <Link to='/AdminHome'><li className='a_navli'>Home</li></Link>
            <Link to='/'><li className='a_navli'>Supervisors</li></Link>
            <Link to='/'><li className='a_navli'>Co-Supervisors</li></Link>
            <Link to='/'><li className='a_navli'>Panel Members</li></Link>
            <Link to='/'><li className='a_navli'>Students</li></Link>
            </ul>
        </nav>
    </div>
  )
}