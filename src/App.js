import React from 'react';
import Rotas from './rotasConfig';
import { ThemeProvider } from '@mui/material';
import tema from './temaConfig'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <Rotas/>
    </ThemeProvider>
      
    
    
  );
}

export default App;
