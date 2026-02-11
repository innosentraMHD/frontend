import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider 
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon'; // أيقونة إضافية للجمالية
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MediaGallery from './MediaGallery'; 

import secImg1 from '../images/s1.webp';
import secImg2 from '../images/s2.webp';

const MotionBox = motion(Box);

export const Security = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const securityMedia = [
    { type: 'image', image: secImg1, label: '' },
    { type: 'image', image: secImg2, label: '' },
  ];

  const capabilitiesList = [
    t('security_c1'), t('security_c2'), t('security_c3'), t('security_c4')
  ];

  const valueList = [
    t('security_v1'), t('security_v2'), t('security_v3')
  ];

  return (
    <Box 
      dir={isAr ? 'rtl' : 'ltr'} 
      sx={{ 
        bgcolor: '#020408', // لون داكن أكثر عمقاً
        color: 'white', 
        overflowX: 'hidden',
        minHeight: '100vh'
      }}
    >
      
      {/* Hero Section: النمط السري الغامض */}
      <Box sx={{ 
        position: 'relative',
        bgcolor: '#05070a', 
        color: 'white', 
        py: { xs: 6, md: 8 }, 
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 50%, #101428 0%, #020408 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* عنصر بصري ديكوري للسرية */}
        <Box sx={{ 
          position: 'absolute', top: '-10%', left: isAr ? 'auto' : '-5%', right: isAr ? '-5%' : 'auto',
          width: '40%', height: '40%', bgcolor: 'primary.main', filter: 'blur(150px)', opacity: 0.05 
        }} />

        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          
            <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '4.5rem' }, mb: 2, textShadow: '0 0 20px rgba(0,0,0,0.5)' }}>
              {t('security_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.5, fontWeight: 300, maxWidth: '750px', mx: 'auto', lineHeight: 1.6 }}>
              {t('security_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section: تخطيط احترافي مرن */}
      <Box sx={{ py: { xs: 8, md: 15 }, position: 'relative' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: isAr ? 'row' : 'row-reverse' }, 
            alignItems: 'center', 
            gap: { xs: 6, md: 10 } 
          }}>
            
            {/* جهة الصور: إطار تقني حديث */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={{ 
                width: { xs: '100%', md: '50%' },
                position: 'relative',
                p: 1,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
              }}
            >
              <MediaGallery mediaItems={securityMedia} />
            </MotionBox>

            {/* جهة النص: بطاقة زجاجية فاخرة */}
            <MotionBox 
              initial={{ opacity: 0, x: isAr ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{ 
                width: { xs: '100%', md: '50%' },
                bgcolor: 'rgba(10, 15, 25, 0.7)',
                p: { xs: 4, md: 7 },
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                textAlign: { xs: 'center', md: isAr ? 'right' : 'left' }
              }}
            >
              <SecurityIcon sx={{ fontSize: 60, color:'secondary.main', mb: 3, filter: 'drop-shadow(0 0 10px rgba(0,150,255,0.4))' }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' }, mb: 3 }}>
                {t('security_section_title')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 6, opacity: 0.6, fontSize: '1.1rem', lineHeight: 1.8 }}>
                {t('security_section_subtitle')}
              </Typography>
              
              <Divider sx={{ mb: 5, borderColor: 'rgba(255,255,255,0.05)' }} />

              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 5,
                textAlign: isAr ? 'right' : 'left'
              }}>
                {/* القائمة الأولى: القدرات */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color='secondary.main' sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Box sx={{ width: 6, height: 6, bgcolor:'secondary.main', borderRadius: '50%' }} />
                    {t('security_cap_label')}
                  </Typography>
                  <List dense disablePadding>
                    {capabilitiesList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ mb: 2, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
                          <CheckCircleOutlineIcon sx={{ color: 'secondary.main', fontSize: '1.2rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                {/* القائمة الثانية: القيم */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="secondary.light" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Box sx={{ width: 6, height: 6, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                    {t('security_val_label')}
                  </Typography>
                  <List dense disablePadding>
                    {valueList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ mb: 2, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
                          <CheckCircleOutlineIcon sx={{ color: 'secondary.main', fontSize: '1.2rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontSize: '0.95rem', fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};