import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import React, { useContext } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import UserContext from '../components/UserContext';
import { loginUser } from '../DB/user';

const UserLogin = () => {

    const context = useContext(UserContext);

    const onSuccess = (user: IUserModel) => {
        context.setUser(user);
        context.setPageStatus(0);
    }

    const onFinish = (values: any) => {
        let userInfo: ILoginModel = {
            IdentifyNumber: values.IdentifyNumber,
            Password: values.Password
        };

        loginUser(userInfo, onSuccess);
    };

    return (
        <Row justify="center" align="middle" style={{ height: "inherit" }}>
            <Col>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="IdentifyNumber"
                        rules={[{ required: true, message: 'Lütfen TC kimlik numarasını giriniz!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="TC Kimik No" />
                    </Form.Item>
                    <Form.Item
                        name="Password"
                        rules={[{ required: true, message: 'Lütfen şifre giriniz!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Şifre"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a onClick={() => context.setPageStatus(2)} >register now!</a>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default UserLogin;