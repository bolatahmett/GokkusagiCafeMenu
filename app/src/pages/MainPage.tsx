import React from 'react'
import { Button, Card, Col, Row, Space } from 'antd';
import { MenuModel } from '../Model/MenuModel';
import { useHistory } from 'react-router-dom';
const { Meta } = Card;

function MainPage(props: any) {

    let history = useHistory();

    const cards = props.map((value: MenuModel) => {
        return <Card
            hoverable
            style={{ width: "240px" }}
            cover={<img alt="example" src={value.ImageSrc}
                onClick={() => { history.push(value.RedirectUrl); window.scrollTo(0, 0); }}
            />}
        >
            <Meta title={value.Title} description={value.Description} />
        </Card>
    });

    return (
        <>
            <Row justify="center" align="middle" style={{ padding: "30px" }}>
                <Col>
                    <Button onClick={() => { history.push('/'); window.scrollTo(0, 0); }}>Ana Menu</Button>
                </Col>
            </Row>
            <Row justify="center" align="middle" style={{ padding: "30px" }}>
                <Col>
                    <Space direction="vertical" size={'large'} align="center">
                        {cards}
                    </Space>
                </Col>
            </Row>
            <Row justify="center" align="middle" style={{ padding: "30px" }}>
                <Col>
                    <Button onClick={() => { history.push('/'); window.scrollTo(0, 0); }}>Ana Menu</Button>
                </Col>
            </Row>
        </>
    )
}

export default MainPage;