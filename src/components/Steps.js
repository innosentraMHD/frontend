import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MemoryIcon from '@mui/icons-material/Memory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import stepsimg from '../images/steps.webp';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const Steps = () => {
  const { t } = useTranslation(); // تفعيل الترجمة

  // نقل المصفوفة لداخل المكون لاستخدام دالة t()
  const stepsData = [
    {
      icon: <SearchIcon fontSize="large" />,
      title: t('steps_s1_title'),
      description: t('steps_s1_desc'),
    },
    {
      icon: <PsychologyIcon fontSize="large" />,
      title: t('steps_s2_title'),
      description: t('steps_s2_desc'),
    },
    {
      icon: <MemoryIcon fontSize="large" />,
      title: t('steps_s3_title'),
      description: t('steps_s3_desc'),
    },
    {
      icon: <DashboardIcon fontSize="large" />,
      title: t('steps_s4_title'),
      description: t('steps_s4_desc'),
    },
  ];

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
          {t('steps_main_title')}
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center',
            gap: 6
          }}
        >
          {/* قسم النصوص (اليسار) */}
          <Box sx={{ width: { xs: '100%', md: '70%' }, flexGrow: 1 }}>
            <Grid container spacing={2}>
              {stepsData.map((step, index) => (
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 60, height: 60, borderRadius: '50%',
                          backgroundColor: 'rgba(0, 86, 179, 0.1)', color: 'primary.main', mr: 2
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
              display: { xs: 'none', md: 'block' },
              width: { md: '45%', height: '80%' },
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