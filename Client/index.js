

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

