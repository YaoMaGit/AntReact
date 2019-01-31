import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LoadableComponent from '../components/nprogress/nprogress';
const Home = LoadableComponent(()=>import('../home/home'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const Recover = LoadableComponent(()=>import('../recover/recover'))  //参数一定要是函数，否则不会懒加载，只会代码拆分

class routers extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/api/home" component={Home} />
                    <Route path="/api/recover" component={Recover} />
                </Switch>
            </div>
        )
    }
}
export default routers