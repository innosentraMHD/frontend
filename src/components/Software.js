import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, useTheme 
} from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MediaGallery from './MediaGallery'; 

import img1 from '../images/y1.webp';
import img2 from '../images/y2.webp';
import img3 from '../images/y3.webp';

const MotionBox = motion(Box);

export const Software = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme(); // الوصول إلى الثيم هنا
  const isAr = i18n.language === 'ar';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const softwareMedia = [
    { type: 'image', image: img1, label: '' },
    { type: 'image', image: img2, label: '' },
    { type: 'image', image: img3, label: '' },
  ];

  const techList = [
    t('software_c1'), 
    t('software_c2'), 
    t('software_c3'), 
    t('software_c4')
  ];

  const infraList = [
    t('software_c5'), 
    t('software_c6'), 
    t('software_c7'), 
    t('software_c8')
  ];

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: 'background.default' }}>
      
      {/* Hero Section: ربط الخلفية باللون الأزرق من الثيم */}
      <Box sx={{ 
        bgcolor: 'primary.main', // سيأخذ rgb(10,70,80) تلقائياً من الثيم
        color: 'white', 
        py: { xs: 6, md: 10 }, 
        textAlign: 'center',
        position: 'relative'
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* أيقونة اختيارية في الهيرو لتعزيز مظهر البرمجيات */}
            <TerminalIcon sx={{ fontSize: 50, mb: 2, opacity: 0.9, color: 'secondary.main' }} />
            
            <Typography variant="h5" sx={{ 
              fontWeight: 800, 
              fontSize: { xs: '1.7rem', md: '2.3rem', lg: '2.6rem' },
              mb: 2 
            }}>
              {t('software_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ 
              opacity: 0.9,
              fontWeight: 400, 
              fontSize: { xs: '1rem', md: '1.15rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}>
              {t('software_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'flex-start', // لمحاذاة النص مع بداية الجاليري
            gap: 8 
          }}>
            
            {/* Text Section */}
            <MotionBox 
              dir={isAr ? 'rtl' : 'ltr'}
              initial={{ opacity: 0, x: isAr ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '55%' } }}
            >
              <Typography variant="h4" gutterBottom sx={{ 
                fontWeight: 700, 
                color: 'primary.main', // استخدام الأزرق للعناوين
                fontSize: { xs: '2rem', md: '2.8rem' } 
              }}>
                {t('software_section_title')}
              </Typography>
              <Typography variant="h6" sx={{ mb: 5, color: 'text.secondary', fontWeight: 400 }}>
                {t('software_section_subtitle')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                
                {/* العمود الأول - التقنيات */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    fontWeight: 700, 
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <Box sx={{ width: 4, height: 20, bgcolor: 'secondary.main', borderRadius: 1 }} />
                    {t('software_col1_label')}
                  </Typography>
                  <List dense disablePadding>
                    {techList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                          <CheckCircleOutlineIcon sx={{ color: 'secondary.main', fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ 
                            sx: { 
                              color: 'text.primary', 
                              fontSize: '1.05rem',
                              textAlign: isAr ? 'right' : 'left'
                            } 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                {/* العمود الثاني - البنية التحتية */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ 
                    mb: 2, 
                    fontWeight: 700, 
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <Box sx={{ width: 4, height: 20, bgcolor: 'secondary.main', borderRadius: 1 }} />
                    {t('software_col2_label')}
                  </Typography>
                  <List dense disablePadding>
                    {infraList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                          <CheckCircleOutlineIcon sx={{ color: 'secondary.main', fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ 
                            sx: { 
                              color: 'text.primary', 
                              fontSize: '1.05rem',
                              textAlign: isAr ? 'right' : 'left'
                            } 
                          }} 
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
              sx={{ width: { xs: '100%', md: '45%' } }}
            >
              <Box sx={{ 
                p: 1, 
                bgcolor: 'background.paper', 
                borderRadius: 4, 
                boxShadow: 8,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <MediaGallery mediaItems={softwareMedia} />
              </Box>
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};