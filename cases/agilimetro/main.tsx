import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import CaseAgilimetro from './CasePage';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <CaseAgilimetro />
  </React.StrictMode>
);
