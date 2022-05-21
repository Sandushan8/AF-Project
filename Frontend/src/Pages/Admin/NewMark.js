import React from 'react'
import { NavBarUploads } from '../../Components/Admin/NavBarUploads'

export const NewMark = () => {
  return (
    <div>
      <NavBarUploads/>
        
        <div>
        <h1>Marking schemes</h1>
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
