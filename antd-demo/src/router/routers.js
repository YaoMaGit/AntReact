import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LoadableComponent from '../components/nprogress/nprogress';
const Home = LoadableComponent(()=>import('../home/home'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const Recover = LoadableComponent(()=>import('../recover/recover/recover'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const QualityType = LoadableComponent(()=>import('../recover/quality-type/quality-type')) 
const QualityManage = LoadableComponent(()=>import('../recover/quality-manage/quality-manage')) 
const OverRecoverQuality = LoadableComponent(()=>import('../recover/over-recover-quality/over-recover-quality')) 

class routers extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/api/home" component={Home} />
                    <Route path="/api/recover" component={Recover} />
                    <Route path="/api/quality-type" component={QualityType} />
                    <Route path="/api/quality-manage" component={QualityManage} />
                    <Route path="/api/over-recover-quality" component={OverRecoverQuality} />
                </Switch>
            </div>
        )
    }
}
export default routers