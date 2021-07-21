import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { BurgerMenu } from './DB/BurgerMenu';
import { mainMenu } from './DB/MainMenu';
import { MangalMenu } from './DB/MangalMenu';
import { TostMenu } from './DB/TostMenu';
import { PizzaMenu } from './DB/PizzaMenu';
import { MakarnaMenu } from './DB/MakarnaMenu';

interface AppProps {
}

function App(props: AppProps) {

    const [user, setUser] = useState({});
    const value = { user, setUser };

    return (
        <>
            <ErrorBoundary
                // @ts-ignore
                fallbackRender={({ error, resetErrorBoundary, componentStack }) => (
                    <div>
                        <h1>An error occurred: {error.message}</h1>
                        <button onClick={resetErrorBoundary}>Try again</button>
                    </div>
                )}
            >
                {
                    //sandvicMenu
                    //aperatifMenu
                    //tatliMenu
                    //sogukIcecekMenu
                    //sicakIcecekMenu
                    //vitaminBarMenu
                }
                <UserContext.Provider value={value}>
                    <Router>
                        <Route exact path="/" component={() => MainPage(mainMenu)} />
                        <Route exact path="/Burgerler" component={() => MainPage(BurgerMenu)} />
                        <Route exact path="/Mangaldan" component={() => MainPage(MangalMenu)} />
                        <Route exact path="/TostCesitleri" component={() => MainPage(TostMenu)} />
                        <Route exact path="/PizzaCesitleri" component={() => MainPage(PizzaMenu)} />
                        <Route exact path="/Makarna" component={() => MainPage(MakarnaMenu)} />
                        <Route exact path="/Sandvic" component={() => MainPage(mainMenu)} />
                        <Route exact path="/Salatalar" component={() => MainPage(mainMenu)} />
                        <Route exact path="/Aperatifler" component={() => MainPage(mainMenu)} />
                        <Route exact path="/Tatlilar" component={() => MainPage(mainMenu)} />
                        <Route exact path="/SogukIcecek" component={() => MainPage(mainMenu)} />
                        <Route exact path="/SicakIcecek" component={() => MainPage(mainMenu)} />
                        <Route exact path="/VitaminBar" component={() => MainPage(mainMenu)} />
                    </Router>
                </UserContext.Provider>

            </ErrorBoundary>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const user = state.user;
    return { user };
};


export default connect(mapStateToProps, null)(App);