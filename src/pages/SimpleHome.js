import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #ffffff 100%)',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 0),
}));

const SimpleHome = () => {
  return (
    <div>
      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#2c3e50',
                marginBottom: 3,
              }}
            >
              Laxmi Castor Oil
            </Typography>
            
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: '#7f8c8d',
                marginBottom: 4,
                maxWidth: '600px',
                margin: '0 auto 2rem auto',
              }}
            >
              Pure & Organic Castor Oil • Boiled Not Cold Pressed • Premium Quality for Beauty & Wellness
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#e67e22',
                  '&:hover': { backgroundColor: '#d35400' },
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                }}
              >
                Order Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#2c3e50',
                  color: '#2c3e50',
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 6, color: '#2c3e50' }}>
          Why Choose Laxmi Castor Oil?
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, color: '#e67e22' }}>
              🌿 100% Organic
            </Typography>
            <Typography>
              Pure organic castor oil sourced from the finest castor seeds
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, color: '#e67e22' }}>
              🔥 Traditional Boiling
            </Typography>
            <Typography>
              Processed using traditional boiling method, not cold pressed
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: 'center', p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, color: '#e67e22' }}>
              🚚 Online Delivery
            </Typography>
            <Typography>
              Convenient online ordering with delivery to your doorstep
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 8, p: 4, backgroundColor: '#f8f9fa', borderRadius: 2 }}>
          <Typography variant="h4" sx={{ mb: 2, color: '#2c3e50' }}>
            For Order & Price DM us 📩
          </Typography>
          <Typography variant="h6" sx={{ color: '#7f8c8d' }}>
            Contact us directly for pricing and bulk orders
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default SimpleHome;
