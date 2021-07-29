import React, { useContext, useEffect, useState } from 'react'
import { BackTop, Button, Card, Col, Collapse, List, Popconfirm, Row, Space } from 'antd';
import { MenuModel } from '../Model/MenuModel';
import { RightOutlined } from '@ant-design/icons';
import { getMenu, updateMenu } from '../DB/Menu';
import UserContext from '../components/UserContext';
import MenuEdit from '../components/MenuEdit';
const { Meta } = Card;
const { Panel } = Collapse;

function MainPage(props: any) {
    const [mainMenu, setMainMenu] = useState([]);

    const context = useContext(UserContext);

    useEffect(() => {
        if (mainMenu.length == 0) {
            getMenu("MainMenu", setMainMenu);
        }
    }, []);

    const deleteMenuItem = (menu: MenuModel, item: MenuModel) => {
        let newMenu: MenuModel[] = [];
        menu.Menu.forEach(element => {
            if (item.Title !== element.Title) {
                newMenu.push(element);
            }
        });
        menu.Menu = newMenu;

        updateMenu(menu, menu.Code);
        getMenu("MainMenu", setMainMenu);
    }

    const cards = mainMenu.map((value: MenuModel) => {
        return <Panel showArrow={false}
            header={
                <Card
                    hoverable
                    style={{ maxWidth: "400px" }}
                    cover={<img alt="example" src={value.ImageSrc}
                    />}>
                    <Meta title={value.Title} description={value.Description} />
                </Card>
            }
            key={value.Title}>
            <Popconfirm
                title={<MenuEdit code={value.Code} item={undefined} menu={mainMenu}></MenuEdit>}
                placement="top"
                onConfirm={() => getMenu("MainMenu", setMainMenu)} okText="Tamamlandı" cancelText="Vazgeç"
            >
                {(context.user as IUserModel)?.Type === 1 && <Button type="primary" shape="round" ghost style={{ width: "100%" }}> Menü Ekle </Button>}
            </Popconfirm>

            <List
                itemLayout="horizontal"
                dataSource={value.Menu}
                renderItem={item => (
                    <List.Item
                        actions={(context.user as IUserModel)?.Type === 1 && [
                            <Popconfirm
                                title={<MenuEdit code={value.Code} item={item} menu={mainMenu}></MenuEdit>}
                                placement="top"
                                onConfirm={() => getMenu("MainMenu", setMainMenu)} okText="Tamamlandı" cancelText="Vazgeç"
                            >
                                <a key="list-edit">Düzenle</a>
                            </Popconfirm>,
                            <Popconfirm placement="top" title={"Menu silinecek emin misiniz?"} onConfirm={() => deleteMenuItem(value, item)} okText="Yes" cancelText="No">
                                <a key="list-delete">Sil</a>
                            </Popconfirm>
                        ]}
                    >
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