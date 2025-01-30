import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import
import './index.css';
import ContextProvider from './Context/context.jsx'; // Updated component name
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
   
        <ContextProvider>
            <App />
        </ContextProvider>
    
);
