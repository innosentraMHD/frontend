import React from 'react';
import { Container, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import InsightsIcon from '@mui/icons-material/Insights';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // 1. استيراد motion

// 2. إعداد مكون الحركة (ScrollReveal)
// ننشئ هذا المكون هنا (أو في ملف منفصل وتستدعيه)
const MotionBox = motion(Box);

const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay }}
      sx={{ height: '100%' }} // لضمان أن يأخذ العنصر الطول المناسب داخل الـ Grid
    >
      {children}
    </MotionBox>
  );
};

export const Offer = () => {
  const { t } = useTranslation();

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
    <Box id="solutions" sx={{ py: 8, backgroundImage: 'radial-gradient(circle, #1058aaff 0%, #001c39ff 100%)', }}>
      <Container maxWidth="lg">
        
        {/* 3. تطبيق الحركة على العنوان الرئيسي */}
        <ScrollReveal>
          <Typography variant="h3" align="center" sx={{ mb: 6, color: 'text.white' }}>
            {t('offer_main_title')}
          </Typography>
        </ScrollReveal>
        
        <Box 
          display="flex" 
          justifyContent="space-evenly" 
         
          gap={2} 
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          {solutions.map((item, index) => (
            // ملاحظة: نضع الـ Key هنا في العنصر الخارجي للحلقة
            <Grid item xs={12} sm={6} md={4} key={index}>
              
              {/* 4. تطبيق الحركة على كل كارت مع تأخير زمني بناءً على الـ index */}
              <ScrollReveal delay={index * 0.2}>
                <Card sx={{ height: '100%', textAlign: 'center', bgcolor:'#001c39ff' , p: 2 }}>
                  <Box sx={{ color: 'text.white', bgcolor: '#001c39ff', my: 2 }}>
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
              </ScrollReveal>

            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};