import React,{useState,useEffect} from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
import axios from 'axios'

export const PanelMember = () =>{
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/panelmember').then((getData)=>{
      setData(getData.data)
    })
  })
    return(
      <div>
      <NavBarUSubtopic/>
        <div className='usercontainer'>
        <label className='ttitle'>Panel Member</label>
        <table className='table'>
          <tr className='headt'>
            <th>Staff ID</th>
            <th>Department</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.ID}</td>
                  <td>{data.Department}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.MobileN}</td>
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