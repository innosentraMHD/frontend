import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box,


} from '@mui/material';
import main from '../images/about2.webp'; // أو استخدم الصورة التي رفعتها

export const About = () => {
  
  return (
    <Box 
      id="about" 
     
    >
      <Container maxWidth="lg" >
      <Box 
  sx={{ 
    display: 'flex', 
    flexDirection: { xs: 'column-reverse', md: 'row' }, // عمودي على الموبايل، أفقي على الديسكتوب
    alignItems: 'center',
    gap: 4
  }}
>
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
  {/* Left side: text */}
  <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>

        <Typography variant="h3" sx={{color: 'text.third', mb: 1 }} >
      About Us
    </Typography>
 
    
    <Typography 
      variant="body1"  
      sx={{ mb: 0, fontSize: '1.1rem', color: 'text.secondary'}}
    >
    More than 15 years of experience in technical solutions, Innosentra is a computer vision and AI company delivering actionable insights from visual data. Our solutions integrate with existing camera systems, respect privacy, and support smarter decision-making across retail, security, and other industries.
    </Typography>
  </Box>

  {/* Right side: image */}
  
</Box>




        
      </Container>
    </Box>
  );
};