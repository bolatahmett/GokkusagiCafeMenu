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
        <Row justify="center" style={{ paddingTop: "50px" }}>
            <Col xs={20} sm={16} md={12} lg={8} xl={8}>
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
                        rules={[{ required: true, message: 'Lütfen telefon numarası giriniz!' }]}
                    >
                        <Input placeholder={"Telefon Numarası"} addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="Name"
                        rules={[{ required: true, message: 'Lütfen isim giriniz!' }]}
                    >
                        <Input placeholder={"Isim"} />
                    </Form.Item>

                    <Form.Item
                        name="Surname"
                        rules={[{ required: true, message: 'Lütfen soyisim giriniz!' }]}
                    >
                        <Input placeholder={"Soyisim"} />
                    </Form.Item>

                    <Form.Item
                        name="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen şifre giriniz!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder={"Şifre (Görevliden isteyiniz.)"} />
                    </Form.Item>

                    <Form.Item>
                        <Row>
                            <Col span={7} offset={1}>
                                <Button block ghost type="primary" htmlType="reset" onClick={() => context.setPageStatus(0)}>
                                    Vazgeç
                                </Button>

                            </Col>
                            <Col span={7} offset={1}>
                                <Button block ghost type="primary" htmlType="submit">
                                    Onayla
                                </Button>
                            </Col>

                            <Col span={7} offset={1}>
                                <Button block ghost type="primary" onClick={() => context.setPageStatus(1)}>
                                    Yönetici
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