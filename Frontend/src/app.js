import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//Admin routes
import { Main } from './Pages/Admin/Main'
import { Studentg } from './Pages/Admin/Studentg'
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
                
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))