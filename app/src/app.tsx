import React, { useState } from 'react';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';
import { Col, Menu, Row } from 'antd';
import {
    AppstoreOutlined, LoginOutlined, CommentOutlined
} from '@ant-design/icons';

function App() {

    const [user, setUser] = useState({});
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
                            <Menu mode={"horizontal"}>
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
                                    // @ts-ignore
                                    console.log(JSON.parse(process.env.FIREBASE_CONFIG).apiKey);
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