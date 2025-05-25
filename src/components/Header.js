import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: theme.palette.text.primary,
  boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '50px',
  width: '50px',
  marginRight: theme.spacing(2),
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid #e67e22',
}));

const BrandName = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: '1.8rem',
  background: 'linear-gradient(45deg, #2c3e50 30%, #e67e22 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.5px',
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? '#e67e22' : theme.palette.text.primary,
  fontWeight: active ? 600 : 500,
  margin: '0 8px',
  padding: '8px 16px',
  position: 'relative',
  textTransform: 'none',
  fontSize: '0.95rem',
  letterSpacing: '0.3px',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: active ? '100%' : '0%',
    height: '2px',
    backgroundColor: '#e67e22',
    transform: 'translateX(-50%)',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#e67e22',
    '&:after': {
      width: '100%',
    },
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            sx={{
              color: location.pathname === item.path ? '#e67e22' : 'inherit',
              backgroundColor: location.pathname === item.path ? 'rgba(230, 126, 34, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(230, 126, 34, 0.1)',
              },
            }}
          >
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <LogoContainer component={Link} to="/">
              <LogoImage src="/images/logo.jpg" alt="Laxmi Castor Oil Logo" />
              <BrandName variant="h4">
                Laxmi Castor Oil
              </BrandName>
            </LogoContainer>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <NavButton
                    key={item.text}
                    component={Link}
                    to={item.path}
                    active={location.pathname === item.path ? 1 : 0}
                  >
                    {item.text}
                  </NavButton>
                ))}
                <Button
                  variant="contained"
                  sx={{ 
                    ml: 2, 
                    background: 'linear-gradient(45deg, #e67e22 30%, #f39c12 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #d35400 30%, #e67e22 90%)',
                    },
                  }}
                >
                  Order Now
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;