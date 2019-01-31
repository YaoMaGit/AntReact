
import React, { Component } from 'react';
import { Input, Icon, Button, notification } from 'antd';
import { history  } from 'react-router-dom'

import './login.less'
import BGParticle from './BGParticle.js';

class page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            PassWord: '',
        };
    }
    componentDidMount() {
        this.particle = new BGParticle('backgroundBox')
        this.particle.init()
        this.openNotification()
    }
    componentWillUnmount() {
        this.particle.destory()
    }

    openNotification = () => {
        const args = {
            message: '请输入ID',
            description: '用户名:admin    密码:admin',
            duration: 0,
        };
        notification.open(args);
    }
    loginClk = () => {
        console.log(this.state.userName)
        console.log(this.state.PassWord)
        this.context.history.pushState(null, '/home')
    }
    emitEmptyUser = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    emitEmptyPassWord = () => {
        this.passWordInput.focus();
        this.setState({ PassWord: '' });
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    onChangePassWord = (e) => {
        this.setState({ PassWord: e.target.value });
    }
    render() {
        const { userName } = this.state;
        const suffixUserName = userName ? <Icon type="close-circle" onClick={this.emitEmptyUser} /> : null;
        const { PassWord } = this.state;
        return (
            <div>
                <div id="card_div">
                    <div className="login_box">
                        <div>
                            <p className="title_p">欢迎登陆后台管理系统</p>
                        </div>
                        <div>
                            <Input
                                placeholder="账号"
                                prefix={<Icon type="user" />}
                                suffix={suffixUserName}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                            />
                        </div>
                        <div>
                            <Input.Password
                                placeholder="密码"
                                prefix={<Icon type="key" />}
                                value={PassWord}
                                onChange={this.onChangePassWord}
                                ref={node => this.passWordInput = node}
                            />
                        </div>
                        <div className="login_btn">
                            <Button onClick={this.loginClk} type="primary">登录</Button>
                        </div>
                    </div>
                </div>
                {/* reactparticles.js 粒子 */}
                {/* <Particles id="your-component-particles" config="particles.json" /> */}
                {/* 自定义 */}
                <div style={styles.backgroundBox} id='backgroundBox' />

            </div>

        )

    }
}
const styles = {
    backgroundBox: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${require('./img/bg3.jpg')})`,
        backgroundSize: '100% 100%'
    }
}
export default page