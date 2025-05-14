import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VenuePage from './pages/VenuePage';
import SuppliersPage from './pages/SuppliersPage';
import AboutPage from './pages/AboutPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#FF4081',
          },
          secondary: {
            main: '#536DFE',
          },
          background: {
            default: mode === 'light' ? '#FFFFFF' : '#121212',
            paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
          },
        },
        typography: {
          fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '3.5rem',
            fontWeight: 600,
          },
          h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
          },
          h3: {
            fontSize: '2rem',
            fontWeight: 600,
          },
          h4: {
            fontSize: '1.75rem',
            fontWeight: 600,
          },
          h5: {
            fontSize: '1.5rem',
            fontWeight: 600,
          },
          h6: {
            fontSize: '1.25rem',
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: mode === 'light' 
                  ? '0 4px 6px rgba(0,0,0,0.1)' 
                  : '0 4px 6px rgba(0,0,0,0.3)',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 12,
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ position: 'relative' }}>
          <Navbar />
          {/* Dark Mode Toggle */}
          <IconButton
            onClick={toggleColorMode}
            sx={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              bgcolor: 'background.paper',
              boxShadow: 3,
              zIndex: 1000,
              '&:hover': {
                bgcolor: 'background.paper',
                opacity: 0.9,
              },
            }}
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/venue" element={<VenuePage />} />
              <Route path="/suppliers" element={<SuppliersPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </main>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
