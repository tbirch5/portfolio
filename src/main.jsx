import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css';
import '@fontsource/inter';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);
