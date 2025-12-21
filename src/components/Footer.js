import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export const Footer = () => {
  // متغير يحمل قيمة السنة الحالية
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer"
      sx={{ 
        backgroundColor: 'background.dark',
        color: 'white',
        py: 4,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          {/* تم استبدال 2023 بالمتغير currentYear */}
          &copy; {currentYear} Innosentra Solutions. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};