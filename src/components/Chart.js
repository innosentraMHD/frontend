import React from 'react';
import { 
  Container, 
  Box, 
  Typography 
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // استيراد motion
import onei from '../images/1.webp'; 
import twoi from '../images/2.webp';
import threei from '../images/3.webp';
import fouri from '../images/4.webp';
import fivei from '../images/5.webp';
import one from '../images/gfgdf.webp'; 
import three from '../images/fgder.webp'; 
import arrow from '../images/arrow.webp'; 

// إعداد مكون يدعم الحركة
const MotionBox = motion(Box);

export const Chart = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, src: onei, gridColumn: 'span 2', label: t('chart_item_1') },
    { id: 2, src: twoi, gridColumn: 'span 1', label: t('chart_item_2') },
    { id: 3, src: threei, gridColumn: 'span 1', label: t('chart_item_3') },
    { id: 4, src: fouri, gridColumn: 'span 1', label: t('chart_item_4') },
    { id: 5, src: fivei, gridColumn: 'span 1', label: t('chart_item_5') },
  ];

  const largeImageStyle = {
    width: '100%',
    maxWidth: { xs: '220px', md: '250px' }, 
    height: { xs: '180px', md: '220px' },
    borderRadius: 2,
    objectFit: 'contain',
    transition: 'transform 0.5s',
    '&:hover': { transform: 'scale(1.05)' },
  };

  const textStyle = {
    textAlign: 'center',
    maxWidth: '250px', 
  };

  const arrowImageStyle = {
    flex: 1,                 
    width: '100%',
    maxWidth: '80px',        
    height: 'auto',
    objectFit: 'contain',
    my: { xs: 2, md: 8 } 
  };

  const stepContainerStyle = {
    flex: 3,                 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  // إعدادات الحركة الموحدة (الظهور للأعلى)
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <Box id="about" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' }, 
            gap: { xs: 4, md: 2 }, 
          }}
        >
          {/* ======================= الخطوة 1: شبكة الصور ======================= */}
          <MotionBox sx={stepContainerStyle} {...fadeInUp}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '50px', 
                width: '100%',
                maxWidth: '250px', 
              }}
            >
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gridColumn: item.gridColumn,
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.label}
                    sx={{
                      width: '70%', 
                      height: 'auto', 
                      objectFit: 'cover', 
                      borderRadius: '6px',
                      display: 'block',
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      marginTop: '4px', 
                      fontWeight: 'bold', 
                      color: '#333',
                      fontSize: '0.7rem',
                      textAlign: 'center',
                      lineHeight: 1.2 
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </MotionBox>
          
          {/* ======================= الخطوة 2 ======================= */}
          <MotionBox 
            sx={stepContainerStyle} 
            {...fadeInUp} 
            transition={{ ...fadeInUp.transition, delay: 0.2 }} // تأخير بسيط
          >
            <Box component="img" src={one} alt="Server Processing" sx={largeImageStyle} />
            <Box sx={textStyle}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t('chart_step2_title')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                {t('chart_step2_desc')}
              </Typography>
            </Box>
          </MotionBox>

          {/* ======================= سهم 2 ======================= */}
          
          <Box 
            component="img" 
            src={arrow} 
            alt="Arrow" 
            sx={{
                ...arrowImageStyle,
                transform: { xs: 'rotate(90deg)', md: 'none' },
            }} 
          />

          {/* ======================= الخطوة 3 ======================= */}
          <MotionBox 
            sx={stepContainerStyle} 
            {...fadeInUp} 
            transition={{ ...fadeInUp.transition, delay: 0.4 }} // تأخير أطول قليلاً
          >
            <Box component="img" src={three} alt="Results Dashboard" sx={largeImageStyle} />
            <Box sx={textStyle}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t('chart_step3_title')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:1 , mb:2}}>
                {t('chart_step3_desc')}
              </Typography>
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};