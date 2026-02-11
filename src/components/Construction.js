import React, { useEffect } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MediaGallery from './MediaGallery'; 
import constr1 from '../images/c1.webp';
import constr2 from '../images/c2.webp';

const MotionBox = motion(Box);

export const Construction = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const safetyMedia = [
    { type: 'image', image: constr1, label: t('construction_site_label') },
    { type: 'image', image: constr2, label: t('construction_benefit_label') },
  ];

  return (
    <Box sx={{ overflowX: 'hidden', bgcolor: 'background.paper' }}>
      {/* Hero: Geometric Cut */}
      <Box sx={{ 
        bgcolor: 'background.dark', color: 'white', py: { xs: 6, md: 8 },
        clipPath: { md: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', xs: 'none' },
        display: 'flex', alignItems: 'center'
      }}>
        <Container maxWidth="lg">
          <MotionBox
            dir={isAr ? 'rtl' : 'ltr'}
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: { xs: 'center', md: isAr ? 'right' : 'left' } }}
          >
            <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -1, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              {t('construction_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
              {t('construction_hero_subtitle')}
            </Typography>
            <Box sx={{ width: '80px', height: '6px', bgcolor: 'primary.main', mt: 2, mx: { xs: 'auto', md: 0 } }} />
          </MotionBox>
        </Container>
      </Box>

      {/* Main Content: Flex Grid */}
      <Container maxWidth="lg" sx={{ mt: -5, pb: 10 }}>
        <Box sx={{ 
          display: 'flex', flexDirection: { xs: 'column', md: isAr ? 'row' : 'row-reverse' },
          gap: 4, alignItems: 'stretch' 
        }}>
          {/* Gallery Box */}
          <Box sx={{ flex: 1, display: 'flex',  overflow: 'hidden', borderColor: 'divider' }}>
             <MediaGallery mediaItems={safetyMedia} />
          </Box>

          {/* Info Box: Structured */}
          <MotionBox 
            sx={{ flex: 1, p: { xs: 2, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexDirection: isAr ? 'row' : 'row' }}>
              <EngineeringIcon color="primary" sx={{ fontSize: 40 }} />
              <Typography variant="h4" sx={{textAlign: isAr ? 'right' : 'left',}} fontWeight={800}>{t('construction_section_title')}</Typography>
            </Box>
            
            <Typography variant="body1" color="text.secondary" dir={isAr ? 'rtl' : 'ltr'} sx={{textAlign: isAr ? 'right' : 'left', mb: 4, textAlign: 'justify' }}>
              {t('construction_section_subtitle')}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
              {[ {list: [t('construction_s1'), t('construction_s2'), t('construction_s3'), t('construction_s4')], label: 'construction_site_label', color: 'primary.main'},
                 {list: [t('construction_b1'), t('construction_b2'), t('construction_b3')], label: 'construction_benefit_label', color: 'secondary.main'}
              ].map((group, idx) => (
                <Box key={idx} sx={{ flex: 1, bgcolor: 'background.default', p: 3, borderLeft: isAr ? 'none' : `4px solid`, borderRight: isAr ? `4px solid` : 'none', borderColor: group.color }}>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2, color: group.color ,textAlign: isAr ? 'right' : 'left' }}>{t(group.label)}</Typography>
                  <List dense>
                    {group.list.map((item, i) => (
                      <ListItem key={i} disablePadding sx={{ mb: 1 }} dir={isAr ? 'rtl' : 'ltr'}>
                        <ListItemIcon sx={{ minWidth: 30 }}><CheckCircleOutlineIcon sx={{ fontSize: 18 }} /></ListItemIcon>
                        <ListItemText primary={item}  sx={{ textAlign: isAr ? 'right' : 'left' }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};