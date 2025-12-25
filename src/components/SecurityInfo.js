import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';

export const SecurityInfo = () => (
  <Container sx={{ py: 10 ,minHeight:'100vh'}}>
    <Typography variant="h3" color="error" gutterBottom>Security Standards</Typography>
    <Divider sx={{ mb: 4 }} />
    <Box sx={{ bgcolor: '#f0f4f8', p: 3, borderRadius: 2 }}>
      <Typography variant="h6">Data Protection</Typography>
      <Typography paragraph>
        We employ industry-standard encryption to ensure your data is safe during transit and at rest.
      </Typography>
    </Box>
  </Container>
);