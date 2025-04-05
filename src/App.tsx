import React from 'react';
import "./i18n/i18n";
import { MainLayout } from './Containers';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { DARK_THEME } from './Utils/themes';

function App() {

  return (
    <ThemeProvider theme={DARK_THEME}>
      <CssBaseline />
      <Container>
          <MainLayout/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
