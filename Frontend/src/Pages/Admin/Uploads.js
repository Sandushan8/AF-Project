import React, {useEffect,useState} from 'react'
import { NavBarUploads } from '../../Components/Admin/NavBarUploads'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../css/Admin/tables'

export const Uploads = () => {
  const [subData,setData] =useState([])
  const [marksData,setMData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/submission').then((getData)=>{
      setData(getData.data)
    })
  })

  useEffect(()=>{
    axios.get('http://localhost:8000/markingscheme').then((getData)=>{
      setMData(getData.data)
    })
  })


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
    console.log(MID)
  }

  return (
    <div>
      <NavBarUploads/>
      <div className='bodyAd'>
      <br/>
        <label className='ttitle'>Submissions</label><br/>
        <table className='table'>
          <tr class='headt'>
            <th>ID</th>
            <th>Type</th>
            <th>Details</th>
            <th>Deadline</th>
            <th>Marks</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
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
                  <td><Link to='/'><button className='update' onClick={()=>setID(data._id)}>Update</button></Link></td>
                  <td><button className='delete' onClick={()=>passSubdelete(data._id)}>Delete</button></td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
        <br/><br/>
        <label className='ttitle'>Marking schemes</label><br/>
        <table className='table'>
          <tr class='headt'>
            <th>Title</th>
            <th>Type</th>
            <th>Details</th>
            <th>Marks Allocation</th>
            <th>Special instructions</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
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
                  <td><Link to='/'><button className='update' onClick={()=>setMID(data._id)}>Update</button></Link></td>
                  <td><button className='delete' onClick={()=>passMarksdelete(data._id)}>Delete</button></td>
                </tr>
              )
            })} 
          </tbody>
        </table>
        </div>
    </div>
  )
}
