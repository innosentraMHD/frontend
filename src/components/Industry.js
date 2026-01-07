import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // استيراد هوك الترجمة
import MediaGallery from './MediaGallery'; 

// استيراد الصور
import img1 from '../images/i1.webp';
import img2 from '../images/i2.webp';
import img3 from '../images/i3.webp';

const MotionBox = motion(Box);

export const Industry = () => {
  const { t } = useTranslation(); // تفعيل الترجمة

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const industryMedia = [
    { type: 'image', image: img1, label: '' },
    { type: 'image', image: img2, label: '' },
    { type: 'image', image: img3, label: '' },
  ];

  // تعريف القوائم باستخدام مفاتيح الترجمة
  const analysisList = [
    t('industry_a1'), t('industry_a2'), t('industry_a3'), t('industry_a4')
  ];

  const mattersList = [
    t('industry_m1'), t('industry_m2'), t('industry_m3')
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
        background: 'linear-gradient(135deg, #2d2d2d 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              {t('industry_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
              {t('industry_hero_subtitle')}
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
            alignItems: 'center', 
            gap: 8 
          }}>
            
            {/* Text Section */}
            <MotionBox 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '50%' } }}
            >
              <PrecisionManufacturingIcon sx={{ fontSize: 48, color: 'grey.700', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                {t('industry_section_title')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                {t('industry_section_subtitle')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                    {t('industry_analyze_label')}
                  </Typography>
                  <List dense disablePadding>
                    {analysisList.map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>
                    {t('industry_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {mattersList.map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </MotionBox>

            {/* Gallery Section */}
            <MotionBox
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '50%' } }}
            >
              <MediaGallery mediaItems={industryMedia} />
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};