import React from 'react';
import { 
  Container, 
  Box, 
  Typography 
} from '@mui/material';
import one from '../images/gfgdf.webp'; 
import two from '../images/ertfdg.webp'; 
import three from '../images/fgder.webp'; 
import arrow from '../images/arrow.webp'; 

export const Chart = () => {
  
  // --- التعديل هنا ---


  const largeImageStyle = {
    width: '100%',
    maxWidth: { xs: '220px', md: '250px' }, // أكبر قليلاً
    height: { xs: '150px', md: '220px' },
    borderRadius: 2,
    objectFit: 'contain',
   
    transition: 'transform 0.5s',
    '&:hover': { transform: 'scale(1.05)' },
  };
  // -------------------

  const textStyle = {
    textAlign: 'center',
    maxWidth: '250px', 
  };

  const arrowImageStyle = {
    flex: 1,                 
    width: '100%',
    maxWidth: '80px',        
    height: 'auto',
    objectFit: 'contain',
    my: { xs: 0, md: 8 } 
    
  };

  const stepContainerStyle = {
    flex: 3,                 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  return (
    <Box id="about" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' }, 
            gap:{ xs:0, md: 2 } , 
          }}
        >
          {/* --- الخطوة 1 --- */}
          <Box sx={stepContainerStyle}>
            <Box component="img" src={one} alt="Smart Cameras" sx={largeImageStyle} />
            <Box sx={textStyle}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Smart Cameras Count & Identify
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:1 , mb:2}}>
                Cameras use AI to count people and figure out details (adult/child, male/female, other KPIs ...).
              </Typography>
            </Box>
          </Box>
          
          {/* --- سهم 1 --- */}
          <Box 
            component="img" 
            src={arrow} 
            alt="Arrow" 
            sx={{
                ...arrowImageStyle,
                transform: { xs: 'rotate(90deg)', md: 'none' },
                
            }} 
          />
          
          {/* --- الخطوة 2 --- */}
          <Box sx={stepContainerStyle}>
            <Box component="img" src={two} alt="Server Processing" sx={largeImageStyle} />
            <Box sx={textStyle}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Server Collects & Organizes
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:1 , mb:2}}>
                The secure server receives all the findings and organizes the data instantly.
              </Typography>
            </Box>
          </Box>

          {/* --- سهم 2 --- */}
          <Box 
            component="img" 
            src={arrow} 
            alt="Arrow" 
            sx={{
                ...arrowImageStyle,
                transform: { xs: 'rotate(90deg)', md: 'none' },
                
            }} 
          />

          {/* --- الخطوة 3 --- */}
          <Box sx={stepContainerStyle}>
            <Box component="img" src={three} alt="Results Dashboard" sx={largeImageStyle} />
            <Box sx={textStyle}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                View Easy-to-Read Results
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:1 , mb:2}}>
                See clear charts and numbers on your dashboard to gain insights and make better business decisions.
              </Typography>
            </Box>
          </Box>

        </Box>

      </Container>
    </Box>
  );
};




