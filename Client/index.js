

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
        <Provider store={store}>
            <App />
        </Provider>
);



// root.render(
    
//     <App tab="home" />
    
// );


/*


import React from 'react';
import { render, createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

const root = createRoot(document.getElementById('contents'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


*/
