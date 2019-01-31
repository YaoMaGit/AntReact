import React from 'react';
import {HashRouter, Switch,Route} from 'react-router-dom';
import BaseRouter from './router/baserouter';
import Login from './login/login';
//路由拦截
function isLogin(nextState, replaceState) {
    const token = sessionStorage.getItem('token')
    console.log(nextState)
    console.log(replaceState)
    if (!token) {
      replaceState('/login')
      // hashHistory.push('/login')
    }
  }

const App = () => (
    <HashRouter>
        <Switch>
            {/* <BaseRouter /> */}
            <Route onEnter={isLogin}  path="/api" component={BaseRouter} />

            <Route path="/login" component={Login} />

        </Switch>
    </HashRouter>
);


export default App;
