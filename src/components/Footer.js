import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledFooter = styled('footer')(({ theme }) => ({
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  color: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  },
}));

const FooterTop = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0, 6, 0),
  position: 'relative',
  zIndex: 1,
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
  borderTop: '1px solid rgba(255,255,255,0.1)',
  backgroundColor: 'rgba(0,0,0,0.2)',
  position: 'relative',
  zIndex: 1,
}));

const BrandSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const BrandName = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: '2rem',
  background: 'linear-gradient(45deg, #ffffff 30%, #e67e22 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(2),
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: '1.1rem',
  marginBottom: theme.spacing(3),
  color: '#ffffff',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '30px',
    height: '2px',
    backgroundColor: '#e67e22',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.9rem',
  opacity: 0.85,
  lineHeight: 1.7,
  marginBottom: theme.spacing(1),
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: '#ffffff',
  margin: theme.spacing(0, 1, 1, 0),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#e67e22',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(230, 126, 34, 0.4)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255,255,255,0.85)',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  fontSize: '0.9rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#e67e22',
    transform: 'translateX(5px)',
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
    color: '#e67e22',
    fontSize: '1.2rem',
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <BrandSection>
                <BrandName variant="h4">
                  Laxmi Castor Oil
                </BrandName>
                <FooterText paragraph>
                  Experience the purity of traditionally processed castor oil. 
                  Boiled not cold pressed • 100% organic • Premium quality for your beauty and wellness needs.
                </FooterText>
                <FooterText sx={{ 
                  background: 'linear-gradient(45deg, #e67e22 30%, #f39c12 90%)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  fontWeight: 600,
                  mb: 3,
                }}>
                  For Order & Price DM us 📩
                </FooterText>
                <Box>
                  <SocialButton href="https://facebook.com" target="_blank" rel="noopener">
                    <FaFacebook />
                  </SocialButton>
                  <SocialButton href="https://instagram.com/laxmi_castor_oil" target="_blank" rel="noopener">
                    <FaInstagram />
                  </SocialButton>
                  <SocialButton href="https://twitter.com" target="_blank" rel="noopener">
                    <FaTwitter />
                  </SocialButton>
                  <SocialButton href="https://wa.me/+911234567890" target="_blank" rel="noopener">
                    <FaWhatsapp />
                  </SocialButton>
                </Box>
              </BrandSection>
            </Grid>
            
            <Grid item xs={12} md={2}>
              <FooterHeading variant="h6">
                Quick Links
              </FooterHeading>
              <Box>
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/products">Products</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <FooterHeading variant="h6">
                Our Process
              </FooterHeading>
              <Box>
                <FooterLink href="/about">Traditional Boiling</FooterLink>
                <FooterLink href="/about">Quality Testing</FooterLink>
                <FooterLink href="/about">Organic Sourcing</FooterLink>
                <FooterLink href="/about">Packaging</FooterLink>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <FooterHeading variant="h6">
                Contact Us
              </FooterHeading>
              <ContactItem>
                <EmailIcon />
                <FooterText>info@laxmicastoroil.com</FooterText>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <FooterText>+91 1234567890</FooterText>
              </ContactItem>
              <ContactItem>
                <LocationOnIcon />
                <FooterText>Mumbai, Maharashtra, India</FooterText>
              </ContactItem>
            </Grid>
          </Grid>
        </Container>
      </FooterTop>
      
      <FooterBottom>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                © {new Date().getFullYear()} Laxmi Castor Oil. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 3 }}>
                <FooterLink href="/privacy" sx={{ mb: 0, fontSize: '0.8rem' }}>
                  Privacy Policy
                </FooterLink>
                <FooterLink href="/terms" sx={{ mb: 0, fontSize: '0.8rem' }}>
                  Terms of Service
                </FooterLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;