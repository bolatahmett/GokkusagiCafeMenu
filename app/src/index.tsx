import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/redux/reducers/index';
import App from '../src/app';
import 'antd/dist/antd.css';
import FirebaseContext from './FirebaseContext';
import firebase, { database } from '../src/firebase';

const store = createStore(rootReducer);

ReactDOM.render(
    <FirebaseContext.Provider value={firebase}>
        <Provider store={store}>
            <App firebase={firebase} database={database} />
        </Provider>
    </FirebaseContext.Provider>
    , document.getElementById('app'))