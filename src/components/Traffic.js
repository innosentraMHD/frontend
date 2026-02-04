import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import TrafficIcon from '@mui/icons-material/Traffic';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';

import trafficVideo from '../videos/traffic-demo.mp4';
import videoPoster from '../images/cars.webp';

export const Traffic = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [t('traffic_f1'), t('traffic_f2'), t('traffic_f3'), t('traffic_f4'), t('traffic_f5')];
  const importance = [t('traffic_i1'), t('traffic_i2'), t('traffic_i3')];

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'}>
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
            gap: { xs: 6, md: 8 } 
          }}>
            {/* جهة النص */}
            <Box sx={{ 
              width: { xs: '100%', md: '65%' }, 
              textAlign: { xs: 'center', md: 'initial' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <TrafficIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}>
                {t('traffic_section_title')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                {t('traffic_section_subtitle')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, width: '100%' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2, textAlign: 'inherit' }}>
                    {t('traffic_track_label')}
                  </Typography>
                  <List dense disablePadding>
                    {features.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} sx={{ textAlign: 'inherit' }} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 ,textAlign: {  xs: isAr ? 'right' : 'left' }}} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2, textAlign: 'inherit' }}>
                    {t('traffic_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {importance.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} sx={{ textAlign: 'inherit' ,textAlign: {  xs: isAr ? 'right' : 'left' }}} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            {/* جهة الفيديو */}
            <Box sx={{ width: { xs: '100%', md: '35%' } }}>
              <Box component="video" autoPlay muted loop playsInline poster={videoPoster}
                sx={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: 3, bgcolor: '#000' }}>
                <source src={trafficVideo} type="video/mp4" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};