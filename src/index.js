/* jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.css';
//import Life from './pages/demo/Life';
//import Admin from './admin';
//mport Home from './pages/route_demo/router3/router';
import Rt from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Rt />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();