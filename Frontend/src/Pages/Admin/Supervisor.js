import React, {useState,useEffect} from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
import axios from 'axios'

export const Supervisor = () =>{
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/supervisor').then((getData)=>{
      setData(getData.data)
    })
  })
    return(
      <div>
      <NavBarUSubtopic/>
        <div className='usercontainer'>
        <label className='ttitle'>Supervisor</label>
        <table className='table'>
          <tr className='headt'>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  
                  <td><button className='update'>Update</button></td>
                  <td><button className='delete'>Delete</button></td>
                  </tr>
              )
            })} 
          </tbody>
        </table>
        </div>
        </div>
    )
}