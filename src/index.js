import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';
import ThemeProvider from './context/ThemeContext';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './index.css';
import '../src/assets/css/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
