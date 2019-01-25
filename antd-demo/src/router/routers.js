import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../home/home';
import  Recover from '../recover/recover';
class routers extends React.Component {
    render() {
        return (
            <div>
                <Switch>

                
                <Route path="/home" component={Home} />

                <Route path="/recover" component={Recover} />
                </Switch>
            </div>
        )
    }
}
export default routers