import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider 
} from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MediaGallery from './MediaGallery'; 

import img1 from '../images/i1.webp';
import img2 from '../images/i2.webp';
import img3 from '../images/i3.webp';

const MotionBox = motion(Box);

export const Industry = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const industryMedia = [
    { type: 'image', image: img1, label: '' },
    { type: 'image', image: img2, label: '' },
    { type: 'image', image: img3, label: '' },
  ];

  const analysisList = [
    t('industry_a1'), t('industry_a2'), t('industry_a3'), t('industry_a4')
  ];

  const mattersList = [
    t('industry_m1'), t('industry_m2'), t('industry_m3')
  ];

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: 'background.paper' }}>
      
      {/* Hero Section: نمط صناعي تقني */}
      <Box sx={{ 
        bgcolor: 'background.dark', 
        color: 'white', 
        py: { xs: 6, md:8 }, 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // خلفية بتدرج صناعي عميق
        background: 'linear-gradient(135deg, #0f1220 0%, #1a1a1a 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }
      }}>
        <Container maxWidth="lg">
          <MotionBox
            dir={isAr ? 'rtl' : 'ltr'}
            initial={{ opacity: 0, x: isAr ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: { xs: 'center', md: isAr ? 'right' : 'left' } }}
          >
            <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' }, letterSpacing: -1 }}>
              {t('industry_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.7, fontWeight: 300, mt: 3, maxWidth: '800px' }}>
              {t('industry_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section: تخطيط مرن يركز على الدقة */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: isAr ? 'row' : 'row-reverse' }, 
            alignItems: 'stretch', 
            gap: { xs: 6, md: 10 } 
          }}>
            
            {/* جهة النصوص: تصميم هندسي منظم */}
            <MotionBox 
              dir={isAr ? 'rtl' : 'ltr'}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={{ 
                width: { xs: '100%', md: '55%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <PrecisionManufacturingIcon sx={{ fontSize: 50, color: 'primary.main' }} />
                <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}>
                  {t('industry_section_title')}
                </Typography>
              </Box>

              <Typography variant="h6" color="text.secondary" sx={{ mb: 5, lineHeight: 1.8, textAlign: { xs: 'center', md: 'justify' } }}>
                {t('industry_section_subtitle')}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 4,
                p: { xs: 3, md: 4 },
                bgcolor: 'background.default',
                borderRadius: '2px',
                borderLeft: isAr ? 'none' : '4px solid',
                borderRight: isAr ? '4px solid' : 'none',
                borderColor: 'primary.main',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                {/* قائمة التحليل */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="primary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SettingsSuggestIcon fontSize="small" />
                    {t('industry_analyze_label')}
                  </Typography>
                  <List dense disablePadding>
                    {analysisList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                          primaryTypographyProps={{ fontWeight: 500 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' }, mx: 1 }} />

                {/* قائمة الأهمية */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="secondary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: 'secondary.main', borderRadius: '50%' }} />
                    {t('industry_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {mattersList.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                          primaryTypographyProps={{ fontWeight: 500 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </MotionBox>

            {/* جهة الجاليري: تصميم صلب كالمعدن */}
            <MotionBox
              initial={{ opacity: 0, x: isAr ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ 
                width: { xs: '100%', md: '45%' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box sx={{ 
                width: '100%',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: -10,
                  border: '1px solid rgba(0,0,0,0.1)',
                  zIndex: -1,
                  display: { xs: 'none', md: 'block' }
                }
              }}>
                <MediaGallery mediaItems={industryMedia} />
              </Box>
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};