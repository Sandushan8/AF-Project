import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser'; 
import "../../css/Student/registration.css"
import Footter from "../../Components/Student/footter";
import LogOutNavBar from "../../Components/Student/LogOutNavBar";
import axios from "axios";

function Registration() {

    const [LeaderRegNo, setLeaderRegNo] = useState();
    const [LeaderName, setLeaderName] = useState();
    const [LeaderEmail, setLeaderEmail] = useState();
    const [LeaderContact, setLeaderContact] = useState();
    const [faculty, setfaculty] = useState();
    const [userID, setUserID] = useState();
    const [password, setPassword] = useState();

    const form = useRef();

    const data = {
        LeaderRegNo,
        LeaderName,
        LeaderEmail,
        LeaderContact,
        faculty,
        password
    }

    const registerHandler = () => {
        axios.get('http://localhost:8000/details/request/id')
            .then((res) => {
                register(res.data);

            })
            .catch(() => {
                alert('Opss! Error in id');
            })
    }

    const register = (a) => {

        var id = "2022_REG_" + a
        setUserID(id);

        emailjs.sendForm('service_s5a6fro', 'template_yvadsjq', form.current, '4h9YOGTb2jqtSeqUW')
            .then((result) => {
                alert(`Your login credintials send to ${LeaderEmail}`);
                alert(result.text);

                // axios.post(`http://localhost:8000/details/reg/${id}/${a}`, data)
                //     .then(() => {
                //     })
                //     .catch(() => {
                //         alert('Opss! Error in reg');
                //     })

            }, (error) => {
                alert(error.text);
            });

    }

    return (
        <div className="student_body">
            <div>
                <LogOutNavBar />
            </div>
            <div className="RegistrationWrapper">
                <div className="inputFieldArea">
                    <form ref={form}>
                    <input type="text" className="regInputFields" placeholder="Student Reg No(Leader)..." onChange={(event) => { setLeaderRegNo(event.target.value) }} name="studentReg" /><br />
                    <input type="text" className="regInputFields" placeholder="Student Name..." onChange={(event) => { setLeaderName(event.target.value) }} name="name" /><br />
                    <input type="email" className="regInputFields" placeholder="Student Email(Personal)..." onChange={(event) => { setLeaderEmail(event.target.value) }} name="emails" /><br />
                    <input type="tel" className="regInputFields" placeholder="Student Contact..." onChange={(event) => { setLeaderContact(event.target.value) }} name="contact" /><br />
                    <input type="password" className="regInputFields" placeholder="Password..." /><br />
                    <input type="password" className="regInputFields" placeholder="Re-Password..." onChange={(event) => { setPassword(event.target.value) }} name="password" /><br />
                    <select className="regOption" onChange={(event) => { setfaculty(event.target.value) }} >
                        <option value="0" className="optBack">-Faculties-</option>
                        <option value="Business Management" className="optBack">Business Management </option>
                        <option value="Faculty of Engineering" className="optBack">Faculty of Engineering </option>
                        <option value="Faculty of Computing" className="optBack">Faculty of Computing</option>
                    </select>
                    <button className="registerbtn" onClick={registerHandler}>Register</button>
                    <input type="text" className="regInputFields hide" value={userID} name="user_ID" /><br />
                    </form>
                </div>
            </div>
            <div>
                <Footter />
            </div>
        </div>
    )
}
export default Registration;