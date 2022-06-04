import React,{ useState } from "react";
import "../../css/Student/supervisorDetail.css"
import Avatar from "../../Images/Student/avatar.png"
import RequestForm from "./requestForm";


function SupervisorDetail(props) {    
    const [btnpopup, Setbtnpopup] = useState(false)
    const [ReqbtnEffect, SetReqbtnEffect] = useState("Request")
 
    const reqFormHandler = () => {
        if (btnpopup === false) {
            Setbtnpopup(true);
            SetReqbtnEffect("Close")
        }
        else {
            Setbtnpopup(false);
            SetReqbtnEffect("Request")
        }
    }

    return (
        <div className="detailWrapper clearFix">
            <div className="supervisorAvatarWraper ">
                <img src={Avatar} className="supervisorAvatar" width="60px" />
                <textarea rows="1" cols="32" className="supervisorName" disabled value={props.Name}/>
                <textarea rows="2" cols="32" className="supervisorName" disabled value={props.Email}/> 
            </div>
            <div className="supervisorInfoWraper">
                <h4 className="re-Heading">{props.Area}</h4>
                <textarea rows="6" cols="65" className="re-Discription" disabled value={props.About} />
                <input type="button" className="requestBtn" value={ReqbtnEffect} onClick={reqFormHandler} />
            </div>

            <RequestForm trigger={btnpopup} Name={props.Name} Id={props.ID} ReqPosition={props.Reqposition} Email={props.Email}/>

        </div>
    )
}
export default SupervisorDetail;