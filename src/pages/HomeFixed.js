import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NatureIcon from '@mui/icons-material/Nature';

// Hero Section - Simple and Clean like The Greenery
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #e8f5e8 0%, #f0f8f0 100%)',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 0),
  position: 'relative',
}));

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
}));

// Brand Title styling
const BrandTitle = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2d5016 0%, #4a7c29 50%, #52b788 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontFamily: "'Playfair Display', serif",
  fontWeight: 800,
  fontSize: '4.5rem',
  marginBottom: theme.spacing(3),
  textShadow: '2px 2px 4px rgba(45, 80, 22, 0.1)',
  lineHeight: 1.1,
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.8rem',
  },
}));

// Tagline Box styling
const TaglineBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '2px solid rgba(82, 183, 136, 0.2)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(82, 183, 136, 0.15)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: 'linear-gradient(135deg, #2d5016, #4a7c29, #52b788)',
    borderRadius: '22px',
    zIndex: -1,
    opacity: 0.3,
  },
}));

// Feature Section styling
const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(180deg, #ffffff 0%, #fefefe 100%)',
  position: 'relative',
}));

// Feature Card styling
const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f6f0 100%)',
  border: '2px solid rgba(82, 183, 136, 0.1)',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(82, 183, 136, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #2d5016, #4a7c29, #52b788)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(82, 183, 136, 0.2)',
    borderColor: 'rgba(82, 183, 136, 0.3)',
    '&::before': {
      opacity: 1,
    },
    '& .feature-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: '#52b788 !important',
    },
  },
}));

// Process Section styling
const ProcessSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(135deg, #2d5016 0%, #4a7c29 50%, #52b788 100%)',
  color: 'white',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    zIndex: 1,
  },
}));

