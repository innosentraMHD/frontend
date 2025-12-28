import React from 'react';
import { Container, Typography, Box } from '@mui/material';
// تأكد من تعديل مسارات الصور التالية لتتناسب مع أسماء ملفاتك ومواقعها الحقيقية
import headImage from '../images/head.webp'; //  head.png
import writeImage from '../images/write.webp'; //  write.png

export const Hero = () => {

  // تعريف حركات الـ CSS (Keyframes) - لم تتغير
  const keyframesStyle = `
    /* حركة طفو خفيفة للرأس */
    @keyframes floatBob {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }

    /* حركة لمعان تمر فوق الصورة */
    @keyframes shinePass {
      0% { left: -100%; opacity: 0; }
      10% { opacity: 1; } /* يظهر اللمعان بسرعة */
      40% { left: 120%; opacity: 1; } /* يمر فوق الصورة */
      41% { opacity: 0; } /* يختفي */
      100% { left: 120%; opacity: 0; } /* انتظار حتى نهاية الـ 3 ثواني */
    }
  `;

  return (
    <Box
      id="home"
      sx={{
        minHeight:{xs: '70vh', md: '90vh'}, // زيادة الارتفاع قليلاً لاستيعاب المحتوى الجديد
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
        pb: 4,
        pt: 0, // إضافة مسافة علوية
        overflow: 'hidden'
      }}
    >
      {/* إضافة الـ Keyframes إلى الصفحة */}
      <style>{keyframesStyle}</style>

      <Container maxWidth="lg">
        
        {/* الحاوية الرئيسية التي تقسم الشاشة نصفين */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' }, // على الموبايل النصوص تحت الصور، على الديسكتوب النصوص يسار والصور يمين
            alignItems: 'center', // محاذاة عمودية في الوسط
            justifyContent: 'space-between',
            gap: {xs: 6, md: 8} // مسافة بين العمودين
          }}
        >
          {/* ================= العمود الأيسر: النصوص ================= */}
          <Box sx={{ 
              flex: 1, 
              textAlign: { xs: 'center', md: 'left' }, // توسيط على الموبايل، محاذاة لليسار على الديسكتوب
              maxWidth: {md: '600px'} // تحديد عرض أقصى للنصوص على الشاشات الكبيرة
            }}>
            
            {/* العنوان الرئيسي الكبير */}
             <Typography
              variant="h2" // تكبير الخط قليلاً ليناسب التصميم الجديد (يمكن إعادته لـ h3)
              component="h1"
              sx={{ 
                mb: 3, 
                fontWeight: 700,
                fontSize: {xs: '2rem', md: '3rem'} // تجاوب حجم الخط
              }}
              className="fade-in-up"
            >
              AI & Computer Vision Solutions for Data-Driven Decisions
            </Typography>

            {/* العنوان الفرعي الصغير */}
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary', // استخدام لون النص الثانوي من الثيم
                fontWeight: 400,
                fontSize: {xs: '1.1rem', md: '1.5rem'},
                lineHeight: 1.6
              }}
            >
              Turning visual data into actionable business insights with cutting-edge technology.
            </Typography>
          </Box>


          {/* ================= العمود الأيمن: الصور (لم يتغير داخلياً) ================= */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '100%',
              maxWidth: 500, // الحجم الأقصى لحاوية الصور
            }}
          >
            {/* 1. صورة الرأس (Head Image) مع أنيميشن الحركة */}
            <Box
              component="img"
              src={headImage}
              alt="AI Head"
              sx={{
                width: '55%', // تعديل طفيف للحجم ليتناسب مع التصميم الجانبي
                height: 'auto',
                objectFit: 'contain',
                zIndex: 2,
                marginBottom: '-25px', // زيادة التداخل قليلاً
                animation: 'floatBob 4s ease-in-out infinite',
                filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.2))' // إضافة ظل خفيف للرأس لزيادة العمق
              }}
            />

            {/* 2. حاوية صورة الكتابة (Write Image Container) مع تأثير اللمعان */}
            <Box
               sx={{
                 position: 'relative',
                 width: '100%',
                 overflow: 'hidden',
                 borderRadius: 3, // زيادة التدوير قليلاً
                 boxShadow: 3, // إضافة ظل للصورة السفلية
                 '&::after': {
                   content: '""',
                   position: 'absolute',
                   top: 0,
                   left: '-100%',
                   width: '50%',
                   height: '100%',
                   background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)', // زيادة سطوع اللمعان قليلاً
                   transform: 'skewX(-25deg)',
                   animation: 'shinePass 3s infinite',
                 }
               }}
            >
              {/* صورة الكتابة الثابتة */}
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