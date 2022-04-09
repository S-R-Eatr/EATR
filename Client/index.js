

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    
    <App tab="home" />
    
);


/*
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);



*/
