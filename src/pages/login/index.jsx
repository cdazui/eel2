import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { LoginContainer } from "./styled"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect";


// const onFinish = values => {
//     console.log('Success:', values);
// };

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
@connect(mapStateToProps,mapDispatchToProps)
class Login extends Component {
    
    render() {
        return (
            <LoginContainer>
                <div className="loginContent">
                    <div className="logo_title">CHQFXT</div>
                    <Form
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.props.handleLogin.bind(this)}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '必填信息',
                                },
                            ]}
                        >
                             <Input type="text" prefix={<UserOutlined />} placeholder="请输入用户名" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '必填信息',
                                },
                                {
                                    max: 8, 
                                    message: "密码最大长度为8" 
                                }
                            ]}
                        >
                           <Input type="password" prefix={<LockOutlined />} placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item  name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item className="login_btn">
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginContainer>

        )
    }
}

export default Login;