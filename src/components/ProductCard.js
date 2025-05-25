import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: '12px',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
  },
}));

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 600,
  fontSize: '1.25rem',
  letterSpacing: '0.02em',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

const ProductDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const Price = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '1.25rem',
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="260"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <ProductTitle variant="h5" component="h2">
          {product.name}
        </ProductTitle>
        <ProductDescription variant="body1">
          {product.description}
        </ProductDescription>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Price>
            ₹{product.price}
          </Price>
          <AddToCartButton
            variant="contained"
            startIcon={<ShoppingCart />}
            onClick={() => {/* Handle add to cart */}}
          >
            Add to Cart
          </AddToCartButton>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
