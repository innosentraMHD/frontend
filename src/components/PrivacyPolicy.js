import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

export const PrivacyPolicy = () => (
  <Container sx={{ py: 10 }}>
    <Typography variant="h3" gutterBottom>Privacy Policy</Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography variant="h6">Data Collection</Typography>
    <Typography paragraph>
      We collect information to provide better services to all our users. 
      This includes information you provide to us like your name and email.
    </Typography>
    <Typography variant="h6">Data Usage</Typography>
    <Typography paragraph>
      We use the data we collect to provide, maintain, protect and improve our services.
    </Typography>
  </Container>
);