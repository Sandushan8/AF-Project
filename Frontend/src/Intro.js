import React from 'react'
import './intro.css'
import { Link } from 'react-router-dom'
export const Intro = () => {
  return (
    <div>
        <div className='introbody'>
          <div className='introcontent'>
              <Link to='/AdminHome'><button className='introbutton'>Admin</button></Link> <Link to='studentmain'><button className='introbutton'>Student</button></Link> <Link to='/register'><button className='introbutton'>Supervisor</button></Link>
            <h1 className='introMainH'>Select a Role</h1>
            <p className='introMainP'>The Future Awaits You</p>
          </div>
        </div>
    </div>
  )
}