import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {AuthProvider} from "./auth";
import {ToastProvider} from "./components/Toast";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
