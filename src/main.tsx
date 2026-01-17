import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './contexts/ThemeContext';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
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
    min-height: 100vh;
    -webkit-overflow-scrolling: touch;
    
    &.light-theme {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      color: #333;
    }
    
    &.dark-theme {
      background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
      color: #e0e0e0;
    }
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

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

  /* Улучшенный скроллбар для темной темы */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .light-theme {
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  }

  .dark-theme {
    ::-webkit-scrollbar-track {
      background: #2d2d2d;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
    }
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
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
    <ThemeProvider>
      <GlobalStyle />
      <div className="mobile-safe">
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);