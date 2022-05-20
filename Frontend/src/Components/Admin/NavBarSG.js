import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Admin/NavBarA.css'
export const NavBarSG = () => {
  return (
    <div className='navA'>
        <nav className='Adnav'>
            <label className='alogo'>STUDENT GROUPS</label>
            <ul className='a_navul'>
            <Link to='/AdminHome'><li className='a_navli'>Home</li></Link>
            <Link to='/'><li className='a_navli'>Assign panel members</li></Link>
            </ul>
        </nav>
    </div>
  )
}