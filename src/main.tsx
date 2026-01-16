import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    -webkit-overflow-scrolling: touch;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Гарантируем что все контейнеры влезают в экран */
  .mobile-safe {
    width: 100%;
    max-width: 100vw;
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }

  button {
    font-family: inherit;
    touch-action: manipulation;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Улучшенный скроллбар */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4290 100%);
  }

  /* Исправление для iOS Safari */
  @supports (-webkit-touch-callout: none) {
    body {
      min-height: -webkit-fill-available;
    }
    
    #root {
      min-height: -webkit-fill-available;
    }
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <div className="mobile-safe">
      <App />
    </div>
  </React.StrictMode>
);