// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import './styles/arcade-theme.css'; // Custom Arcade Theme

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
