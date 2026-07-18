import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../images/rassperry.webp';
import img2 from '../images/homeman.webp';

export const HomeMonitor = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';

  const [imageModalSrc, setImageModalSrc] = useState(null);
  const openImageModal = (src) => setImageModalSrc(src);
  const closeImageModal = () => setImageModalSrc(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuresList1 = [
    t('home_monitor_f1'),
    t('home_monitor_f2'),
    t('home_monitor_f3'),
    t('home_monitor_f7'),   // ← البند الرابع الجديد
  ];

  const featuresList2 = [
    t('home_monitor_f4'),
    t('home_monitor_f5'),
    t('home_monitor_f6'),
  ];

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ bgcolor: 'background.default', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(10,60,90,0.95) 0%, rgba(10,60,90,0.8) 100%)',
            color: 'text.white',
            borderRadius: '20px',
            p: { xs: 3, md: 5 },
            mb: 5,
            boxShadow: theme.shadows[4],
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'translateY(-5px)', boxShadow: theme.shadows[8] }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: { xs: 1.5, md: 2.5 },
              flexWrap: 'wrap'
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              {t('home_monitor_title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 950,
                color: 'secondary.main',
                mb: 0,
                fontSize: { xs: '1.45rem', sm: '1.6rem', md: '2rem', lg: '2.15rem' },
                lineHeight: 1.15,
                letterSpacing: { md: '0.3px' }
              }}
            >
              {t('home_monitor_subtitle')}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 400, lineHeight: 1.8, opacity: 0.95, mt: 2 }}>
            {t('home_monitor_desc')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Section 1 */}
          <Grid item xs={12}>
            <Box sx={{
              bgcolor: 'custom.surfaceSoft',
              borderRadius: '16px',
              p: 3,
              border: '1px solid',
              borderColor: 'custom.navbarBorder',
              transition: 'all 0.3s ease',
              '&:hover': { boxShadow: theme.shadows[6] }
            }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row-reverse' },
                  gap: 4,
                  alignItems: 'center'
                }}
              >
                {/* Main Image */}
                <Box sx={{ width: { xs: '100%', md: '45%' }, flexShrink: 0 }}>
                  <Box
                    component="img"
                    src={img1}
                    alt={t('home_monitor_title')}
                    onClick={() => openImageModal(img1)}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      cursor: 'zoom-in',
                      objectFit: 'cover',
                      borderRadius: '16px',
                      border: `2px solid ${theme.palette.custom?.navbarBorder || '#e0e0e0'}`,
                      boxShadow: theme.shadows[4],
                      transition: 'transform 0.4s ease',
                      '&:hover': { transform: 'scale(1.03)', boxShadow: theme.shadows[10] }
                    }}
                  />
                </Box>
                
                {/* Text Content */}
                <Box sx={{ width: { xs: '100%', md: '55%' }, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>
                    {t('home_monitor_subtitle')}
                  </Typography>
                  {featuresList1.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main', mt: 0.2, fontSize: 22 }} />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Section 2 */}
          <Grid item xs={12}>
            <Box sx={{
              bgcolor: 'custom.surfaceSoft',
              borderRadius: '16px',
              p: 3,
              border: '1px solid',
              borderColor: 'custom.navbarBorder',
              transition: 'all 0.3s ease',
              '&:hover': { boxShadow: theme.shadows[6] }
            }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row-reverse' },
                  gap: 4,
                  alignItems: 'center'
                }}
              >
                {/* Software/More Images */}
                <Box sx={{ width: { xs: '100%', md: '45%' }, flexShrink: 0 }}>
                  <Box
                    component="img"
                    src={img2}
                    alt={t('home_monitor_title')}
                    onClick={() => openImageModal(img2)}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      cursor: 'zoom-in',
                      objectFit: 'cover',
                      borderRadius: '16px',
                      border: `2px solid ${theme.palette.custom?.navbarBorder || '#e0e0e0'}`,
                      boxShadow: theme.shadows[4],
                      transition: 'transform 0.4s ease',
                      '&:hover': { transform: 'scale(1.03)', boxShadow: theme.shadows[10] }
                    }}
                  />
                </Box>

                {/* More Features Text */}
                <Box sx={{ width: { xs: '100%', md: '55%' }, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                    {t('nav_solutions')}
                  </Typography>
                  {featuresList2.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'primary.main', mt: 0.2, fontSize: 22 }} />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={Boolean(imageModalSrc)}
        onClose={closeImageModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: '16px',
            boxShadow: theme.shadows[10]
          }
        }}
      >
        <DialogContent sx={{ position: 'relative', p: 2.5 }}>
          <IconButton
            onClick={closeImageModal}
            aria-label="Close"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: 'rgba(0,0,0,0.35)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <CloseIcon />
          </IconButton>

          {imageModalSrc && (
            <Box
              component="img"
              src={imageModalSrc}
              alt="Modal Preview"
              sx={{
                width: 'auto',
                maxWidth: '95vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                display: 'block',
                mx: 'auto',
                borderRadius: '12px'
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
