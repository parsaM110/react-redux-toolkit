import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux'; // provide global store to all components


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> // provide global store to all components
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
