// App.js
import React from 'react';
import VehicleRentalForm from './components/VehicleRentalForm';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Optional: Customize the theme if you like
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <VehicleRentalForm />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
