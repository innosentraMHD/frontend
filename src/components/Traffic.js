import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import TrafficIcon from '@mui/icons-material/Traffic';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import trafficVideo from '../videos/traffic-demo.mp4';
import videoPoster from '../images/cars.webp';

const MotionBox = motion(Box);

export const Traffic = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // استعادة كافة البيانات كاملة كما في الكود الأصلي
  const features = [
    t('traffic_f1'), t('traffic_f2'), t('traffic_f3'), 
    t('traffic_f4'), t('traffic_f5')
  ];
  const importance = [
    t('traffic_i1'), t('traffic_i2'), t('traffic_i3')
  ];

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ overflowX: 'hidden', bgcolor: 'background.default' }}>
      
      {/* Hero Header: نمط انسيابي متدرج */}
      <Box sx={{ 
        bgcolor: 'background.dark', 
        color: 'white', 
        py: { xs: 4, md: 8 }, 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        // إضافة لمسة انسيابية للخلفية
        background: 'black',
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3.8rem' }, mb: 2 }}>
              {t('traffic_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, maxWidth: '700px', mx: 'auto' }}>
              {t('traffic_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section: Flex Layout */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, // لابتوب بجانب بعض، موبايل فوق بعض
            alignItems: 'flex-start', 
            gap: { xs: 6, md: 10 } 
          }}>
            
            {/* جهة الفيديو: تصميم مرن مع بوكس انسيابي */}
            

            {/* جهة النص: Flex Column */}
            <Box sx={{ 
              width: { xs: '100%', md: '60%' },
              display: 'flex',
              flexDirection: 'column'
            }}>
              <MotionBox
                initial={{ opacity: 0, x: isAr ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: {xs: 'center', md: 'flex-start'} }}>
                  <TrafficIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}>
                    {t('traffic_section_title')}
                  </Typography>
                </Box>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 6, lineHeight: 1.8, textAlign: {xs: 'center', md: 'justify'} }}>
                  {t('traffic_section_subtitle')}
                </Typography>
              </MotionBox>

              {/* القوائم: Flex Row للأجهزة الكبيرة و Column للصغيرة */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 5 
              }}>
                {/* القائمة الأولى: الميزات */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                    {t('traffic_track_label')}
                  </Typography>
                  <List dense disablePadding>
                    {features.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* القائمة الثانية: الأهمية */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="secondary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                    {t('traffic_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {importance.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
            <MotionBox 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              sx={{ 
                width: { xs: '100%', md: '40%' },
                position: 'sticky',
                top: '100px'
              }}
            >
              <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>
            <Box 
              component="video" autoPlay muted loop playsInline poster={videoPoster}
              sx={{ width: '100%', borderRadius: '50px 5px 50px 5px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', bgcolor: '#000' }}
            >
              <source src={trafficVideo} type="video/mp4" />
            </Box>
          </Box>
            </MotionBox>

          </Box>
          
        </Container>
      </Box>
    </Box>
  );
};