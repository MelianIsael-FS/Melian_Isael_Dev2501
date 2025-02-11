import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';  // Make sure this is correctly pointing to the App.js file
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();