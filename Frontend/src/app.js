import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Main } from './Pages/Admin/Main'

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))