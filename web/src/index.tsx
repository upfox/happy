import React from 'react';        // O próprio react
import ReactDOM from 'react-dom'; // React interação com a DOM da página

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  Componente : Função que retorna um jsx ou html
  Por que se utiliza className invés do class, pois a palavra class é reservada dentro do javasript
*/