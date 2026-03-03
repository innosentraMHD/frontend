import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import headImage from '../images/head.webp';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const keyframesStyle = `
    /* الأنميشن الخاص بالشريط المتحرك */
  @keyframes marquee {
  0% { transform: translateX(-100%); } /* يبدأ من خارج الشاشة تماماً من جهة اليسار */
  100% { transform: translateX(100%); } /* ينتهي خارج الشاشة تماماً من جهة اليمين */
}

    @keyframes shinePass {
        0% { left: -100%; opacity: 0; }
        10% { opacity: 0.8; }
        40% { left: 120%; opacity: 0.8; }
        41%, 100% { left: 120%; opacity: 0; }
    }

    @keyframes attentionSequence {
        0% { filter: brightness(1); transform: scale(1); }
        20% { filter: brightness(1.5); transform: scale(1.08); }
        100% { filter: brightness(1); transform: scale(1); }
    }
  `;

  return (
    <Box
      id="home"
      sx={{
        // تم تغيير position إلى relative لضمان تموضع الشريط في الأسفل بدقة
        position: 'relative', 
        minHeight: { xs: '90vh', md: '70vh' },
        display: 'flex',
        flexDirection: 'column', // للسماح للعناصر بالترتيب عمودياً
        justifyContent: 'center',
        color: 'text.primary',
        pb: isAr ? 8 : { xs: 4, md: 0 }, // ترك مساحة للشريط إذا كان مفعلاً
        pt: 10,
        overflow: 'hidden',
        backgroundColor: '#f8f9fa' // اختياري لتمييز الخلفية
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
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* العمود الأيسر: النصوص */}
          <Box
            dir={isAr ? 'rtl' : 'ltr'}
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: isAr ? 'right' : 'left' },
              maxWidth: { md: '600px' },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.8rem', lg: '3rem' },
              }}
            >
              {t('hero_title')}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.2rem' },
                lineHeight: 1.6,
              }}
            >
              {t('hero_subtitle')}
            </Typography>
          </Box>

          {/* العمود الأيمن: الصورة */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <Box sx={{ position: 'relative', width: '70%', borderRadius: '50%', overflow: 'hidden' }}>
              <Box
                component="img"
                src={headImage}
                alt="AI Head"
                sx={{
                  width: '100%',
                  height: 'auto',
                  animation: 'attentionSequence 4s ease-in-out 1',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '30%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
                  animation: 'shinePass 1.5s ease-in-out infinite 3s',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* --- الشريط المتحرك: يظهر فقط في حال كانت اللغة عربية --- */}
    {isAr && (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      bgcolor: 'primary.main',
      color: 'white',
      py: { xs: 0.8, md: 1.2 }, // متجاوب مع حجم الشاشة
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      zIndex: 10,
      boxShadow: '0px -2px 10px rgba(0,0,0,0.1)' // ظل خفيف لتمييز الشريط
    }}
  >
    <Box
      sx={{
        display: 'inline-block', // مهم جداً لجعل الحاوية بحجم النص
        paddingLeft: '100%', // يضمن أن النص يبدأ بالظهور بعد مرور مسافة كاملة
        animation: 'marquee 15s linear infinite', // سرعة ثابتة
        willChange: 'transform', // لتحسين الأداء على المتصفحات
      }}
    >
      <Typography
        variant="body1"
        dir="rtl"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.2rem', md: '1.4rem' }, // حجم خط متناسب مع الموبايل
          display: 'inline-block'
        }}
      >
        يمكنكم تجربة خدماتنا لمدة أسبوع واحد مجاناً، لا تفوتوا الفرصة!
      </Typography>
    </Box>
  </Box>
)}
    </Box>
  );
};