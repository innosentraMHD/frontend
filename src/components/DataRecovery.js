import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

// مسار الصورة
import datarec1 from '../images/datarec1.webp';
import datarec2 from '../images/datarec2.webp';
import datarec3 from '../images/datarec3.webp';
import datarec4 from '../images/datarec4.webp';
import datarec5 from '../images/datarec5.webp';


const MotionBox = motion(Box);

export const DataRecovery = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defects = t('dataRecovery.defects.items', { returnObjects: true }) || [];
  const whyUsItems = t('dataRecovery.whyUs.items', { returnObjects: true }) || [];
  const steps = t('dataRecovery.steps.items', { returnObjects: true }) || [];

  // إعدادات حجم الصورة لتكون صغيرة ومتناسقة
  const imageStyle = {
    width: { xs: 250, sm: 350, md: 415 },
    height: 'auto',
    borderRadius: 3,
    boxShadow: 3,
    display: 'block',
    mx: 'auto'
  };

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ overflowX: 'hidden', bgcolor: 'background.paper' }}>
      
      {/* 1. القسم الرئيسي (Hero) */}
      <Box
        sx={{
          bgcolor: 'background.dark',
          color: 'white',
          py: { xs: 6, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.custom?.darkGradientStart || '#1a2a6c'} 0%, ${theme.palette.custom?.darkGradientEnd || '#b21f1f'} 100%)`
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 2, textAlign: isAr ? 'right' : 'left' }}>
                  {t('dataRecovery.hero.headline')}
                </Typography>
                <Typography variant="h5" sx={{ opacity: 0.85, fontWeight: 300, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 3, textAlign: isAr ? 'right' : 'left' }}>
                  {t('dataRecovery.hero.subheadline')}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8, textAlign: isAr ? 'right' : 'left' }}>
                  {t('dataRecovery.hero.description')}
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          
          {/* 2. قسم الأعطال والمشاكل */}
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
              <Box sx={{ width: { xs: '100%', md: '33.33%' }, order: { xs: 1, md: isAr ? 2 : 1 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box component="img" src={datarec2} alt="Defects Analysis 1" sx={imageStyle} />
                <Box component="img" src={datarec4} alt="Defects Analysis 2" sx={{ ...imageStyle, display: { xs: 'none', md: 'block' } }} />
              </Box>
              <Box sx={{ width: { xs: '100%', md: '66.66%' }, order: { xs: 2, md: isAr ? 1 : 2 }, minWidth: 0, overflowWrap: 'break-word' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, textAlign: isAr ? 'right' : 'left' }}>
                  {t('dataRecovery.defects.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, textAlign: isAr ? 'right' : 'left' }}>
                  {t('dataRecovery.hero.processText')}
                </Typography>
                <List disablePadding>
                  {defects.map((item, index) => (
                    <ListItem key={index} sx={{ alignItems: 'flex-start', mb: 1, px: 0, flexDirection: isAr ? 'row-reverse' : 'row' }}>
                     
                      <ListItemText
                        primary={item.name}
                        secondary={item.desc}
                        sx={{ textAlign: isAr ? 'right' : 'left' }}
                        primaryTypographyProps={{ fontWeight: 700 }}
                        secondaryTypographyProps={{ sx: { mt: 0.3, lineHeight: 1.7 } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>

          {/* 3. قسم لماذا تختارنا */}
          <Box sx={{ mb: { xs: 8, md: 10 }, p: { xs: 3, md: 6 }, bgcolor: 'custom.surfaceLight', borderRadius: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
              <Box sx={{ width: { xs: '100%', md: '66.66%' }, order: { xs: 2, md: 1 }, minWidth: 0, overflowWrap: 'break-word' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, textAlign: isAr ? 'right' : 'left' }}>
                  {t('dataRecovery.whyUs.title')}
                </Typography>
                <List disablePadding>
                  {whyUsItems.map((item, index) => (
                    <ListItem key={index} sx={{ alignItems: 'flex-start', mb: 2, px: 0, flexDirection: isAr ? 'row-reverse' : 'row' }}>
                 
                      <ListItemText
                        primary={item.title}
                        secondary={item.desc}
                        sx={{ textAlign: isAr ? 'right' : 'left' }}
                        primaryTypographyProps={{ fontWeight: 700 }}
                        secondaryTypographyProps={{ sx: { mt: 0.3, lineHeight: 1.7 } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box sx={{ width: { xs: '100%', md: '33.33%' }, order: { xs: 1, md: 2 } }}>
                <Box component="img" src={datarec1} alt="Why Choose Us" sx={imageStyle} />
              </Box>
            </Box>
          </Box>

          {/* 4. قسم خطوات العمل */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ width: { xs: '100%', md: '33.33%' }, order: { xs: 1, md: isAr ? 2 : 1 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, position: { md: 'sticky' }, top: 20 }}>
                  <Box component="img" src={datarec5} alt="Recovery Steps 1" sx={imageStyle} />
                  <Box component="img" src={datarec3} alt="Recovery Steps 2" sx={{ ...imageStyle, display: { xs: 'none', md: 'block' } }} />
                </Box>
              </Box>
              <Box sx={{ width: { xs: '100%', md: '66.66%' }, order: { xs: 2, md: isAr ? 1 : 2 }, minWidth: 0, overflowWrap: 'break-word' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, textAlign: isAr ? 'right' : 'left' }}>
                  {t('dataRecovery.steps.title')}
                </Typography>
                <List disablePadding>
                  {steps.map((item, index) => (
                    <ListItem key={index} sx={{ alignItems: 'flex-start', mb: 3, px: 0, p: 3, borderRadius: 2, textAlign: isAr ? 'right' : 'left' }}>
                      <ListItemText
                        primary={`${item.step}. ${item.title}`}
                        secondary={item.desc}
                        primaryTypographyProps={{ fontWeight: 800, variant: 'h6', mb: 1 }}
                        secondaryTypographyProps={{ sx: { lineHeight: 1.7, fontSize: '1rem', whiteSpace: 'normal' } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>

        </MotionBox>
      </Container>
    </Box>
  );
};
