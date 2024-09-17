import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "react-alice-carousel/lib/alice-carousel.css";
import AuthContextprovider from './context/AuthContext';
import CryptoContext from './context/CryptoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextprovider>
      <CryptoContext>

        <App />

      </CryptoContext>
    </AuthContextprovider>


  </React.StrictMode>
);
