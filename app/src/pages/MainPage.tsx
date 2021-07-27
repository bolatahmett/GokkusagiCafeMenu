import React, { useEffect, useState } from 'react'
import { BackTop, Card, Col, Collapse, List, Row, Space } from 'antd';
import { MenuModel } from '../Model/MenuModel';
import { RightOutlined } from '@ant-design/icons';
import { getMenu } from '../DB/Menu';
const { Meta } = Card;
const { Panel } = Collapse;

function MainPage(props: any) {
    const [mainMenu, setMainMenu] = useState([]);

    useEffect(() => {
        if (mainMenu.length == 0) {
            getMenu("MainMenu", setMainMenu);
        }
    }, []);

    const cards = mainMenu.map((value: MenuModel) => {
        return <Panel showArrow={false}
            header={
                <Card
                    hoverable
                    style={{ width: "240px" }}
                    cover={<img alt="example" src={value.ImageSrc}
                    />}>
                    <Meta title={value.Title} description={value.Description} />
                </Card>
            }
            key={value.Title}>
            <List
                itemLayout="horizontal"
                dataSource={value.Menu}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<RightOutlined />}
                            title={item.Title}
                            description={item.Description}
                        />
                        <div>{item.Price}</div>
                    </List.Item>
                )}
            />
        </Panel>
    });

    const cardsWithSpace = <Space direction="vertical" size={'large'} align="center">
        <Collapse accordion ghost>
            {cards}
        </Collapse>

    </Space>;

    return (
        <>
            <BackTop />
            <Row justify="center" align="middle" style={{ padding: "30px", paddingTop: "0px" }}>
                {<Col>
                    {cardsWithSpace}
                </Col>}
            </Row>
        </>
    )
}

export default MainPage;