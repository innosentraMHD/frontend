import React from 'react';
import { Container, Typography, Card, CardContent, Box, Grid, alpha } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import InsightsIcon from '@mui/icons-material/Insights';
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{ height: '100%', display: 'flex' }}
  >
    {children}
  </motion.div>
);

export const Offer = () => {
  const { t } = useTranslation();

  // اللون البرتقالي المختار للإضاءة
  const glowColor = '#00d8fe';
  const whiteColor = '#fefefe';
  // اللون الأزرق المختار للخلفية
  const bgBlue =  'rgb(10,60,90)' ;

  const solutions = [
    { icon: <PsychologyIcon sx={{ fontSize: 45 }} />, title: t('offer_sol1_title'), desc: t('offer_sol1_desc'), color: glowColor },
    { icon: <CenterFocusStrongIcon sx={{ fontSize: 45 }} />, title: t('offer_sol2_title'), desc: t('offer_sol2_desc'), color: glowColor },
    { icon: <InsightsIcon sx={{ fontSize: 45 }} />, title: t('offer_sol3_title'), desc: t('offer_sol3_desc'), color: glowColor },
    { icon: <CodeIcon sx={{ fontSize: 45 }} />, title: t('offer_sol4_title'), desc: t('offer_sol4_desc'), color: glowColor }
  ];

  return (
    <Box id="solutions" sx={{ 
      py: { xs: 8, md: 12 }, 
      backgroundColor: bgBlue, // تغيير الخلفية للون الأزرق المختار
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* تأثير الإضاءة الخلفية بلون أورنج */}
      <Box sx={{
        position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px',
        background: `radial-gradient(circle, ${alpha(glowColor, 0.15)} 0%, rgba(0,0,0,0) 70%)`,
        zIndex: 0, pointerEvents: 'none'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        <ScrollReveal>
          <Box sx={{ width: '100%', mb: 8 }}>
            <Typography 
              variant="h3" 
              align="center" 
              sx={{ 
                color: 'white', 
                fontWeight: 800, 
                fontSize: { xs: '2rem', md: '3rem' },
                textShadow: `0 10px 30px ${alpha('#000', 0.5)}`
              }}
            >
              {t('offer_main_title')}
            </Typography>
            {/* الخط السفلي بلون الأورنج */}
            <Box sx={{ width: 60, height: 4, bgcolor: glowColor, mx: 'auto', mt: 2, borderRadius: 2, boxShadow: `0 0 10px ${glowColor}` }} />
          </Box>
        </ScrollReveal>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {solutions.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', width: { xs: '100%', sm: '50%', md: '25%' } }}>
              <ScrollReveal delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ width: '100%', display: 'flex' }}
                >
                  <Card sx={{ 
                    m: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    background: alpha('#000', 0.2), // خلفية داكنة شفافة لتبرز فوق الأزرق
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(glowColor, 0.1)}`, // حدود برتقالية خفيفة جداً
                    borderRadius: 4,
                    transition: '0.3s',
                    '&:hover': {
                      border: `1px solid ${glowColor}`, // حدود برتقالية عند الهوفر
                      boxShadow: `0 15px 35px ${alpha(glowColor, 0.3)}`, // توهج برتقالي
                    }
                  }}>
                    <CardContent sx={{ 
                      p: 4, 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      textAlign: 'center'
                    }}>
                      <Box sx={{ 
                        display: 'inline-flex',
                        p: 2, 
                        borderRadius: '50%', 
                        bgcolor: alpha(whiteColor, 0.1), 
                        color: whiteColor, // الأيقونة بلون الأورنج
                        mb: 3,
                        boxShadow: `0 0 20px ${alpha(whiteColor, 0.2)}`
                      }}>
                        {item.icon}
                      </Box>
                      
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          color: 'white', 
                          fontWeight: 700, 
                          mb: 2,
                          fontSize: {xs: '1.5rem', md: '1.5rem', lg: '1.2rem'} ,
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      >
                        {item.title}
                      </Typography>
                      
                      <Typography 
                        sx={{ 
                          color: alpha('#fff', 0.9), // أبيض ناصع مع شفافية بسيطة للقراءة
                          lineHeight: 1.6,
                          fontWeight: 400,
                          fontSize: {xs: '1.2rem', md: '1rem', lg: '1rem'} ,
                          wordBreak: 'break-word'
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            </Grid>
          ))}
        </Box>
      </Container>
    </Box>
  );
};