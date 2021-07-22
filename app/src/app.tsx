import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { mainMenu } from './DB/MainMenu';
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
                <UserContext.Provider value={value}>
                    <Router>
                        <Route exact path="/" component={() => MainPage(mainMenu)} />
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