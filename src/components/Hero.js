import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة
import headImage from '../images/head.webp';


export const Hero = () => {
  const { t, i18n} = useTranslation();
  const isAr = i18n.language === 'ar';
   // تفعيل الترجمة

   

   const keyframesStyle = `
   @keyframes shinePass {
       0% {
           left: -100%;
           opacity: 0;
       }
       10% {
           opacity: 0.8;
       }
       40% {
           left: 120%;
           opacity: 0.8;
       }
       41%, 100% {
           left: 120%;
           opacity: 0;
       }
   }

   @keyframes attentionSequence {
       0% {
           filter: brightness(1) drop-shadow(0 0 0px rgba(0, 200, 255, 0));
           transform: scale(1);
       }
       20% {
           filter: brightness(1.5) drop-shadow(0 0 25px rgba(0, 200, 255, 0.8));
           transform: scale(1.08);
       }
       40% {
           filter: brightness(1.2) drop-shadow(0 0 15px rgba(0, 150, 255, 0.6));
           transform: scale(1);
       }
       60% {
           filter: brightness(1.6) drop-shadow(0 0 30px rgba(100, 255, 255, 0.9));
           transform: scale(1.05);
       }
       80% {
           filter: brightness(1.3) drop-shadow(0 0 18px rgba(0, 200, 255, 0.3));
           transform: scale(1);
       }
       100% {
           filter: brightness(1) drop-shadow(0 0 0px rgba(0, 200, 255, 0));
           transform: scale(1);
       }
   }

   @keyframes shadowFloat {
       0% {
           transform: translateY(0) scale(1);
           opacity: 0.7;
       }
       50% {
           transform: translateY(10px) scale(0.95);
           opacity: 0.4;
       }
       100% {
           transform: translateY(0) scale(1);
           opacity: 0.7;
       }
   }
`;

  return (
    <Box
      id="home"
      
      sx={{
        
        minHeight:{xs: '90vh', md: '70vh'},
        display: 'flex',
        alignItems: 'center',
        // backgroundImage: 'linear-gradient(to bottom, #81b8f8ff 0%,#f8f7f7ff 20%,#f8f7f7ff 50%, #ffffffff 100%)',
        color: 'text.primary',
        pb: {xs:4 , md:0},
        pt: 10,
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
          <Box
          dir={isAr ? 'rtl' : 'ltr'} 
          sx={{ 
              flex: 1, 
              // إذا كان عربي اجعل المحاذاة لليمين، وإلا لليسار
              textAlign: { xs: 'center', md: isAr ? 'right' : 'left' },
              maxWidth: {md: '600px'}
            }}>
            
            <Typography
              variant="h2"
              component="h2"
              sx={{ 
                mb: 3, 
                fontWeight: 700,
                fontSize: {xs: '2rem', md: '2.8rem', lg: '3rem'}
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
                fontSize: {xs: '1.1rem', md: '1.2rem', lg: '1.2rem'},
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
    sx={{
      position: 'relative',
      width: '70%',
      height: 'auto',
      zIndex: 2,
      borderRadius: '50%',
      
      overflow: 'hidden', /* مهم لحركة اللمعان */
    }}
  >
    <Box
      component="img"
      src={headImage}
      alt="AI Head"
      sx={{
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
        position: 'relative',
        zIndex: 1,
        animation: 'attentionSequence 4s ease-in-out 1',
      }}
    />
    
    {/* طبقة اللمعان المعدني */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '30%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.85), transparent)',
        transform: 'skewX(-20deg)',
        animation: 'shinePass 1.5s ease-in-out infinite 3s',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  </Box>
</Box>
</Box>

      </Container>
    </Box>
  );
};


