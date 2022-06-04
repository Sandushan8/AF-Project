import React, { useState } from "react";
import '../../css/Student/login.css'
import Footter from "../../Components/Student/footter";
import LogOutNavBar from "../../Components/Student/LogOutNavBar";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import loginImg from "../../Images/Student/login.jpg"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
 

function LoginPage() {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const [loader, setLoader] = useState(false)

    const loginHandler = () => {
        axios.get(`http://localhost:8000/details/login/${id}/${password}`)
            .then(res => {
                if (res.data == 1) {
                    setLoader(true)
                    setTimeout(() => {
                        setLoader(false)
                        sessionStorage.setItem('mySessionData', id)
                        history.push("/home");
                    },3000)
                }
                else {
                    alert("Invalid login details.")
                    window.location.reload(false);
                }
            })
            .catch(() => {
                alert('Login faild!!!');
            });
    }

    return (
        <div className="student_body">
            <LogOutNavBar />
            <div className="mainWrapper">
                <div className="imagewrapper">
                    <img src={loginImg} alt="education" className="image"/>
                </div>
                <div className="loginWrapper">
                    <div className="loginInputFieldArea">
                        <h2 className="welcome"><u> Welcome!</u></h2>
                        <input type="text" placeholder="Group ID...." className="logInputFields" onChange={(event) => { setId(event.target.value) }} /><br />
                        <input type="password" placeholder="Password...." className="logInputFields" onChange={(event) => { setPassword(event.target.value) }} /><br />
                        <p className="forgotPassword">Forgot Password</p>
                        <button className="loginbtn" onClick={loginHandler}>Sign in</button><br />
                    </div>
                </div>
                {loader ? <Backdrop sx={{ color: '#e09d39' }} open><CircularProgress color="inherit" /></Backdrop> : null}
            </div>
            <Footter />
        </div>
    );
}
export default LoginPage;