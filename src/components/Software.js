import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
// غيرت الأيقونة فقط لتناسب البرمجة (Terminal) بدلاً من المصنع
import TerminalIcon from '@mui/icons-material/Terminal'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import MediaGallery from './MediaGallery'; 

// نفس الصور الحالية كما طلبت
import img1 from '../images/y1.webp';
import img2 from '../images/y2.webp';
import img3 from '../images/y3.webp';

const MotionBox = motion(Box);

export const Software = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const softwareMedia = [
    { type: 'image', image: img1, label: '' },
    { type: 'image', image: img2, label: '' },
    { type: 'image', image: img3, label: '' },
  ];

  // القائمة اليمنى (التقنيات والتطوير)
  const techList = [
    t('software_c1'), 
    t('software_c2'), 
    t('software_c3'), 
    t('software_c4')
  ];

  // القائمة اليسرى (البنية التحتية والجودة)
  const infraList = [
    t('software_c5'), 
    t('software_c6'), 
    t('software_c7'), 
    t('software_c8')
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      
      {/* Hero Section: نفس ألوان وتدرجات Industry تماماً */}
      <Box sx={{ 
        bgcolor: '#0f1220', 
        color: 'white', 
        py: { xs: 8, md: 12 }, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #2d2d2d 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              {t('software_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2, lineHeight: 1.6 }}>
              {t('software_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section: نفس تقسيم Industry */}
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
              dir={isAr ? 'rtl' : 'ltr'}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '50%' } }}
            >
              {/* الأيقونة الرمادية في الأعلى */}
              <TerminalIcon sx={{ fontSize: 48, color: 'grey.700', mb: 2 }} />
              
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                {t('software_section_title')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                {t('software_section_subtitle')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                
                {/* العمود الأول */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                    {t('software_col1_label')}
                  </Typography>
                  <List dense disablePadding>
                    {techList.map((text, i) => (
                      <ListItem
                        dir={isAr ? 'rtl' : 'ltr'}
                        key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText sx={{color: 'text.secondary', textAlign: { xs: isAr ? 'right' : 'left' } }} primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                {/* العمود الثاني */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>
                    {t('software_col2_label')}
                  </Typography>
                  <List dense disablePadding>
                    {infraList.map((text, i) => (
                      <ListItem 
                        dir={isAr ? 'rtl' : 'ltr'}
                        key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                        <ListItemText sx={{color: 'text.secondary', textAlign: { xs: isAr ? 'right' : 'left' } }} primary={text} />
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
              <MediaGallery mediaItems={softwareMedia} />
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};