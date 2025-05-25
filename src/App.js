import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SimpleHeader from './components/SimpleHeader';
import SimpleFooter from './components/SimpleFooter';
import Home from './pages/HomeFixed';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d5016', // Deep forest green - represents natural/organic
      light: '#4a7c29', // Medium forest green
      dark: '#1a3009', // Darker forest green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d4641a', // Warm amber orange - represents tradition/warmth
      light: '#e67e22', // Lighter amber
      dark: '#b85515', // Darker amber
      contrastText: '#ffffff',
    },
    success: {
      main: '#52b788', // Fresh green - for positive actions
      light: '#74c69d',
      dark: '#2d6a4f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fefefe', // Pure white with slight warmth
      paper: '#ffffff',
    },
    text: {
      primary: '#2d3436', // Charcoal - professional and readable
      secondary: '#636e72', // Medium gray - for secondary text
    },
    // Custom colors for brand consistency
    brand: {
      organic: '#52b788', // Fresh organic green
      traditional: '#d4641a', // Traditional amber
      natural: '#95a5a6', // Natural stone gray
      earth: '#8b7355', // Earth brown
      cream: '#f8f6f0', // Cream background
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: '3.5rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <SimpleHeader />
          
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <SimpleFooter />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;