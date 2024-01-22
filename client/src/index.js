import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/inter';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import * as themes from './themes';
import { getCookie } from './assets/js/util';

const root = ReactDOM.createRoot(document.getElementById('root'));

// fontFamily: 'Plus Jakarta Sans',
//   fontFamily: 'IBM Plex Sans',




// declare module '@mui/joy/styles' {
//   interface PaletteCommonOverrides {
//     green: true;
//   }
// }





root.render(
  <React.StrictMode>
    <CssVarsProvider
      theme={themes[(getCookie('theme') || 'light')]}>


      <CssBaseline />

      <App />
    </CssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
