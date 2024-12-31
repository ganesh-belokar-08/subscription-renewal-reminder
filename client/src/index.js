

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from react-dom/client for React 18
import './index.css'; // Importing global styles
import App from './App'; // Import the main App component

// Create the root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
