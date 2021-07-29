import { Form, Input, Button, Col, Row } from 'antd';
import React from 'react';
import { updateMenu } from '../DB/Menu';
import { MenuModel } from '../Model/MenuModel';
import { Typography } from 'antd';
import { useState } from 'react';

const { Text } = Typography;

const MenuEdit = (props: any) => {

    const [success, setSuccess] = useState(false);

    const onFinish = (values: any) => {
        debugger;
        let menuInfo: MenuModel = {
            Code: props.code,
            Title: values.Title,
            Description: values.Description,
            Price: values.Price,
            ImageSrc: "./../../../images/noimage.jpeg"
        };

        let newMenu: MenuModel[] = [];
        let menu = props.menu.filter((e: MenuModel) => { return e.Code === props.code })[0];

        const isExist = props.menu.filter((e: any) => { return e.Title === values.Title }).length

        if (isExist) {
            menu.Menu.forEach((element: MenuModel) => {
                if (values.Title === element.Title) {
                    newMenu.push(menuInfo);
                } else {
                    newMenu.push(element);
                }
            });
            menu.Menu = newMenu;
        } else {
            menu.Menu.push(menuInfo);
        }

        updateMenu(menu, menu.Code);

        setSuccess(true);
    };

    return (
        <Row justify="center" align="middle" style={{ height: "inherit" }}>
            <Col>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                    initialValues={{ Title: props.item?.Title, Description: props.item?.Description, Price: props.item?.Price }}
                >
                    <Form.Item
                        name="Title"
                        rules={[{ required: true, message: 'Lütfen başlık giriniz!' }]}
                    >
                        <Input placeholder="Başlık" />
                    </Form.Item>

                    <Form.Item
                        name="Description"
                        rules={[{ required: true, message: 'Lütfen açıklama giriniz!' }]}
                    >
                        <Input placeholder="Açıklama" />
                    </Form.Item>

                    <Form.Item
                        name="Price"
                        rules={[{ required: true, message: 'Lütfen ücret giriniz!' }]}
                    >
                        <Input placeholder="Ücret (0.00)" />
                    </Form.Item>

                    <Form.Item>
                        <Row>
                            <Col span={12}>
                                <Button type="primary" htmlType="submit">
                                    Onayla
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Row hidden={!success}>
                            <Col>
                                <Text type="success">Değişiklikler kaydedildi.</Text>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default MenuEdit;