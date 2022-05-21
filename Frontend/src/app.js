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

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                //Admin routes
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
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))