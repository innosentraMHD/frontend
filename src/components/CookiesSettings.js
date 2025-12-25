
import React  ,{useEffect} from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';



export const CookiesSettings = () => (

  <Container sx={{ py: 10, minHeight:'100vh'}}>
    <Typography variant="h3" gutterBottom>Cookies Settings & Policy</Typography>
    <Divider sx={{ mb: 4 }} />
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" color="secondary">What are Cookies?</Typography>
      <Typography paragraph>
        Cookies are small text files that are placed on your computer by websites that you visit. 
        They are widely used in order to make websites work more efficiently.
      </Typography>
    </Box>
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6">1. Essential Cookies</Typography>
      <Typography paragraph>
        These are necessary for the website to function properly and cannot be switched off.
      </Typography>
      <Typography variant="h6">2. Analytical Cookies</Typography>
      <Typography paragraph>
        They allow us to recognize and count the number of visitors and see how they move around the site.
      </Typography>
    </Box>
  </Container>
);