import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MemoryIcon from '@mui/icons-material/Memory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import stepsimg from '../images/steps.webp';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const Steps = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const stepsData = [
    { icon: <SearchIcon fontSize="large" />, title: t('steps_s1_title'), description: t('steps_s1_desc') },
    { icon: <PsychologyIcon fontSize="large" />, title: t('steps_s2_title'), description: t('steps_s2_desc') },
    { icon: <MemoryIcon fontSize="large" />, title: t('steps_s3_title'), description: t('steps_s3_desc') },
    { icon: <DashboardIcon fontSize="large" />, title: t('steps_s4_title'), description: t('steps_s4_desc') },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.gray' }} id="how-we-work">
      <Container maxWidth="lg">
        {/* العنوان الرئيسي */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              mb: 8, 
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3.2rem', lg: '3.5rem' },
              color: 'primary.main',
              // إضافة خط عربي للعنوان
              
            }}
          >
            {t('steps_main_title')}
          </Typography>
        </MotionBox>

        <Box 
          sx={{ 
            display: 'flex', 
            // إذا أردت قلب التخطيط (الصورة يمين/يسار) استخدم السطر التالي، وإلا اتركه كما هو
            // flexDirection: { xs: 'column', md: isAr ? 'row-reverse' : 'row' }, 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center',
            gap: 6
          }}
        >
          {/* === قسم النصوص === */}
          <Box sx={{ width: { xs: '100%', md: '70%' }, flexGrow: 1 }}>
            
            {/* إضافة dir هنا هي المفتاح لضبط كل البطاقات بداخله */}
            <Grid container spacing={4} dir={isAr ? 'rtl' : 'ltr'}>
              
              {stepsData.map((step, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    sx={{
                      height: '100%',
                      p: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      // محاذاة العناصر (الأيقونة والعنوان) حسب البداية المنطقية للغة
                      alignItems: 'flex-start', 
                      textAlign: 'start', // هذا السطر يضمن أن النص يبدأ من اليمين للعربية
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'translateY(-5px)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 60, height: 60, borderRadius: '50%',
                          backgroundColor: 'rgba(0, 86, 179, 0.1)', 
                          color: 'primary.main',
                          
                          // التغيير الجوهري هنا:
                          // بدلاً من mr: 2 (هامش يمين فقط)
                          // نستخدم marginInlineEnd (هامش في نهاية اتجاه القراءة)
                          marginInlineEnd: 2 
                        }}
                      >
                        {step.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        fontWeight="bold" 
                        color="text.primary" 
                        gutterBottom 
                        sx={{ 
                          fontSize: { xs: '1.1rem', md: '1.3rem', lg: '1.45rem' },
                          
                        }}
                      >
                        {step.title}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      sx={{ 
                        lineHeight: 1.6, 
                        fontSize: { xs: '0.95rem', md: '1.1rem', lg: '1.2rem' },
                       
                      }}
                    >
                      {step.description}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* === قسم الصورة (لم يتغير مكانه، فقط اتجاهه) === */}
          <MotionBox 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                // اختياري: إذا أردت عكس الصورة نفسها (كالمرآة) في العربية
                // transform: isAr ? 'scaleX(-1)' : 'none' 
              }}
            />
          </MotionBox>
        </Box> 
      </Container>
    </Box>
  );
};