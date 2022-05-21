import React,{useState} from "react";
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/Student/footter";
import "../../css/Student/topicRegistration.css"

function TopicRegister() {
    const Id=(sessionStorage.getItem('mySessionData'))
    const[faculty,setfaculty]=useState();
    const[dis,setDis]=useState();

    const[file,setFile]=useState('');
    const[filename,setFilename]=useState('');


    const topicRegHandler=()=>{
        alert(file);
    }

    const fileHandler=(e)=>{
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    return (
        <div className="student_body">
            <NavBar />
            <div className="topicRegWrapper">
                <div className="inputWrapper">
                    <input type="text" placeholder="Group Id..." value={Id} className="inputArea"/> <br/>
                    <select className="facSelect" onChange={(event) => { setfaculty(event.target.value) }} >
                            <option value="0" className="optBack">-Faculties-</option>
                            <option value="Business Management" className="optBack">Business Management </option>
                            <option value="Faculty of Engineering" className="optBack">Faculty of Engineering </option>
                            <option value="Faculty of Computing" className="optBack">Faculty of Computing</option>
                    </select><br/>
                    <input type="text" placeholder="Topic..." className="inputArea"/><br/>
                    <textarea rows="15" cols="57" className="topicDiscription" placeholder="Topic Discription..." onChange={((event)=>{setDis(event.target.value)})} /><br/>
                    <input type="file" className="fileSelect" onChange={fileHandler}/> <br/>
                    <input type="button" onClick={topicRegHandler} className="topicRegbtn" value="Send"/>

                </div>
            </div>
            <Footter />
        </div>
    )
}
export default TopicRegister;