import React from 'react';
import { 
  Container, 
  Typography, 
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // استيراد motion
import main from '../images/about2.webp';

// إعداد Box يدعم الحركة
const MotionBox = motion(Box);

export const About = () => {
  const { t } = useTranslation();

  return (
    <Box id="about" sx={{ py: 6, overflow: 'hidden' }}> {/* أضفنا overflow: hidden لمنع ظهور شريط التمرير العرضي أثناء الحركة */}
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column-reverse', md: 'row' }, 
            alignItems: 'center',
            gap: 4
          }}
        >
          {/* قسم الصورة - يتحرك من اليسار إلى اليمين */}
          <MotionBox
            initial={{ opacity: 0, x: -100 }} // يبدأ من اليسار
            whileInView={{ opacity: 1, x: 0 }} // ينزلق لمكانه الطبيعي
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{ flex: 1, width: '100%' }}
          >
            <Box
              component="img"
              src={main}
              alt="AI & Computer Vision"
              sx={{
                transition: 'transform 0.5s',
                '&:hover': { transform: 'scale(1.05)' },
                width: '100%',
                maxWidth: 500,
                height: 'auto',
                borderRadius: 2,
                objectFit: 'cover',
                mx: 'auto',
                display: 'block'
              }}
            />
          </MotionBox>
          
          {/* قسم النصوص - يتحرك من اليمين إلى اليسار */}
          <MotionBox 
            initial={{ opacity: 0, x: 100 }} // يبدأ من اليمين
            whileInView={{ opacity: 1, x: 0 }} // ينزلق لمكانه الطبيعي
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
          >
            <Typography variant="h3" sx={{ color: 'text.third', mb: 1 }}>
              {t('about_title')}
            </Typography>

            <Typography 
              variant="body1"  
              sx={{ mb: 0, fontSize: '1.1rem', color: 'text.secondary'}}
            >
              {t('about_desc')}
            </Typography>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};