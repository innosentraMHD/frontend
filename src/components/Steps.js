import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MemoryIcon from '@mui/icons-material/Memory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import stepsimg from '../images/steps.webp';

const steps = [
  {
    icon: <SearchIcon fontSize="large" />,
    title: 'Analyze Needs',
    description: 'Start by analyzing your needs and system to chart a technical roadmap aligned with your goals.',
  },
  {
    icon: <PsychologyIcon fontSize="large" />,
    title: 'Build AI Algorithms',
    description: 'Build and fine-tune AI and Computer Vision algorithms, designed specifically for your use case.',
  },
  {
    icon: <MemoryIcon fontSize="large" />,
    title: 'Deploy on Devices',
    description: 'Operate the solution on dedicated Devices for instant performance and real-time analysis directly at your site.',
  },
  {
    icon: <DashboardIcon fontSize="large" />,
    title: 'Live Dashboards',
    description: 'Interactive dashboards providing operational visibility with real-time statistics and alerts.',
  },
];
export const Steps = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.gray' }} id="how-we-work">
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 3, 
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '3rem' },
            color: 'primary.main'
          }}
        >
          How We Work?
        </Typography>

        {/* الحاوية المرنة (Flex Container) */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', // هذا يضمن توسط النص عمودياً بالنسبة للصورة الطويلة
            gap: 6
          }}
        >
          
          {/* قسم النصوص (اليسار) */}
          <Box sx={{ width: { xs: '100%', md: '70%' }, flexGrow: 1 }}>
            <Grid container spacing={2} >
              {steps.map((step, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      height: '100%',
                      p: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'translateY(-5px)' },
                    }}
                  >
                    <Box   sx={{ 
                        display: 'flex', alignItems: 'center', mb: 1.5,
                      }}>
                    <Box 
                      sx={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: 60, height: 60, borderRadius: '50%',
                        backgroundColor: 'rgba(0, 86, 179, 0.1)', color: 'primary.main', mr:2
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                      {step.title}
                    </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* قسم الصورة (اليمين) */}
          <Box 
            sx={{ 
           
              py: 2,
              display: { xs: 'none', md: 'block' }, // مخفي في الموبايل، ظاهر في اللابتوب
              width: { md: '45%',height: '80%', }, // عرض القسم
              flexShrink: 0 
            }} 
          >
           
              <Box
                component="img"
                src={stepsimg}
                alt="AI Process"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  mx: 'auto',
                  
                  transition: 'transform 0.5s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              />
            </Box>
          

        </Box> 
      </Container>
    </Box>
  );
};