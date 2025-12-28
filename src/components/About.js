import React from 'react';
import { 
  Container, 
  Typography, 
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import main from '../images/about2.webp';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Box id="about">
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column-reverse', md: 'row' }, 
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box
            component="img"
            src={main}
            alt="AI & Computer Vision"
            sx={{
              transition: 'transform 0.5s',
              '&:hover': { transform: 'scale(1.05)' },
              flex: 1,
              width: '100%',
              maxWidth: 500,
              height: 'auto',
              borderRadius: 2,
              objectFit: 'cover',
              mx: 'auto'
            }}
          />
          
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" sx={{ color: 'text.third', mb: 1 }}>
              {t('about_title')}
            </Typography>

            <Typography 
              variant="body1"  
              sx={{ mb: 0, fontSize: '1.1rem', color: 'text.secondary'}}
            >
              {t('about_desc')} {/* تم تعديل المفتاح هنا ليطابق ملف i18n.js الخاص بك */}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};