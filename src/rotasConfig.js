import React from 'react';
import Home from './screens/home';
import Lanches from './screens/lanches';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


export default function(){
    return(
        <Router>
            <Switch>
                <Route exact path='/lanches'>
                    <Lanches/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}