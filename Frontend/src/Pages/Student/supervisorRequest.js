import React, { useState, useEffect } from "react";
import "../../css/Student/supervisorRequest.css";
import Footter from "../../Components/Student/footter";
import NavBar from "../../Components/Student/navBar";
import SupervisorDetail from "../../Components/Student/supervisorDetail";
import RequestForm from "../../Components/Student/requestForm";
import axios from "axios";


function SupervisorRequest() {
    const id = (sessionStorage.getItem('mySessionData'));
    const position = "Senior Lecturer"
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/details/get/${position}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(err => {
                alert(err)
            })
    },[])


    return (
        <div className="student_body">
            <NavBar />
            <div className="supervisorDetailWrapper">
                <div className="filterDetailsWrapper">
                    <input type="search" className="supervisorNameSearch" placeholder=" Search Supervisor Name..." />
                    <h3 className="heading">Supervisors</h3>
                    <input type="search" className="re-areaSearch" placeholder="Search Supervisor's Research Area..." />
                </div>
                <div className="supervisorsDetails clearFix" >
                    {details.map((detail) => (
                        <div>
                            <SupervisorDetail Name={detail.s_name} ID={id} Reqposition={position} Email={detail.email} About={detail.about} Area={detail.area} />
                        </div>
                    ))}
                </div>



            </div>
            <Footter />
        </div>
    )
}

export default SupervisorRequest;