import React, { useState, useRef } from 'react';
import { Box, Container, Typography, CardContent, useTheme, useMediaQuery, alpha } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SecurityIcon from '@mui/icons-material/Security';
import FactoryIcon from '@mui/icons-material/Factory';
import ConstructionIcon from '@mui/icons-material/Construction';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

const MotionBox = motion(Box);

export const SolutionsList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const glowColor = theme.palette.secondary.main;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [activeStep, setActiveStep] = useState(0);
  const mobileScrollRef = useRef(null);

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const width = mobileScrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveStep(index);
    }
  };

  const items = [
    { key: 'retail', title: t('solution_retail_title'), desc: t('solution_retail_desc'), icon: <StorefrontIcon />, path: '/supermarket' },
    { key: 'traffic', title: t('solution_traffic_title'), desc: t('solution_traffic_desc'), icon: <DirectionsCarIcon />, path: '/traffic' },
    { key: 'security', title: t('solution_security_title'), desc: t('solution_security_desc'), icon: <SecurityIcon />, path: '/security' },
    { key: 'industry', title: t('solution_industry_title'), desc: t('solution_industry_desc'), icon: <FactoryIcon />, path: '/industry' },
    { key: 'construction', title: t('solution_construction_title'), desc: t('solution_construction_desc'), icon: <ConstructionIcon />, path: '/construction' },
    { key: 'data-recovery', title: t('dataRecovery.title'), desc: t('dataRecovery.shortDescription'), icon: <DataSaverOnIcon />, path: '/solutions/data-recovery' },
  ];

  const renderCard = (item, index, isForMarquee = false) => (
  <Box 
    key={item.key} 
    sx={{ 
      display: 'flex', // يضمن أن الحاوية تتصرف كـ Flex container
      height: 'auto', 
      minHeight: '100%', // يجبر الكرت على أخذ أقصى ارتفاع متاح في السطر
      minWidth: isForMarquee ? { md: '30vw', lg: '30vw' } : { xs: '100%', sm: '50%', md: '30%' },
      width: isForMarquee ? { md: '30vw', lg: '30vw' } : '100%',
      px: isForMarquee ? 2 : 1,
      py: 2, 
      backgroundColor: 'background.dark',
    }}
  >
    <MotionBox
      onClick={() => navigate(item.path)}
      // ... باقي الخصائص (initial, whileInView, etc.)
      
        initial={{ opacity: 0}}
        
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
sx={{
          // التعديل الجوهري هنا
          display: 'flex',
          flexDirection: 'column',
          flex: 1, // يجعل الكرت يتمدد ليملأ حاوية الـ Box الخارجية
          width: '100%',
          minHeight: 180,
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          p: 3,
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            borderColor: glowColor,
            boxShadow: `0 0 20px ${glowColor}`,
            transform: 'translateY(-5px)',
            '& .icon-box': {
              color:'background.dark',
              backgroundColor: glowColor,
              boxShadow: `0 0 15px ${glowColor}`,
            }
          },
        }}
      >
        <CardContent sx={{ 
          width: '100%', 
          // flexGrow يضمن أن المحتوى يملأ الكرت بالكامل
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          p: 0,
          '&:last-child': { pb: 0 }
        }}>
          {/* حاوية الأيقونة - خلفية زرقاء وأيقونة بيضاء */}
          <Box 
            className="icon-box"
            sx={{ 
              color: 'white', // لون الأيقونة أبيض
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: '50%',
              backgroundColor: 'primary.main', // لون الخلفية Blue من الثيم
              transition: 'all 0.3s ease',
              '& .MuiSvgIcon-root': { fontSize: '2.2rem' }
            }}
          >
            {item.icon}
          </Box>
          
          <Typography
            variant="h6"
            sx={{
              fontSize: {xs: '1.3rem', md: '1.2rem', lg: '1.1rem'},
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 1.5,
              color: 'text.primary',
              minHeight: '2.6em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {item.title}
          </Typography>
          
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              fontSize: {xs: '1.2rem', md: '1rem', lg: '1rem'} , 
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              flexGrow: 1,
            }}
          >
            {item.desc}
          </Typography>
          
          <Box sx={{ mt: 2, pt: 2, width: '100%',  }}>
            <Typography
              variant="caption"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                fontSize: {xs: '1.3rem', md: '1.2rem', lg: '1rem'} ,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                transition: '0.3s',
                '&:hover': { color: glowColor }
              }}
            >
              {t('learn_more') }
            </Typography>
          </Box>
        </CardContent>
      </MotionBox>
    </Box>
  );

  return (
    <Box id="solutions-overview" sx={{ py: 8,  backgroundColor: 'background.dark', overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{px:0}}>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            mb: 6, 
            fontSize: { xs: '2rem', sm: '2.2rem', md: '2.8rem' },
            fontWeight: 800,
            color: 'text.white'
          }}
        >
          {t('solutions_section_title')}
        </Typography>

        {(isMobile || isTablet) ? (
          <Box>
            <Box
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              sx={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                gap: 0,
                pb: 3,
              
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
              }}
            >
              {items.map((item, index) => renderCard(item, index, false))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
              {items.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    if (mobileScrollRef.current) {
                      const width = mobileScrollRef.current.offsetWidth;
                      mobileScrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
                    }
                  }}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: activeStep === index ? glowColor : 'action.disabled',
                    boxShadow: activeStep === index ? `0 0 10px ${glowColor}` : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </Box>
        ) : (
          <Box 
            sx={{ 
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              direction={theme.direction === 'rtl' ? 'right' : 'left'}
            >
              {items.map((item, index) => renderCard(item, index, true))}
            </Marquee>
          </Box>
        )}
      </Container>
    </Box>
  );
};