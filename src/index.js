import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route ,Switch}  from 'react-router-dom';
import * as actionTypes from "./store_front/actionTypes";
import {initialState} from './store_front/store';



const reducer = (state = initialState, action)=> {
    switch (action.type) {
        case actionTypes.LOAD_STATE:
            return action.payload.state;
        default:
            return initialState;
    }
};



/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render = {(props) => <App {...props} page="chatList"/> } />
                <Route exact path='/chatList' render = {(props) => <App {...props} page="chatList"/> } />
                <Route path='/:page/:chat_id' render = {(props) => <App {...props} page="chat"/> }  />
                <Route component={App}  />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
