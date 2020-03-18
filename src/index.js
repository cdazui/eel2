import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "@store/index.js"
import { Provider } from "react-redux"
import { HashRouter as Router } from "react-router-dom"
import "./mock/index"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));

