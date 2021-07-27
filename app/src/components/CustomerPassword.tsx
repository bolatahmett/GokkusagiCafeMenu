import { Button, Col, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { registerCustomerKey } from '../DB/user';

const { Text } = Typography;

const CustomerPassword = () => {

    const [key, setKey] = useState("");

    const getPassword = () => {
        const key = registerCustomerKey();
        setKey(key);
    }

    return (
        <>
            <Row justify="center" align="middle" style={{ height: "inherit" }}>
                <Col>
                    <Button type="primary" size={"large"} onClick={getPassword}>
                        Şifre Al
                    </Button>
                </Col>
            </Row>
            <Row justify="center" align="middle" style={{ height: "inherit" }}>
                <Col>
                    <Text code>{key}</Text>
                </Col>
            </Row>
        </>
    );
};

export default CustomerPassword;