import React, { useContext } from 'react';
import { Form, Input, Select, Button, Col, Row } from 'antd';
import UserContext from '../components/UserContext';
import { loginCustomerUser } from '../DB/user';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterUser = () => {
    const [form] = Form.useForm();
    const context = useContext(UserContext);

    const onFinish = (values: any) => {
        let user: IUserModel = {
            PhoneNumber: values.PhoneNumber,
            Name: values.Name,
            Surname: values.Surname,
            Email: values.Email === undefined ? "a" : values.Email,
            Password: values.Password,
            Type: 0
        };
        loginCustomerUser(user, setPageStatusAndUser);
    };

    const setPageStatusAndUser = (user: IUserModel) => {
        context.setPageStatus(0);
        context.setUser(user);
    }

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="90">+90</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Row justify="center" align="middle" style={{ height: "inherit" }}>
            <Col  >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        prefix: '90',
                    }}
                    scrollToFirstError
                >

                    <Form.Item
                        name="PhoneNumber"
                        label="Telefon Numarası"
                        rules={[{ required: true, message: 'Lütfen telefon numarası giriniz!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="Name"
                        label="Isim"
                        rules={[{ required: true, message: 'Lütfen isim giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="Surname"
                        label="Soyisim"
                        rules={[{ required: true, message: 'Lütfen soyisim giriniz!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="Password"
                        label="Şifre"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen şifre giriniz!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder={"Şifreyi görevliden isteyiniz."} />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Row>
                            <Col span={6} offset={3}>
                                <Button type="primary" htmlType="reset" onClick={() => context.setPageStatus(0)}>
                                    Vazgeç
                                </Button>

                            </Col>
                            <Col span={6} offset={6}>
                                <Button type="primary" htmlType="submit">
                                    Onayla
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
        </Row >
    );
};

export default RegisterUser;