import { Form, Input, Button, Col, Row, Select } from 'antd';
import React, { useContext } from 'react';
import { LockOutlined } from '@ant-design/icons';
import UserContext from '../components/UserContext';
import { loginUser } from '../DB/user';

const { Option } = Select;

const UserLogin = () => {

    const context = useContext(UserContext);

    const onSuccess = (user: IUserModel) => {
        debugger;
        context.setUser(user);
        context.setPageStatus(0);
    }

    const onFinish = (values: any) => {
        let userInfo: ILoginModel = {
            PhoneNumber: values.PhoneNumber,
            Password: values.Password
        };

        loginUser(userInfo, onSuccess);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="90">+90</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Row justify="center" style={{ paddingTop: "50px", height: "inherit" }}>
            <Col>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true, prefix: '90' }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="PhoneNumber"
                        rules={[{ required: true, message: 'Lütfen telefon numarası giriniz!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Telefon numarası" />
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
                        <Button type="primary" block ghost htmlType="submit" className="login-form-button">
                            Giriş
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default UserLogin;