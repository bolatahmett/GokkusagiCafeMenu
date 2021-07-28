import React, { useState } from 'react';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';
import { Col, Menu, Row } from 'antd';
import {
    AppstoreOutlined, LoginOutlined, CommentOutlined
} from '@ant-design/icons';
import UserLogin from './components/UserLogin';
import RegisterUser from './components/RegisterUser';
import CustomerLogin from './components/CustomerLogin';
import CustomerPassword from './components/CustomerPassword';

interface AppProps {
    firebase: any;
    database: any;
}

function App(props: AppProps) {

    const [user, setUser] = useState({});

    const [pageStatus, setPageStatus] = useState(0);

    const value = { user, setUser, setPageStatus };


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
                                <Menu.Item key="Login" icon={<LoginOutlined />} onClick={() => { setPageStatus(1); }}>
                                    Giriş Yap
                                </Menu.Item>
                                <Menu.Item key="CustomerLogin" icon={<LoginOutlined />} onClick={() => { setPageStatus(3); }}>
                                    Müşteri Girişi
                                </Menu.Item>
                                <Menu.Item key="Order" icon={< AppstoreOutlined />} hidden={true} >
                                    Sipariş Ver
                                </Menu.Item>
                                <Menu.Item key="CallingTheWaiter" icon={<AppstoreOutlined />} hidden={true}>
                                    Garson Çağır
                                </Menu.Item>
                                <Menu.Item key="CommentPersonal" icon={<CommentOutlined />} hidden={true}>
                                    Hizmeti Yorumla
                                </Menu.Item>
                                <Menu.Item key="CustomerLoginPassword" icon={<LoginOutlined />} onClick={() => { setPageStatus(4); }} hidden={true}>
                                    Müşteri Şifresi Al
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col>
                            {pageStatus == 0 && <MainPage></MainPage>}
                            {pageStatus == 1 && <UserLogin></UserLogin>}
                            {pageStatus == 2 && <RegisterUser></RegisterUser>}
                            {pageStatus == 3 && <CustomerLogin></CustomerLogin>}
                            {pageStatus == 4 && <CustomerPassword></CustomerPassword>}
                        </Col>
                    </Row>
                </UserContext.Provider>
            </ErrorBoundary>
        </>
    )
}

export default App;