import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SimpleHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', color: '#2c3e50', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/logo.jpg" 
              alt="Laxmi Castor Oil Logo" 
              style={{ height: '50px', marginRight: '15px' }}
            />
            <Typography variant="h5" component="div" sx={{ fontWeight: 700, color: '#2c3e50' }}>
              Laxmi Castor Oil
            </Typography>
          </Box>

          {/* Navigation */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} to="/" sx={{ color: '#2c3e50', fontWeight: 500 }}>
              Home
            </Button>
            <Button component={Link} to="/products" sx={{ color: '#2c3e50', fontWeight: 500 }}>
              Products
            </Button>
            <Button component={Link} to="/about" sx={{ color: '#2c3e50', fontWeight: 500 }}>
              About
            </Button>
            <Button component={Link} to="/contact" sx={{ color: '#2c3e50', fontWeight: 500 }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SimpleHeader;
