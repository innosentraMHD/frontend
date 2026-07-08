import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, useMediaQuery 
} from '@mui/material';
import TrafficIcon from '@mui/icons-material/Traffic';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

// قم بتغيير هذه المسارات لتشمل الفيديو الثاني إذا كان لديك واحد مختلف
import trafficVideo from '../videos/traffic-demo.mp4';
import videoPoster from '../images/cars.webp';
import trafficVideo2 from '../videos/traffic-demo2.mp4';
import videoPoster2 from '../images/cars2.webp';

const MotionBox = motion(Box);

export const Traffic = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';
  
  // التحقق من حجم الشاشة (أصغر من md تعني موبايل أو تابلت صغير)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    t('traffic_f1'), t('traffic_f2'), t('traffic_f3'), 
    t('traffic_f4'), t('traffic_f5')
  ];
  const importance = [
    t('traffic_i1'), t('traffic_i2'), t('traffic_i3')
  ];

  // قمنا بتعريف الفيديو الثاني هنا لسهولة إعادة استخدامه حسب حجم الشاشة
  const secondVideoNode = (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ 
        width: '100%', 
        mt: { xs: 4, md: 4 }, // مسافة من الأعلى
        mb: { xs: 5, md: 0 }  // مسافة من الأسفل في الموبايل فقط
      }}
    >
      <Box 
        component="video" autoPlay muted loop playsInline poster={videoPoster2}
        // تم عكس الـ border-radius ليعطي شكلاً جمالياً متكاملاً مع الفيديو الأول
        sx={{ width: '100%', borderRadius: '5px 50px 5px 50px', boxShadow: theme.shadows[8], bgcolor: 'custom.blackPure' }}
      >
        {/* استبدل src بمسار الفيديو الثاني إذا توفر */}
        <source src={trafficVideo2} type="video/mp4" />
      </Box>
    </MotionBox>
  );

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ overflowX: 'hidden', bgcolor: 'background.default' }}>
      
      {/* Hero Header: نمط انسيابي متدرج */}
      <Box sx={{ 
        bgcolor: 'background.dark', 
        color: 'white', 
        py: { xs: 4, md: 8 }, 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'black',
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 2 }}>
              {t('traffic_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: '700px', mx: 'auto' }}>
              {t('traffic_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section: Flex Layout */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start', 
            gap: { xs: 6, md: 10 } 
          }}>
            
            {/* جهة النص: Flex Column */}
            <Box sx={{ 
              width: { xs: '100%', md: '60%' },
              display: 'flex',
              flexDirection: 'column'
            }}>
              <MotionBox
                initial={{ opacity: 0, x: isAr ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: {xs: 'center', md: 'flex-start'} }}>
                  <TrafficIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.6rem' } }}>
                    {t('traffic_section_title')}
                  </Typography>
                </Box>

                <Typography variant="h6" color="text.secondary" sx={{ mb: { xs: 2, md: 6 }, lineHeight: 1.8, textAlign: {xs: 'center', md: 'justify'} }}>
                  {t('traffic_section_subtitle')}
                </Typography>
              </MotionBox>

              {/* ---------------------------------------------------- */}
              {/* عرض الفيديو الثاني هنا في حالة الموبايل فقط (بين النصوص) */}
              {isMobile && secondVideoNode}
              {/* ---------------------------------------------------- */}

              {/* القوائم: Flex Row للأجهزة الكبيرة و Column للصغيرة */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 5 
              }}>
                {/* القائمة الأولى: الميزات */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                    {t('traffic_track_label')}
                  </Typography>
                  <List dense disablePadding>
                    {features.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* القائمة الثانية: الأهمية */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="secondary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                    {t('traffic_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {importance.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            {/* جهة الفيديو */}
            <MotionBox 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              sx={{ 
                width: { xs: '100%', md: '40%' },
                position: 'sticky',
                top: '100px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* الفيديو الأول */}
              <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>
                <Box 
                  component="video" autoPlay muted loop playsInline poster={videoPoster}
                  sx={{ width: '100%', borderRadius: '50px 5px 50px 5px', boxShadow: theme.shadows[8], bgcolor: 'custom.blackPure' }}
                >
                  <source src={trafficVideo} type="video/mp4" />
                </Box>
              </Box>

              {/* ---------------------------------------------------- */}
              {/* عرض الفيديو الثاني هنا في حالة اللابتوب فقط (تحت الأول) */}
              {!isMobile && secondVideoNode}
              {/* ---------------------------------------------------- */}

            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};