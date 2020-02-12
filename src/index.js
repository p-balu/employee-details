import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import configureStore from "./client/redux/configureStore.js";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
