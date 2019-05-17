import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import * as serviceWorker from './serviceWorker';
import'./index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
