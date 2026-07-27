import React from 'react';
import ReactDOM from 'react-dom/client';
import './sites.css';
import SitesPage from './SitesPage';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SitesPage />
  </React.StrictMode>
);
