import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the standard setup for a React application.
// 1. It finds the div with the id of 'root' in your public/index.html file.
const rootElement = document.getElementById('root');

// 2. It tells React to take control of that element.
const root = ReactDOM.createRoot(rootElement);

// 3. It renders your main App component (from App.js) inside that element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

