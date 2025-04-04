import React from 'react';
import { MainLayout } from './Containers';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { DARK_THEME } from './Resources/Themes';

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
