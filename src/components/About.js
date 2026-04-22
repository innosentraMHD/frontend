import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion'; 
// استيراد الصور
import main from '../images/about1.webp';
import image2 from '../images/about2.webp'; // افترضت الأسماء
import image3 from '../images/about3.webp'; // افترضت الأسماء

const MotionBox = motion(Box);

export const About = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  
  // قائمة الصور
  const images = [main, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // منطق تغيير الصورة تلقائياً كل 1.2 ثانية
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 1200ms = 1.2s

    return () => clearInterval(timer); // تنظيف المؤقت عند إغلاق المكون
  }, [images.length]);

  return (
    <Box id="about" sx={{ py: 6, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column-reverse', md: 'row' }, 
            alignItems: 'center',
            gap: 4
          }}
        >
          {/* قسم الصورة مع تأثير التغيير السلس */}
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{ 
              flex: 1, 
              width: '100%', 
              position: 'relative', 
              height: { xs: 300, md: 400 }, // تحديد ارتفاع ثابت لمنع القفز أثناء التغيير
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <AnimatePresence mode="wait">
              <MotionBox
                key={currentIndex}
                component="img"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }} // سرعة الاختفاء والظهور
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: '100%',
                  borderRadius: 2,
                  objectFit: 'cover',
                  mx: 'auto',
                  display: 'block',
                  boxShadow: 3
                }}
              />
            </AnimatePresence>
          </MotionBox>
          
          {/* قسم النصوص */}
          <MotionBox 
            dir={isAr ? 'rtl' : 'ltr'} 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{ flex: 1, textAlign: { xs: 'center', md: isAr ? 'right' : 'left' } }}
          >
            <Typography variant="h4" sx={{ 
                color: 'text.primary', mb: 1, fontWeight: 700,
                fontSize: {xs: '1.7rem', md: '2.3rem', lg: '2.6rem'} 
            }}>
              {t('about_title')}
            </Typography>

            <Typography 
              variant="body1"  
              sx={{ 
                mb: 0, fontWeight: 400,
                fontSize: {xs: '1.1rem', md: '1.2rem', lg: '1.2rem'}, 
                color: 'text.secondary'
              }}
            >
              {t('about_desc')}
            </Typography>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};