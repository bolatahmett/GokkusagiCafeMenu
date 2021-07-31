import React, { useEffect, useState } from 'react';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';
import { Badge, Button, Col, notification, Row } from 'antd';
import UserLogin from './components/UserLogin';
import RegisterUser from './components/RegisterUser';
import CustomerLogin from './components/CustomerLogin';
import CustomerPassword from './components/CustomerPassword';
import { NotificationOutlined } from '@ant-design/icons';
import { callingWaiter, getWaiterCall } from './DB/user';

interface AppProps {
    firebase: any;
    database: any;
}

function App(props: AppProps) {

    const tempUser = {
        Type: -1
    } as unknown as IUserModel;
    const [user, setUser] = useState(tempUser);

    const [call, setCall] = useState([]);

    const [pageStatus, setPageStatus] = useState(0);


    const callNotification = (deskNo: string) => {
        setCall(call => [...call, deskNo]);
        (user as IUserModel)?.Type === 1 && openNotification(deskNo)
    }

    const value = { user, setUser, setPageStatus };

    useEffect(() => {
        getWaiterCall(callNotification);
    }, []);


    const openNotification = (deskNo: any) => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Masa Çağrısı',
            description: `${deskNo} numaralı masa.`,
            btn,
            key,
            onClose: close,
        });
    };

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
                    {(user as IUserModel)?.Type === 1 && <Badge count={call.length}>
                        <NotificationOutlined style={{ fontSize: '32px', color: '#08c' }} />
                    </Badge>}
                    {user.Type === -1 && <Button id={"Login"} ghost type="primary" shape="round" className={"menu-button"} style={{ marginTop: "10px" }} onClick={() => { setPageStatus(3); }}> Giriş </Button>}
                    {/* <Button id={"Order"} ghost type="primary" shape="round" className={"menu-button"} style={{ marginTop: "250px" }} hidden={(user as IUserModel)?.Type !== 0}>Sipariş Ver</Button> */}
                    <Button id={"CallingTheWaiter"} ghost type="primary" shape="round" className={"menu-button"} style={{ marginTop: "10px" }} hidden={(user as IUserModel)?.Type !== 0} onClick={() => { callingWaiter(user) }}> Garson Çağır</Button>
                    {/* <Button id={"CommentPersonal"} ghost type="primary" shape="round" className={"menu-button"} style={{ marginTop: "300px" }} hidden={(user as IUserModel)?.Type !== 0}> Hizmeti Yorumla </Button> */}
                    <Button id={"CustomerLoginPassword"} ghost type="primary" shape="round" className={"menu-button"} style={{ marginTop: "60px" }} onClick={() => { setPageStatus(4); }} hidden={(user as IUserModel)?.Type !== 1}> Müşteri Şifresi Al </Button>
                    <Button id={"RegisterUser"} ghost type="primary" shape="round" className={"menu-button"} style={{ marginTop: "100px" }} onClick={() => { setPageStatus(2); }} hidden={(user as IUserModel)?.Type !== 1}> Kullanıcı Ekle </Button>
                    <Row justify={"center"}>
                        <Col span={24}>
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