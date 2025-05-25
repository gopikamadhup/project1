import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomeTest = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center">
        <Typography variant="h1" gutterBottom>
          Laxmi Castor Oil
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Welcome to our website!
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeTest;
