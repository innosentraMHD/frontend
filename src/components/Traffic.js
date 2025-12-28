import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import TrafficIcon from '@mui/icons-material/Traffic';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';

// --- استيراد الوسائط من مجلداتك الخاصة ---
import trafficVideo from '../videos/traffic-demo.mp4';
import videoPoster from '../images/cars.webp';

export const Traffic = () => {
  const { t } = useTranslation();

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const features = [
    t('traffic_f1'), t('traffic_f2'), t('traffic_f3'), t('traffic_f4'), t('traffic_f5')
  ];

  const importance = [
    t('traffic_i1'), t('traffic_i2'), t('traffic_i3')
  ];

  return (
    <Box>
      {/* Hero Header */}
      <Box sx={{ 
        bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
        background: 'linear-gradient(135deg, #0a2e38 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            {t('traffic_hero_title')}
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
            {t('traffic_hero_subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center', 
            gap: { xs: 6, md: 6 } // تقليل الفجوة قليلاً لتعويض عرض النص
          }}>
            
            {/* الجهة اليسرى: النص (تم تكبير العرض هنا إلى 65%) */}
            <Box sx={{ width: { xs: '100%', md: '65%' }, order: { xs: 1, md: 1 } }}>
              <TrafficIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}>
                {t('traffic_section_title')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                {t('traffic_section_subtitle')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>
                    {t('traffic_track_label')}
                  </Typography>
                  <List dense disablePadding>
                    {features.map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>
                    {t('traffic_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {importance.map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                        <ListItemText color="text.secondary" primary={text} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            {/* الجهة اليمنى: الفيديو (تم تصغير العرض هنا إلى 35%) */}
            <Box sx={{ 
              width: { xs: '100%', md: '35%' }, 
              display: 'flex', 
              justifyContent: 'center',
              order: { xs: 2, md: 2 } 
            }}>
              <Box 
                component="video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={videoPoster}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px', // زوايا أنعم قليلاً
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', // ظل أعمق ليعطي عمقاً للفيديو الصغير
                  bgcolor: '#000',
                  objectFit: 'cover'
                }}
              >
                <source src={trafficVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};