import React, {useState,useEffect} from 'react'
import { NavBarUsers } from '../../Components/Admin/NavBarUsers'
import '../../css/Admin/user.css'
import axios from 'axios'
export const Users = () => {
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/staff').then((getData)=>{
      setData(getData.data)
    })
  })
 
    return(
      <div>
      <NavBarUsers/>
        <div className='usercontainer'>
        <label className='ttitle'>Staff</label>
        <table className='table'>
          <tr className='headt'>
            <th>Role</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.staff_type}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  </tr>
              )
            })} 
          </tbody>
        </table>
        </div>
        </div>
    )
}
