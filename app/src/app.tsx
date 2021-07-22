import React, { useState } from 'react';
import UserContext from '../src/components/UserContext';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MainPage from './pages/MainPage';


function App() {

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
                    <MainPage></MainPage>
                </UserContext.Provider>
            </ErrorBoundary>
        </>
    )
}

export default App;