/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'unstated';
import $ from 'jquery';
import jQuery from 'jquery'; // make jquery globally available

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('app')
);