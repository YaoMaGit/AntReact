import React from 'react';
import { Row, Col, Input } from 'antd';
import './recover.less';
import RecoverList from '../components/recover/recover-list/recover-list';
import Component1 from '../components/component1';

const Search = Input.Search;

const gutterTab = [
    { type: 1, name: '待派单', num: 12560 },
    { type: 2, name: '待接单', num: 120 },
    { type: 3, name: '上门中', num: 62 },
    { type: 4, name: '已取货', num: 75 },
    { type: 5, name: '已入库', num: 856 }]



class page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '0',
        }
    };
    gutterboxClk(index) {
        // this.state.activeTab = index
        this.setState({
            activeTab: index
        })
        console.log(this.state.activeTab)
    }
    gutterboxFn() {
        let DomArr = []
        for (const key in gutterTab) {
            DomArr.push(
                <Col key={key} onClick={() => this.gutterboxClk(key)} className="gutter-row" span={3}>
                    <div className={this.state.activeTab == key ? "gutter-box active" : 'gutter-box default'}>
                        <div>{gutterTab[key].num}</div>
                        <div>{gutterTab[key].name}</div>
                    </div>
                </Col>

            )
            console.log(key)
        }


        return DomArr
    }
    render() {
        return (
            <div id="recover">
                <div className="gutter-example">
                    <Row type="flex" justify="space-around">
                        {this.gutterboxFn()}
                    </Row>
                </div>

                <div className='recoverlistCss'>
                    <div>
                        <Row type="flex" justify="end">
                            <Col>
                                <Search
                                    size='large'
                                    placeholder="请输入编号名称等"
                                    onSearch={value => console.log(value)}
                                    enterButton
                                    style={{ width: '300px', margin: '40px 0 20px 0', }}
                                />
                            </Col>
                        </Row>

                    </div>
                    {/* <div>
                        <Component1 listData={this.state.activeTab}></Component1>
                    </div> */}
                    <div>
                        <RecoverList PropsType={this.state.activeTab} />
                    </div>
                </div>
            </div>


        )
    }
}
export default page