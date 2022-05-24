import React from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
import '../../css/Admin/userdiv.css'

export const CoSupervisor = () =>{
    return(
      <div>
      <NavBarUSubtopic/>
        <div className='members'>
        <label className='ttitle'>Co-Supervisor</label>
            <table className='table'>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Specialization</th>
            <th>Research Field</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {/* <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.ID}</td>
                  <td>{data.Type}</td>
                  <td>{data.Email}</td>
                  <td>{data.SDetes}</td>
                  <td>{data.PP}</td>
                  <td>{data.Price}</td>
                  <td><Link to='/update'><button class='update' onClick={()=>setID(data.ID)}>Update</button></Link></td>
                  <td><button class='delete' onClick={()=>passdelete(data.ID)}>Delete</button></td>
                </tr>
              )
            })}
            
          </tbody> */}
        </table>
        </div>
        </div>
    )
}