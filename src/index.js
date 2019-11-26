import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import CollectionsPage from "./pages/collections/CollectionsPage";
import ExhibitionPreviewPage from "./pages/exhibition/ExhibitionPreviewPage";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import {Provider} from "react-redux";
import {createStore} from 'redux';
import menu from './redux/reducers/menu';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Root from "./components/Root";

const store = createStore(menu);

const routing = (
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/collections" component={CollectionsPage}/>
            <Route path="/exhibition" component={ExhibitionPreviewPage}/>
            <Route path="/main" component={MainPage}/>
        </div>
    </Router>
)

ReactDOM.render(
    <Root store={store}/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
