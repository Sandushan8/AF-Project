import React from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'


export const PanelMember = () =>{
    return(
      <div>
      <NavBarUSubtopic/>
        <div className='usercontainer'>
        <label className='ttitle'>Panel Member</label>
            <table className='table'>
          <tr className='headt'>
            <th>ID</th>
            <th>Department</th>
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