import React from 'react';
// import { Route, Switch, NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import './home.less'
import Charts from '../components/charts/charts';
import HomeList from '../components/home-list/home-list';
class Home extends React.Component {
    render() {
        return (
            // <div>
            //     <NavLink to="/home/Component1" replace>==>Component1</NavLink>

            //     <NavLink to="/home/Component2" replace>==>Component2</NavLink>
            //     <Switch>
            //         <Route exact  path="/home/Component1" component={Component1} />
            //         <Route exact  path="/home/Component2" component={Component2} />
            //     </Switch>
            // </div>

            <div className="home">
                <div className="gutter-example">
                    <Row type="flex" justify="space-around">
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <div>浏览量</div>
                                <div className="num">12560</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <div>订单量</div>
                                <div className="num">2</div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <div>总金额</div>
                                <div className="num">￥999</div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="chartContent">
                    <Charts />
                </div>
                <div className="listContent">
                    <Row type="flex" justify="space-around">
                        <Col span={11}> <HomeList /></Col>
                        <Col span={11}> <HomeList /></Col>
                    </Row>
                </div>
            </div>


        )
    }
}
export default Home


