import React from 'react';
import { Container, Grid, Typography, Box, Card } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import NatureIcon from '@mui/icons-material/Nature';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  padding: theme.spacing(12, 0, 8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 70%, rgba(230, 126, 34, 0.1) 0%, transparent 50%)',
  },
}));

const StorySection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  color: '#ffffff',
  padding: theme.spacing(10, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  },
}));

const ValueCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
  borderRadius: '16px',
  border: 'none',
  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  padding: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
  },
}));

const StatsCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  background: 'rgba(255,255,255,0.1)',
  borderRadius: '16px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)',
}));

const ProcessStep = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  '&:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    top: '60px',
    right: '-50%',
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, #e67e22 0%, transparent 100%)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const About = () => {
  const values = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: '#e67e22' }} />,
      title: 'Authenticity',
      description: 'We guarantee 100% pure and organic castor oil with no artificial additives or chemicals.',
    },
    {
      icon: <NatureIcon sx={{ fontSize: 40, color: '#27ae60' }} />,
      title: 'Sustainability',
      description: 'Our eco-friendly practices ensure minimal environmental impact while preserving traditional methods.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control measures ensure every bottle meets our high standards.',
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#9b59b6' }} />,
      title: 'Customer Care',
      description: 'Dedicated support and reliable delivery service to ensure customer satisfaction.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Seed Selection',
      description: 'Premium organic castor seeds sourced from certified farms',
    },
    {
      step: '02',
      title: 'Traditional Boiling',
      description: 'Time-honored boiling process to extract maximum nutrients',
    },
    {
      step: '03',
      title: 'Quality Testing',
      description: 'Rigorous testing for purity, potency, and safety standards',
    },
    {
      step: '04',
      title: 'Packaging',
      description: 'Sealed in premium bottles to preserve freshness and quality',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Pure & Organic' },
    { number: '50+', label: 'Cities Served' },
  ];

  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              textAlign="center" 
              gutterBottom
              sx={{ 
                background: 'linear-gradient(45deg, #2c3e50 30%, #e67e22 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                position: 'relative',
                zIndex: 1,
              }}
            >
              About Laxmi Castor Oil
            </Typography>
            <Typography 
              variant="h5" 
              textAlign="center" 
              color="text.secondary" 
              paragraph
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Preserving tradition, delivering purity. Discover our journey of 
              crafting premium organic castor oil using time-honored methods.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" gutterBottom sx={{ color: '#2c3e50', fontWeight: 600 }}>
                Our Heritage
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#7f8c8d' }}>
                Founded with a vision to preserve traditional oil-making methods, Laxmi Castor Oil 
                has been dedicated to producing the finest quality castor oil for over five years. 
                Our commitment to authenticity and purity has made us a trusted name in natural hair care.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#7f8c8d' }}>
                We believe that nature provides the best solutions for beauty and wellness. Our 
                traditional boiling process, passed down through generations, ensures that every 
                drop of our castor oil retains its natural potency and therapeutic properties.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <img 
                  src="/images/logo.jpg" 
                  alt="Our Heritage"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <StorySection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
                  Why Boiled, Not Cold Pressed?
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9 }}>
                  While cold pressing is popular, our traditional boiling method offers superior benefits:
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#e67e22' }}>
                      ✓ Complete Nutrient Extraction
                    </Typography>
                    <Typography sx={{ opacity: 0.9, ml: 3 }}>
                      Heat helps extract water-soluble nutrients that cold pressing cannot access.
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#e67e22' }}>
                      ✓ Enhanced Therapeutic Properties
                    </Typography>
                    <Typography sx={{ opacity: 0.9, ml: 3 }}>
                      Traditional boiling activates beneficial compounds for better results.
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#e67e22' }}>
                      ✓ Longer Shelf Life
                    </Typography>
                    <Typography sx={{ opacity: 0.9, ml: 3 }}>
                      Proper heating naturally preserves the oil without additives.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Grid container spacing={3}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <StatsCard>
                        <Typography 
                          variant="h3" 
                          sx={{ 
                            fontWeight: 700, 
                            color: '#e67e22',
                            mb: 1,
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {stat.label}
                        </Typography>
                      </StatsCard>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </StorySection>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography 
          variant="h2" 
          textAlign="center" 
          gutterBottom 
          sx={{ mb: 6, color: '#2c3e50', fontWeight: 600 }}
        >
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueCard>
                  <Box sx={{ mb: 3 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2c3e50' }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </ValueCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            textAlign="center" 
            gutterBottom 
            sx={{ mb: 6, color: '#2c3e50', fontWeight: 600 }}
          >
            Our Process
          </Typography>
          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProcessStep>
                    <Box 
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #e67e22 30%, #f39c12 90%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px auto',
                        color: '#ffffff',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {step.step}
                    </Box>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2c3e50' }}>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
                  </ProcessStep>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;