import React from 'react';
import ReactDOM from 'react-dom';
import GobalProvider from "./Context/Global";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GobalProvider>
      <App />
    </GobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);