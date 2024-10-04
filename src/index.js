import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App';
import DataContextt from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextt>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextt>
);