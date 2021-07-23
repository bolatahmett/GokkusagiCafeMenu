import React, { useState } from 'react';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';
import { Button, Col, Menu, Row } from 'antd';
import {
    AppstoreOutlined, LoginOutlined, CommentOutlined, MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

function App() {

    const [user, setUser] = useState({});
    const [toggleCollapsed, setToggleCollapsed] = useState(true);
    const value = { user, setUser };

    return (
        <>
            <ErrorBoundary
                // @ts-ignore
                fallbackRender={({ error, resetErrorBoundary }) => (
                    <div>
                        <h1>An error occurred: {error.message}</h1>
                        <button onClick={resetErrorBoundary}>Try again</button>
                    </div>
                )}
            >
                <UserContext.Provider value={value}>
                    <Row>
                        <Col>
                            <Button type="primary" onClick={() => { setToggleCollapsed(!toggleCollapsed) }} style={{ marginBottom: 16 }}>
                                {React.createElement(toggleCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>
                        </Col>
                        <Col>
                            <Menu mode={"vertical-right"}
                                hidden={toggleCollapsed}
                                inlineCollapsed={toggleCollapsed} style={{
                                    position: "absolute",
                                    zIndex: 99999
                                }}>
                                < Menu.Item key="Order" icon={< AppstoreOutlined />} >
                                    Sipariş Ver
                                </Menu.Item>
                                <Menu.Item key="CallingTheWaiter" icon={<AppstoreOutlined />}>
                                    Garson Çağır
                                </Menu.Item>
                                <Menu.Item key="CommentPersonal" icon={<CommentOutlined />}>
                                    Hizmeti Yorumla
                                </Menu.Item>
                                <Menu.Item key="Login" icon={<LoginOutlined />} onClick={() => {
                                    setToggleCollapsed(false);
                                    console.log(process.env.FIREBASE_CONFIG);
                                }}>
                                    Giriş Yap
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col>
                            <MainPage></MainPage>
                        </Col>
                    </Row>
                </UserContext.Provider>
            </ErrorBoundary>
        </>
    )
}

export default App;