import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#333',
  margin: '0 10px',
  '&:hover': {
    color: '#f0b27a',
  },
}));

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: '#4a90e2',
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            Laxmi Hair Oil
          </Typography>
          <nav>
            <StyledButton component={Link} to="/">Home</StyledButton>
            <StyledButton component={Link} to="/products">Products</StyledButton>
            <StyledButton component={Link} to="/about">About</StyledButton>
            <StyledButton component={Link} to="/contact">Contact</StyledButton>
          </nav>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;