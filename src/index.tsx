import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './config/fonts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import rebusTheme from "./config/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={rebusTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
