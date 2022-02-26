import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/globalStyles';

import 'react-toastify/dist/ReactToastify.css';
import { defaultTheme } from './styles/theme';
import AppProvider from './hooks';
import { Routes } from './routes';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={6}
        theme="colored"
      />
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
        {/* <Routes>
          <Route path="/" element={<Default />} />
        </Routes> */}
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
};
