import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import { store, persistor } from "./app/redux/store";

import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<span>Cargando</span>} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
      <HelmetProvider />
    </Provider>
  </React.StrictMode>,
)
