import React, { useState } from 'react';
import "./i18n/i18n";
import { HeaderLayout, MainLayout } from './Containers';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { DARK_THEME } from './Utils/themes';
import MAIN_LAYOUTS, { KeysOfMainLayout } from "@Constants/mainLayouts";

function App() {
  const [selectedMainContent, setSelectedMainContent] = useState<KeysOfMainLayout>(MAIN_LAYOUTS.CV)
  return (
    <ThemeProvider theme={DARK_THEME}>
      <CssBaseline />
      <HeaderLayout onButtonClicked={setSelectedMainContent}/>
      <Container className='App_Container'>
          <MainLayout selectedLayout={selectedMainContent}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
