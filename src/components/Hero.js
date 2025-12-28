import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة
import headImage from '../images/head.webp';
import writeImage from '../images/write.webp';

export const Hero = () => {
  const { t } = useTranslation(); // تفعيل الترجمة

  const keyframesStyle = `
    @keyframes floatBob {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }

    @keyframes shinePass {
      0% { left: -100%; opacity: 0; }
      10% { opacity: 1; }
      40% { left: 120%; opacity: 1; }
      41% { opacity: 0; }
      100% { left: 120%; opacity: 0; }
    }
  `;

  return (
    <Box
      id="home"
      sx={{
        minHeight:{xs: '70vh', md: '90vh'},
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
        pb: 4,
        pt: 2,
        overflow: 'hidden'
      }}
    >
      <style>{keyframesStyle}</style>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: {xs: 6, md: 8}
          }}
        >
          {/* العمود الأيسر: النصوص */}
          <Box sx={{ 
              flex: 1, 
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: {md: '600px'}
            }}>
            
            <Typography
              variant="h2"
              component="h2"
              sx={{ 
                mb: 3, 
                fontWeight: 700,
                fontSize: {xs: '2rem', md: '3rem'}
              }}
              className="fade-in-up"
            >
              {t('hero_title')} {/* العنوان المترجم */}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: {xs: '1.1rem', md: '1.5rem'},
                lineHeight: 1.6
              }}
            >
              {t('hero_subtitle')} {/* العنوان الفرعي المترجم */}
            </Typography>
          </Box>

          {/* العمود الأيمن: الصور (بقي كما هو تماماً) */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Box
              component="img"
              src={headImage}
              alt="AI Head"
              sx={{
                width: '55%',
                height: 'auto',
                objectFit: 'contain',
                zIndex: 2,
                marginBottom: '-25px',
                animation: 'floatBob 4s ease-in-out infinite',
              }}
            />

            <Box
               sx={{
                 position: 'relative',
                 width: '100%',
                 overflow: 'hidden',
                 borderRadius: 3,
                 boxShadow: 3,
                 '&::after': {
                   content: '""',
                   position: 'absolute',
                   top: 0,
                   left: '-100%',
                   width: '50%',
                   height: '100%',
                   background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)',
                   transform: 'skewX(-25deg)',
                   animation: 'shinePass 3s infinite',
                 }
               }}
            >
              <Box
                component="img"
                src={writeImage}
                alt="Writing"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};