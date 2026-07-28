import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import AtuacaoPage from '../AtuacaoPage';
import { ATUACOES } from '../data';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AtuacaoPage atuacao={ATUACOES['sistemas-dados-sap']} />
  </React.StrictMode>
);
