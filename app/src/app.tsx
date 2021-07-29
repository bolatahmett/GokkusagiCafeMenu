import React, { useState } from 'react';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';
import { Button, Col, Row } from 'antd';
import UserLogin from './components/UserLogin';
import RegisterUser from './components/RegisterUser';
import CustomerLogin from './components/CustomerLogin';
import CustomerPassword from './components/CustomerPassword';

interface AppProps {
    firebase: any;
    database: any;
}

function App(props: AppProps) {

    const tempUser = {
        Type: -1
    } as unknown as IUserModel;
    const [user, setUser] = useState(tempUser);

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
                    <Button id={"Login"} block ghost type="primary" shape="round" size={"large"} className={"menu-button"} style={{ marginTop: "50px" }} onClick={() => { setPageStatus(1); }}> Giriş Yap </Button>
                    <Button id={"CustomerLogin"} block ghost type="primary" shape="round" size={"large"} className={"menu-button"} style={{ marginTop: "100px" }} onClick={() => { setPageStatus(3); }}>  Müşteri Girişi </Button>
                    <Button id={"Order"} type="primary" shape="round" className={"menu-button"} style={{ marginTop: "150px" }} hidden={(user as IUserModel)?.Type !== 0}>Sipariş Ver</Button>
                    <Button id={"CallingTheWaiter"} type="primary" shape="round" className={"menu-button"} style={{ marginTop: "200px" }} hidden={(user as IUserModel)?.Type !== 0}> Garson Çağır</Button>
                    <Button id={"CommentPersonal"} type="primary" shape="round" className={"menu-button"} style={{ marginTop: "250px" }} hidden={(user as IUserModel)?.Type !== 0}> Hizmeti Yorumla </Button>
                    <Button id={"CustomerLoginPassword"} type="primary" shape="round" className={"menu-button"} style={{ marginTop: "300px" }} onClick={() => { setPageStatus(4); }} hidden={(user as IUserModel)?.Type !== 1}> Müşteri Şifresi Al </Button>
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