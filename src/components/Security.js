import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ overflowX: 'hidden' }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: '#0f1220', 
        color: 'white', 
        py: { xs: 8, md: 12 }, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a0a0a 0%, #11152f 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
              {t('security_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
              {t('security_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { 
              xs: 'column', // فوق بعض في الجوال
              md: 'row'     // في الديسك توب يتبع الـ dir تلقائياً (نص يمين/صورة يسار في العربي)
            }, 
            alignItems: 'center', 
            gap: { xs: 6, md: 8 } 
          }}>
            
            {/* Text Section */}
            <MotionBox 
              initial={{ opacity: 0, x: isAr ? 100 : -100 }} // الأنيميشن يأتي من الجهة المناسبة
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ 
                width: { xs: '100%', md: '50%' },
                textAlign: { xs: 'center', md: 'initial' }, // توسيط في الجوال
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' }
              }}
            >
              <SecurityIcon sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
                {t('security_section_title')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                {t('security_section_subtitle')}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 4,
                width: '100%' 
              }}>
                {/* القائمة الأولى */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                    {t('security_cap_label')}
                  </Typography>
                  <List dense disablePadding>
                    {capabilitiesList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                {/* القائمة الثانية */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>
                    {t('security_val_label')}
                  </Typography>
                  <List dense disablePadding>
                    {valueList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleOutlineIcon color="secondary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </MotionBox>

            {/* Gallery Section */}
            <MotionBox
              initial={{ opacity: 0, x: isAr ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ 
                width: { xs: '100%', md: '50%' },
 
              }}
            >
              <MediaGallery mediaItems={securityMedia} />
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};