import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  '& svg': {
    fontSize: '24px',
    color: '#fff',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Laxmi Hair Oil
            </Typography>
            <Typography variant="body2" color="inherit">
              Natural hair care solutions for healthy, beautiful hair.
            </Typography>
            <SocialIcon>
              <Link href="https://facebook.com" target="_blank" rel="noopener">
                <FaFacebook />
              </Link>
              <Link href="https://instagram.com/laxmi_castor_oil" target="_blank" rel="noopener">
                <FaInstagram />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener">
                <FaTwitter />
              </Link>
            </SocialIcon>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="/products" color="inherit" display="block" sx={{ mb: 1 }}>
                Products
              </Link>
              <Link href="/about" color="inherit" display="block" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link href="/contact" color="inherit" display="block">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@laxmihairoil.com
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +91 1234567890
            </Typography>
            <Typography variant="body2">
              Address: Your Location, City, State, India
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center" color="inherit">
            © {new Date().getFullYear()} Laxmi Hair Oil. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;