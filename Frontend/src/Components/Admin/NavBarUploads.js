import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Admin/NavBarA.css'
export const NavBarUploads = () => {
  return (
    <div className='navA'>
        <nav className='Adnav'>
            <label className='alogo'>USERS</label>
            <ul className='a_navul'>
            <Link to='/AdminHome'><li className='a_navli'>Home</li></Link>
            <Link to='/'><li className='a_navli'>New Submission</li></Link>
            <Link to='/'><li className='a_navli'>New marking schemes</li></Link>
            <Link to='/'><li className='a_navli'>Upload document/presentation templates</li></Link>
            
            </ul>
        </nav>
    </div>
  )
}