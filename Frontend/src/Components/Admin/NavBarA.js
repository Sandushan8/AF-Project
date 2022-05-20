import React from 'react'
import '../../css/Admin/NavBarA.css'
export const NavBarA = () => {
  return (
    <div className='navA'>
        <nav className='Adnav'>
            <label className='alogo'>Admin</label>
            <ul className='a_navul'>
                <li className='a_navli'>Home</li>
                <li className='a_navli'>Users</li>
                <li className='a_navli'>Student Groups</li>
                <li className='a_navli'>Uploads</li>
            </ul>
        </nav>
    </div>
  )
}
