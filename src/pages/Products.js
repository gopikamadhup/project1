import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, Button, Chip, Tab, Tabs } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NatureIcon from '@mui/icons-material/Nature';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)',
  color: '#ffffff',
  padding: theme.spacing(12, 0, 8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 70%, rgba(230, 126, 34, 0.15) 0%, transparent 50%)',
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
  borderRadius: '20px',
  border: 'none',
  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
  transition: 'all 0.4s ease',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(45deg, #e67e22 30%, #f39c12 90%)',
  },
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: 250,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)',
  },
}));

const PriceTag = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #e67e22 30%, #f39c12 90%)',
  color: '#ffffff',
  padding: '8px 16px',
  borderRadius: '20px',
  fontWeight: 600,
  fontSize: '1.1rem',
  display: 'inline-block',
  marginBottom: theme.spacing(2),
}));

const FeatureBadge = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(230, 126, 34, 0.1)',
  color: '#e67e22',
  fontWeight: 500,
  '& .MuiChip-icon': {
    color: '#e67e22',
  },
}));

const OrderButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #25d366 30%, #128c7e 90%)',
  color: '#ffffff',
  fontWeight: 600,
  padding: '12px 24px',
  borderRadius: '25px',
  textTransform: 'none',
  width: '100%',
  '&:hover': {
    background: 'linear-gradient(45deg, #128c7e 30%, #25d366 90%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
  },
}));

const products = [
  {
    id: 1,
    name: 'Pure Organic Castor Oil',
    subtitle: 'Traditional Boiled Process',
    description: 'Our signature castor oil made from finest organic seeds using traditional boiling method for maximum potency and purity.',
    price: 299,
    originalPrice: 399,
    image: '/images/logo.jpg',
    features: ['100% Organic', 'Boiled Process', 'Hair Growth', 'Skin Care'],
    benefits: ['Promotes hair growth', 'Strengthens hair roots', 'Nourishes scalp', 'Natural moisturizer'],
    category: 'premium'
  },
  {
    id: 2,
    name: 'Premium Hair Growth Oil',
    subtitle: 'Enhanced Formula',
    description: 'Specially formulated blend with additional herbs for accelerated hair growth and thickness.',
    price: 399,
    originalPrice: 499,
    image: '/images/logo.jpg',
    features: ['Enhanced Formula', 'Fast Results', 'Herbal Blend', 'Thick Hair'],
    benefits: ['Faster hair growth', 'Reduces hair fall', 'Adds volume', 'Improves texture'],
    category: 'premium'
  },
  {
    id: 3,
    name: 'Anti-Hair Fall Oil',
    subtitle: 'Specialized Treatment',
    description: 'Targeted solution for hair fall prevention with strengthening agents and natural extracts.',
    price: 349,
    originalPrice: 429,
    image: '/images/logo.jpg',
    features: ['Anti Hair Fall', 'Strengthening', 'Natural Extracts', 'Proven Results'],
    benefits: ['Stops hair fall', 'Strengthens follicles', 'Repairs damage', 'Prevents breakage'],
    category: 'treatment'
  },
  {
    id: 4,
    name: 'Everyday Castor Oil',
    subtitle: 'Daily Care Formula',
    description: 'Perfect for daily use with a lighter formula that absorbs quickly while providing essential nutrients.',
    price: 199,
    originalPrice: 249,
    image: '/images/logo.jpg',
    features: ['Light Formula', 'Daily Use', 'Quick Absorb', 'Essential Care'],
    benefits: ['Daily nourishment', 'Non-greasy feel', 'Easy application', 'Regular maintenance'],
    category: 'basic'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

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
              gutterBottom
              sx={{ 
                mb: 3,
                position: 'relative',
                zIndex: 1,
              }}
            >
              Our Premium Products
            </Typography>
            <Typography 
              variant="h5" 
              paragraph
              sx={{ 
                maxWidth: '600px', 
                mx: 'auto', 
                opacity: 0.9,
                position: 'relative',
                zIndex: 1,
              }}
            >
              Discover our complete range of pure, organic castor oil products
              crafted with traditional care for your beauty and wellness needs.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Tabs 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            centered
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                color: '#7f8c8d',
                '&.Mui-selected': {
                  color: '#e67e22',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#e67e22',
                height: 3,
              },
            }}
          >
            <Tab label="All Products" value="all" />
            <Tab label="Premium" value="premium" />
            <Tab label="Treatment" value="treatment" />
            <Tab label="Basic Care" value="basic" />
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredProducts.map((product, index) => (
            <Grid item key={product.id} xs={12} sm={6} lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard>
                  <ProductImage
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{ fontWeight: 600, color: '#2c3e50' }}
                    >
                      {product.name}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      color="primary"
                      sx={{ fontWeight: 500, mb: 2 }}
                    >
                      {product.subtitle}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      paragraph
                      sx={{ lineHeight: 1.6 }}
                    >
                      {product.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {product.features.map((feature, idx) => (
                        <FeatureBadge 
                          key={idx}
                          label={feature}
                          size="small"
                          icon={<NatureIcon />}
                        />
                      ))}
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Key Benefits:
                      </Typography>
                      {product.benefits.map((benefit, idx) => (
                        <Typography 
                          key={idx}
                          variant="body2" 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 0.5,
                            color: '#2c3e50'
                          }}
                        >
                          <StarIcon sx={{ fontSize: 16, color: '#e67e22', mr: 1 }} />
                          {benefit}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <PriceTag>
                        ₹{product.price}
                      </PriceTag>
                      {product.originalPrice && (
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            textDecoration: 'line-through', 
                            color: '#7f8c8d',
                            ml: 2 
                          }}
                        >
                          ₹{product.originalPrice}
                        </Typography>
                      )}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <LocalShippingIcon sx={{ fontSize: 16, color: '#3498db' }} />
                      <Typography variant="body2" color="text.secondary">
                        Free delivery available
                      </Typography>
                    </Box>

                    <OrderButton 
                      variant="contained"
                      startIcon={<WhatsAppIcon />}
                    >
                      Order via WhatsApp
                    </OrderButton>
                  </CardContent>
                </ProductCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: '#f8f9fa', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50', fontWeight: 600 }}>
            Need Help Choosing?
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#7f8c8d', mb: 3 }}>
            Our experts are here to help you find the perfect product for your needs.
            Send us a message for personalized recommendations!
          </Typography>
          <Button 
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            sx={{
              background: 'linear-gradient(45deg, #25d366 30%, #128c7e 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #128c7e 30%, #25d366 90%)',
              },
            }}
          >
            Get Expert Advice
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Products;