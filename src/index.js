/*
Copyright 2021 RWTH Aachen University
*/

import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();

