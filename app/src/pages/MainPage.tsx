import React, { useState } from 'react'
import { BackTop, Button, Card, Col, Collapse, List, Row, Space } from 'antd';
import { MenuModel } from '../Model/MenuModel';
import { mainMenu } from '../DB/MainMenu';
import { RightOutlined } from '@ant-design/icons';
const { Meta } = Card;
const { Panel } = Collapse;

function MainPage(props: any) {

    const [menu, setMenu] = useState(mainMenu);


    const cards = menu.map((value: MenuModel) => {
        return <Panel showArrow={false} header={<Card
            hoverable
            style={{ width: "240px" }}
            cover={<img alt="example" src={value.ImageSrc}
            />}
        >
            <Meta title={value.Title} description={value.Description} />
        </Card>} key={value.Title}>
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

    // const list =
    //     <List
    //         itemLayout="horizontal"
    //         dataSource={menu}
    //         renderItem={item => (
    //             <List.Item>
    //                 <List.Item.Meta
    //                     avatar={<RightOutlined />}
    //                     title={item.Title}
    //                     description={item.Description}
    //                 />
    //                 <div>{item.Price}</div>
    //             </List.Item>
    //         )}
    //     />;

    return (
        <>
            <BackTop />
            {/* <Row justify="center" align="middle" style={{ padding: "30px" }}>
                <Col>
                    <Button onClick={() => { setMenu(mainMenu); window.scrollTo(0, 0); }}>Ana Menu</Button>
                </Col>
            </Row> */}
            <Row justify="center" align="middle" style={{ padding: "30px" }}>
                {/* {menu[0].IsBase ? <Col>{cardsWithSpace}</Col> : <Col xs={22} sm={20} md={12} lg={12} xl={12}>{list}</Col>} */}
                {<Col>{cardsWithSpace}</Col>}
            </Row>
        </>
    )
}

export default MainPage;