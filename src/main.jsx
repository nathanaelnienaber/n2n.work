import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ clean import — no file extension
import './styles.css'; // or remove if you're replacing styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
