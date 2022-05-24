import React from 'react'
import '../../css/Admin/userdiv.css'
import { NavBarUsers } from '../../Components/Admin/NavBarUsers'

export const Supervisor = () =>{
    return(
      <div>
        <NavBarUsers/>
        <div className='members'>
            <h1>Supervisor</h1>
            <table>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Email</th>
            <th>Special Details</th>
            <th>Pre-Payment</th>
            <th>Price</th>
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