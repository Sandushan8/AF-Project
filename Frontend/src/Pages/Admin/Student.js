import React, {useEffect,useState} from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
import axios from 'axios'

export const Student = () =>{
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/student').then((getData)=>{
      setData(getData.data)
    })
  })

    return(
      <div>
      <NavBarUSubtopic/>
        <div className='usercontainer'>
        <label className='ttitle'>Student</label>
            <table className='table'>
          <tr className='headt'>
            <th>ID</th>
            <th>Name</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.FistrMemberRegNo}</td>
                  <td>{data.FistrMemberName}</td>
                  <td><button class='update'>Update</button></td>
                  <td><button class='delete'>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        </div>
    )
}