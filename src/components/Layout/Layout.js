import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme';
import { GlobalStyle } from './assets/GlobalStyles';
import  Header from '../Layout/Header/Header'


export function Layout({ children }) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header/>
          {children}
      </ThemeProvider>
  );
}
