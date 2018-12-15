import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Link }  from 'react-router-dom';
import { initialStore } from './store/store';
import {reducer} from './store/reducer';


// const store  = createStore(reducer, /* preloadedState, */
//     +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
