import React from 'react';
import {HashRouter, Switch} from 'react-router-dom';
import BaseRouter from './router/baserouter';

const App = () => (
    <HashRouter>
        <Switch>
            <BaseRouter />
        </Switch>
    </HashRouter>
);


export default App;
