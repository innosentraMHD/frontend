import React from 'react';
import { 
  Container, 
  Box, 
  Typography 
} from '@mui/material';
import onei from '../images/1.png'; 
import twoi from '../images/2.png';
import threei from '../images/3.png';
import fouri from '../images/4.png';
import fivei from '../images/5.png';
import one from '../images/gfgdf.png'; // الصورة للخطوة الثانية
import two from '../images/ertfdg.webp'; // قد تكون غير مستخدمة ولكن تركتها حسب الاستيراد
import three from '../images/fgder.webp'; // الصورة للخطوة الثالثة
import arrow from '../images/arrow.webp'; 

export const Chart = () => {
  
  // --- بيانات الصور للشبكة (القسم الأول) ---
const items = [
    {
      id: 1,
      src: onei,
      gridColumn: 'span 2', 
      label: 'Vehicle & Plate Analysis', // النص للصورة 1 (مكان حرف o)
    },
    {
      id: 2,
      src: twoi,
      gridColumn: 'span 1', 
      label: ' Weapon Detection', // النص للصورة 2 (مكان حرف s)
    },
    {
      id: 3,
      src: threei,
      gridColumn: 'span 1',
      label: 'accident Detection', // النص للصورة 3 (مكان حرف x)
    },
    {
      id: 4,
      src: fouri,
      gridColumn: 'span 1',
      label: 'Fire Detection', // النص للصورة 4 (مكان حرف v)
    },
    {
      id: 5,
      src: fivei,
      gridColumn: 'span 1',
      label: 'Retail Analytics', // النص للصورة 5 (مكان حرف g)
    },
  ];

  // ستايل الصور الكبيرة في الخطوة 2 و 3
  const largeImageStyle = {
    width: '100%',
    maxWidth: { xs: '220px', md: '250px' }, 
    height: { xs: '180px', md: '220px' }, // الارتفاع المرجعي هو 220 بكسل
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
    my: { xs: 2, md: 8 } // مسافة عمودية في الموبايل، ومحاذاة في الوسط للشاشات الكبيرة
  };

  const stepContainerStyle = {
    flex: 3,                 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  return (
    <Box id="about" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        
        <Box 
          sx={{ 
            display: 'flex', 
            // الحفاظ على تنسيق الموبايل (عمودي) والديسك توب (أفقي)
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between',
            // محاذاة العناصر للأعلى لضمان استقامة البدايات
            alignItems: { xs: 'center', md: 'flex-start' }, 
            gap: { xs: 4, md: 2 }, 
          }}
        >

          {/* ======================= الخطوة 1: شبكة الصور ======================= */}
          <Box sx={stepContainerStyle}>
             
             {/* الكود القديم المعلق كما طلبته */}
             {/* <Box component="img" src={one} alt="Smart Cameras" sx={largeImageStyle} />
            <Box sx={textStyle}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Smart Cameras Count & Identify
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:1 , mb:2}}>
                Cameras use AI to count people and figure out details (adult/child, male/female, other KPIs ...).
              </Typography>
            </Box> */}

            {/* حاوية الشبكة */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '50px', // تقليل المسافة قليلاً لتتناسب المكونات مع الارتفاع
                width: '100%',
                maxWidth: '250px', // تحديد العرض ليطابق عرض الصور المجاورة (largeImageStyle maxWidth)
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
                    alt={`Image ${item.id}`}
                    sx={{
                      width: '70%', 
                      // التعديل الجوهري هنا:
                      // لجعل 3 صفوف من الصور توازي ارتفاع صورة واحدة (220px)
                      // 70px * 3 = 210px + المسافات = تقريباً 230px (متناسق جداً)
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
    textAlign: 'center', // لضمان توسيط النص
    lineHeight: 1.2    // لتحسين شكل النص إذا كان طويلاً قليلاً
  }}
>
  {item.label}
</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* ======================= سهم 1 (تمت إضافته) ======================= */}
        
          
          {/* ======================= الخطوة 2 ======================= */}
          <Box sx={stepContainerStyle}>
            <Box component="img" src={one} alt="Server Processing" sx={largeImageStyle} />
            <Box sx={textStyle}>
  <Typography variant="h6" fontWeight="bold" gutterBottom>
    AI Detection & Data Processing
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
    Smart cameras identify key events (vehicles, threats, demographics), while the secure server instantly collects and organizes this data for actionable insights.
  </Typography>
</Box>
          </Box>

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
          <Box sx={stepContainerStyle}>
            <Box component="img" src={three} alt="Results Dashboard" sx={largeImageStyle} />
            <Box sx={textStyle}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                View Easy-to-Read Results
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:1 , mb:2}}>
                See clear charts and numbers on your dashboard to gain insights and make better business decisions.
              </Typography>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};