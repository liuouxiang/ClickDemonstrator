/*
Copyright 2021 RWTH Aachen University
*/

import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router'

import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'


import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'
// Containers
import {Layout} from './containers';
// Pages
import {Login, Page404, Page500, Register} from './views/Pages';



// import { renderRoutes } from 'react-router-config';


const history = createBrowserHistory();//{basename :"/metrology"});

var reducer = combineReducers({});
const initial_state = {};

const store = createStore(
    connectRouter(history)(reducer), // new root reducer with router state
    initial_state,
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            // ... other middlewares ...
        ),
    ),
);

const root_render = () => {
    let state = store.getState();
    if (true) {
        return (<Layout dispatch={store.dispatch}/>);
    } else {
        return (<Redirect to="/login"/>);
    }
}

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/login" name="Login Page" component={Login}/>
                        <Route exact path="/register" name="Register Page" component={Register}/>
                        <Route exact path="/404" name="Page 404" component={Page404}/>
                        <Route exact path="/500" name="Page 500" component={Page500}/>
                        <Route path="/" name="Home" render={root_render}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
