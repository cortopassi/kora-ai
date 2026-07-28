import React from 'react';
import ReactDOM from 'react-dom/client';
import '../sites.css';
import DemoPage from './DemoPage';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <DemoPage />
  </React.StrictMode>
);
