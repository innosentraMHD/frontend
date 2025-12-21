import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import main from '../images/main.webp'; // أو استخدم الصورة التي رفعتها

export const Hero = () => {
  return (
    <Box 
      id="home" 
      sx={{ 
        minHeight:{xs: '60vh', md: '80vh'} ,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
        pb: 4,
        pt:0,
        mt:2

      }}
    >
      <Container maxWidth="lg">
        {/* العنوان الرئيسي */}
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 4,mt:2 }}>
          <Typography 
            variant="h2" 
            sx={{ mb: 3 }}
            className="fade-in-up"
          >
            AI & Computer Vision Solutions for Data-Driven Decisions 
          </Typography>
        </Box>

        {/* تقسيم النصفين */}
        <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // عمودي على الموبايل، أفقي على التابلت والديسكتوب
    alignItems: 'center',
    gap: 4
  }}
>
  {/* Left side: text */}
  <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
    <Typography 
      variant="h5" 
      sx={{ 
        color: '#5a6c7d',
        fontWeight: 400,
        maxWidth: '100%'
      }}
    >
      Turning visual data into actionable business insights.
    </Typography>
  </Box>

  {/* Right side: image */}
  <Box
    component="img"
    src={main}
    alt="AI & Computer Vision"
    sx={{
       transition: 'transform 0.5s',
        '&:hover': { transform: 'scale(1.05)' },
      flex: 1,
      width: '100%',
      maxWidth: 500,
      height: 'auto',
      borderRadius: 2,
      objectFit: 'cover',
      mx: 'auto'
    }}
  />
</Box>


      </Container>
    </Box>
  );
};
