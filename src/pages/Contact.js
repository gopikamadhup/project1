import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  TextField, 
  Button,
  Avatar,
  Chip,
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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
    background: 'radial-gradient(circle at 70% 30%, rgba(230, 126, 34, 0.1) 0%, transparent 50%)',
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
  borderRadius: '20px',
  border: 'none',
  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  transition: 'all 0.4s ease',
  textAlign: 'center',
  padding: theme.spacing(4),
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },
}));

const QuickActionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #25d366 30%, #128c7e 90%)',
  color: '#ffffff',
  fontWeight: 600,
  padding: '16px 32px',
  borderRadius: '50px',
  textTransform: 'none',
  fontSize: '1.1rem',
  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
  '&:hover': {
    background: 'linear-gradient(45deg, #128c7e 30%, #25d366 90%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px rgba(37, 211, 102, 0.4)',
  },
}));

const ContactMethod = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderRadius: '12px',
  backgroundColor: '#f8f9fa',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#e9ecef',
    transform: 'translateX(5px)',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <WhatsAppIcon sx={{ fontSize: 40, color: '#25d366' }} />,
      title: 'WhatsApp',
      subtitle: 'Instant Response',
      description: 'Get quick answers and place orders directly via WhatsApp',
      action: 'Chat Now',
      link: 'https://wa.me/+911234567890',
      color: '#25d366'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#3498db' }} />,
      title: 'Phone Call',
      subtitle: 'Personal Assistance',
      description: 'Speak directly with our product experts',
      action: 'Call Now',
      link: 'tel:+911234567890',
      color: '#3498db'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#e67e22' }} />,
      title: 'Email',
      subtitle: 'Detailed Queries',
      description: 'Send detailed questions and get comprehensive answers',
      action: 'Send Email',
      link: 'mailto:info@laxmicastoroil.com',
      color: '#e67e22'
    }
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      details: ['+91 1234567890', '+91 9876543210']
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      details: ['info@laxmicastoroil.com', 'orders@laxmicastoroil.com']
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      details: ['Mumbai, Maharashtra', 'India']
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: 10:00 AM - 4:00 PM']
    }
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
              Get In Touch
            </Typography>
            <Typography 
              variant="h5" 
              textAlign="center" 
              color="text.secondary" 
              paragraph
              sx={{ 
                maxWidth: '600px', 
                mx: 'auto',
                position: 'relative',
                zIndex: 1,
              }}
            >
              We're here to help you with orders, questions, and expert advice. 
              Choose your preferred way to connect with us.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ContactCard>
                  <Box sx={{ mb: 3 }}>
                    {method.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2c3e50' }}>
                    {method.title}
                  </Typography>
                  <Chip 
                    label={method.subtitle}
                    sx={{ 
                      backgroundColor: `${method.color}20`,
                      color: method.color,
                      fontWeight: 600,
                      mb: 2
                    }}
                  />
                  <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                    {method.description}
                  </Typography>
                  <Button
                    variant="contained"
                    component="a"
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: `linear-gradient(45deg, ${method.color} 30%, ${method.color}dd 90%)`,
                      '&:hover': {
                        background: `linear-gradient(45deg, ${method.color}dd 30%, ${method.color} 90%)`,
                      },
                    }}
                  >
                    {method.action}
                  </Button>
                </ContactCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" gutterBottom sx={{ color: '#2c3e50', fontWeight: 600, mb: 4 }}>
                Send Us a Message
              </Typography>
              
              {showAlert && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you within 24 hours.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    background: 'linear-gradient(45deg, #2c3e50 30%, #34495e 90%)',
                    padding: '12px 32px',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #34495e 30%, #2c3e50 90%)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h3" gutterBottom sx={{ color: '#2c3e50', fontWeight: 600, mb: 4 }}>
                Contact Information
              </Typography>
              
              {contactInfo.map((info, index) => (
                <ContactMethod key={index}>
                  <Avatar 
                    sx={{ 
                      backgroundColor: '#e67e22', 
                      color: '#ffffff',
                      mr: 2 
                    }}
                  >
                    {info.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography key={idx} color="text.secondary">
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </ContactMethod>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#2c3e50', color: '#ffffff', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                Ready to Order?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Get instant support and place your order via WhatsApp for the fastest service.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <QuickActionButton
                variant="contained"
                startIcon={<WhatsAppIcon />}
                component="a"
                href="https://wa.me/+911234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </QuickActionButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;