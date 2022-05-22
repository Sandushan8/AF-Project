import React, {useEffect,useState} from 'react'
import { NavBarUploads } from '../../Components/Admin/NavBarUploads'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const Uploads = () => {
  const [subData,setData] =useState([])
  const [marksData,setMData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/submission').then((getData)=>{
      setData(getData.data)
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost:8000/markingscheme').then((getData)=>{
      setMData(getData.data)
    })
  },[])


  const passSubdelete = ((ID)=>{
    axios.delete(`http://localhost:8000/submission/${ID}`)
    console.log(ID)
  })
  const passMarksdelete = ((MID)=>{
    axios.delete(`http://localhost:8000/markingscheme/${MID}`)
    console.log(ID)
  })

  const setID =(SID)=>{
    localStorage.setItem('SID',SID)
  }

  const setMID =(MID)=>{
    localStorage.setItem('MID',MID)
    console.log(MID)
  }

  return (
    <div>
      <NavBarUploads/>
        <h1>Submissions</h1><br/>
        <table className='table'>
          <tr class='headt'>
            <th>ID</th>
            <th>Type</th>
            <th>Details</th>
            <th>Deadline</th>
            <th>Marks</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          <tbody class='tbody'>
            {subData.map((data)=>{
              return(
                <tr>
                  <td>{data.ID}</td>
                  <td>{data.Type}</td>
                  <td>{data.Details}</td>
                  <td>{data.Deadline}</td>
                  <td>{data.Marks}</td>
                  <td><Link to='/'><button class='update' onClick={()=>setID(data._id)}>Update</button></Link></td>
                  <td><button class='delete' onClick={()=>passSubdelete(data._id)}>Delete</button></td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
        <br/><br/>
        <h2>Marking schemes</h2><br/>
        <table className='table'>
          <tr class='headt'>
            <th>Title</th>
            <th>Type</th>
            <th>Details</th>
            <th>Marks Allocation</th>
            <th>Special instructions</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          <tbody class='tbody'>
            {marksData.map((data)=>{
              return(
                <tr>
                  <td>{data.Title}</td>
                  <td>{data.Type}</td>
                  <td>{data.Details}</td>
                  <td>{data.MarksA}</td>
                  <td>{data.SpecialI}</td>
                  <td><Link to='/'><button class='update' onClick={()=>setMID(data._id)}>Update</button></Link></td>
                  <td><button class='delete' onClick={()=>passMarksdelete(data._id)}>Delete</button></td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
        
    </div>
  )
}
