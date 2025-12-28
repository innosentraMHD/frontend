import React from 'react';
import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import InsightsIcon from '@mui/icons-material/Insights';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const Offer = () => {
  const { t } = useTranslation(); // تفعيل الترجمة

  // مصفوفة الحلول مع استدعاء دالة الترجمة لكل حقل
  const solutions = [
    { 
      icon: <PsychologyIcon fontSize="large" />, 
      title: t('offer_sol1_title'), 
      desc: t('offer_sol1_desc') 
    },
    { 
      icon: <CenterFocusStrongIcon fontSize="large" />, 
      title: t('offer_sol2_title'), 
      desc: t('offer_sol2_desc') 
    },
    { 
      icon: <InsightsIcon fontSize="large" />, 
      title: t('offer_sol3_title'), 
      desc: t('offer_sol3_desc') 
    }
  ];

  return (
    <Box id="solutions" sx={{ py: 8, bgcolor: 'background.dark' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 6, color: 'text.white' }}>
          {t('offer_main_title')}
        </Typography>
        
        <Box 
          display="flex" 
          justifyContent="space-evenly" 
          sx={{ bgcolor: 'background.dark' }} 
          gap={2} 
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          {solutions.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', bgcolor: 'background.dark', p: 2 }}>
                <Box sx={{ color: 'text.white', bgcolor: 'background.dark', my: 2 }}>
                  {item.icon}
                </Box>
                <CardContent>
                  <Typography color="text.white" variant="h5" gutterBottom fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography color="text.white">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};