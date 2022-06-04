import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { AssignP } from './Pages/Admin/AssignP'
import { CoSupervisor } from './Pages/Admin/CoSupervisor' 


//Admin routes
import { Main } from './Pages/Admin/Main'
import { NewMark } from './Pages/Admin/NewMark'
import { NewSub } from './Pages/Admin/NewSub'
import { PanelMember } from './Pages/Admin/PanelMember'
import { Student } from './Pages/Admin/Student'
import { Studentg } from './Pages/Admin/Studentg'
import { Supervisor } from './Pages/Admin/Supervisor'
import { UpDoc } from './Pages/Admin/UpDoc'
import { Uploads } from './Pages/Admin/Uploads'
import { Users } from './Pages/Admin/Users'
import { UpdateSub } from './Pages/Admin/UpdateSub'
import { UpdateMark } from './Pages/Admin/UpdateMark'
//student routes

import LoginPage from './Pages/Student/loginPage';
import HomePage from './Pages/Student/homePage';
import LogOutHome from './Pages/Student/logOutHome';
import Messenger from './Pages/Student/messenger';
import Registration from './Pages/Student/registration';
import StudentProfile from './Pages/Student/studentProfile';
import SupervisorRequest from './Pages/Student/supervisorRequest';
import CoSupervisorRequest from './Pages/Student/co-supervisorRequest';
import MemberReg from './Pages/Student/memberRegistration';
// import Test from './test';
import TopicRegister from './Pages/Student/topicRegistration';
import MyRequest from './Pages/Student/myRequest';

//student routes end

const App = () => {
    return (
        <BrowserRouter>
            <Switch>


                <Route exact path='/AdminHome' component={Main}/>
                <Route exact path='/AdminUser' component={Users}/>
                <Route exact path='/AdminStudentg' component={Studentg}/>
                <Route exact path='/AdminUploads' component={Uploads}/>
           
                <Route exact path='/CoSupervisor' component={CoSupervisor}/>
                <Route exact path='/Supervisor' component={Supervisor}/>
                <Route exact path='/PanelMember' component={PanelMember}/>
                <Route exact path='/Student' component={Student}/>   
                <Route exact path='/AssignP' component={AssignP}/>
                <Route exact path='/NewSub' component={NewSub}/>  
                <Route exact path='/NewMark' component={NewMark}/>  
                <Route exact path='/UpDoc' component={UpDoc}/>
                <Route exact path='/UpdateSub' component={UpdateSub}/>      
                <Route exact path='/UpdateMark' component={UpdateMark}/> 

                {/* Admin routes */}
                <Route exact path='/AdminHome' component={Main} />
                <Route exact path='/AdminUser' component={Users} />
                <Route exact path='/AdminStudentg' component={Studentg} />
                <Route exact path='/AdminUploads' component={Uploads} />

                {/* Admin routes end */}

                {/* <Route path="/supervisorChat" exact component={Test} /> */}

                {/* Student routes */}

                <Route path="/" exact component={LogOutHome} />
                <Route path="/signin" exact component={LoginPage} />
                <Route path="/signup" exact component={Registration} />
                <Route path="/home" exact component={HomePage} />
                <Route path="/chat" exact component={Messenger} />
                <Route path="/studentProfile" exact component={StudentProfile} />
                <Route path="/supervisorRequest" exact component={SupervisorRequest} />
                <Route path="/coSupervisorRequest" exact component={CoSupervisorRequest} />
                <Route path="/memberRegistration" exact component={MemberReg} />
                <Route path="/topicRegister" exact component={TopicRegister} />
                <Route path="/myRequest" exact component={MyRequest} />

                {/* Student routes end- */}


            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))