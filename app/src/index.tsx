import React from 'react';
import ReactDOM from 'react-dom';
import FirebaseContext from '../src/FirebaseContext';
import firebase, { database } from '../src/firebase';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/redux/reducers/index';
import App from '../src/app';
import 'antd/dist/antd.css';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <FirebaseContext.Provider value={firebase}>
        <Provider store={store}>
            <App firebase={firebase} database={database} />
        </Provider>
    </FirebaseContext.Provider>
    , document.getElementById('app'))