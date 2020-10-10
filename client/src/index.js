import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HacLanding from "./HackLanding";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./components/redux/redux";

ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <HacLanding/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
