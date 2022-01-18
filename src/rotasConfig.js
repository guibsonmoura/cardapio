import React from 'react';
import Home from './screens/Home';
import Lanches from './screens/lanches';
import Bebidas from './screens/bebidas';
import Comidas from './screens/Comidas';
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
                <Route exact path='/bebidas'>
                    <Bebidas/>
                </Route>
                <Route exact path='/Comidas'>
                    <Comidas/>
                </Route>
            </Switch>
        </Router>
    )
}