// CTA Section styling
const CTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #d4641a 0%, #e67e22 100%)',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E")',
    zIndex: 1,
  },
}));

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <HeroContent>
            <BrandTitle variant="h1" component="h1">
              Laxmi Castor Oil
            </BrandTitle>
              <TaglineBox>              <Typography                variant="h4"
                component="h2"                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: '#2d5016',
                  marginBottom: 2,
                  textShadow: '1px 1px 2px rgba(45, 80, 22, 0.1)',
                }}
              >
                Pure & Organic Excellence
              </Typography>
                <Typography
                variant="h6"
                sx={{
                  color: '#2d3436',
                  marginBottom: 3,
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                We produce pure & organic castor oil • Boiled not cold pressed • Online delivery available
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 3 }}>                <Chip 
                  icon={<NatureIcon />} 
                  label="100% Organic" 
                  sx={{ 
                    backgroundColor: '#52b788', 
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: '#2d6a4f' }
                  }}
                />                <Chip 
                  icon={<CheckCircleIcon />} 
                  label="Traditional Boiling" 
                  sx={{ 
                    backgroundColor: '#4a7c29', 
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: '#2d5016' }
                  }}
                />
                <Chip 
                  icon={<LocalShippingIcon />} 
                  label="Home Delivery" 
                  sx={{ 
                    backgroundColor: '#d4641a', 
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: '#b85515' }
                  }}
                />
              </Box>
            </TaglineBox>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#52b788',
                  color: 'white',
                  padding: '18px 45px',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  borderRadius: '35px',
                  boxShadow: '0 10px 30px rgba(82, 183, 136, 0.4)',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  '&:hover': {
                    backgroundColor: '#2d6a4f',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 40px rgba(82, 183, 136, 0.5)',
                  },
                }}
              >
                🌿 Order Now
              </Button>              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#1a3009',
                  color: 'white',
                  padding: '18px 45px',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  borderRadius: '35px',
                  textTransform: 'none',
                  letterSpacing: '0.5px',
                  boxShadow: '0 10px 30px rgba(26, 48, 9, 0.4)',
                  '&:hover': {
                    backgroundColor: '#0f1f05',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 40px rgba(26, 48, 9, 0.5)',
                  },
                }}
              >
                🌱 Learn More
              </Button>
            </Box>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <FeatureSection>        <Container maxWidth="lg">          <Typography
            variant="h2"
            component="h2"            sx={{
              textAlign: 'center',
              marginBottom: 8,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: '#2d5016',
              textShadow: '2px 2px 4px rgba(45, 80, 22, 0.1)',
            }}
          >
            Why Choose Our Castor Oil?
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeatureCard>                <CardContent sx={{ textAlign: 'center', p: 5, position: 'relative', zIndex: 1 }}>
                  <NatureIcon 
                    className="feature-icon"
                    sx={{ 
                      fontSize: '5rem', 
                      color: '#52b788', 
                      mb: 4,
                      transition: 'all 0.4s ease',
                      filter: 'drop-shadow(2px 2px 4px rgba(82, 183, 136, 0.2))'
                    }} 
                  />                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 3, color: '#2d5016' }}>
                    🌿 100% Pure & Organic
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#636e72', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    Sourced from premium organic castor seeds, ensuring the highest quality and purity for all your beauty and wellness needs.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>                  <CheckCircleIcon 
                    className="feature-icon"
                    sx={{ 
                      fontSize: '4rem', 
                      color: '#4a7c29', 
                      mb: 3,
                      transition: 'all 0.3s ease'
                    }} 
                  />                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#2d5016' }}>
                    Traditional Boiling Process
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#636e72', lineHeight: 1.6 }}>
                    Our time-tested boiling method preserves the natural properties and potency, unlike cold-pressed alternatives.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
              <Grid item xs={12} md={4}>
              <FeatureCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>                  <LocalShippingIcon 
                    className="feature-icon"
                    sx={{ 
                      fontSize: '4rem', 
                      color: '#d4641a', 
                      mb: 3,
                      transition: 'all 0.3s ease'
                    }} 
                  />                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#2d5016' }}>
                    Convenient Delivery
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#636e72', lineHeight: 1.6 }}>
                    Order online and get pure castor oil delivered directly to your doorstep with our reliable delivery service.
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          </Grid>
        </Container>
      </FeatureSection>

      {/* Process Section */}
      <ProcessSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              marginBottom: 6,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: 'white',
            }}
          >
            Our Traditional Process
          </Typography>
            <Grid container spacing={4} sx={{ textAlign: 'center' }}>            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 3 }}>                <Typography variant="h4" sx={{ color: '#f8f6f0', fontWeight: 700, mb: 1 }}>
                  01
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Organic Sourcing
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Carefully selected premium castor seeds from certified organic farms
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 3 }}>                <Typography variant="h4" sx={{ color: '#f8f6f0', fontWeight: 700, mb: 1 }}>
                  02
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Traditional Boiling
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Time-tested boiling method that preserves natural nutrients and potency
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 3 }}>                <Typography variant="h4" sx={{ color: '#f8f6f0', fontWeight: 700, mb: 1 }}>
                  03
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Quality Testing
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Rigorous quality checks ensure purity and consistency in every batch
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Box sx={{ mb: 3 }}>                <Typography variant="h4" sx={{ color: '#f8f6f0', fontWeight: 700, mb: 1 }}>
                  04
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Safe Packaging
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Hygienically packaged in premium bottles to maintain freshness
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ProcessSection>

      {/* CTA Section */}
      <CTASection>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              marginBottom: 3,
            }}
          >
            For Order & Price DM us 📩
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              marginBottom: 4,
              opacity: 0.9,
            }}
          >
            Get in touch for pricing, bulk orders, and customized requirements
          </Typography>
          
          <Button
            variant="contained"
            size="large"            sx={{
              backgroundColor: 'white',
              color: '#047857',
              padding: '15px 40px',
              fontSize: '1.2rem',
              fontWeight: 600,
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: '#f8f9fa',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Contact Us Now
          </Button>
        </Container>
      </CTASection>
    </div>
  );
};

export default Home;
