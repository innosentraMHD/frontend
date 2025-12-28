import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const Footer = () => {
  const { t } = useTranslation(); // تفعيل الترجمة
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer"
      sx={{ 
        backgroundColor: 'background.dark',
        color: 'white',
        py: 4,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; {currentYear} Innosentra Solutions. {t('footer_all_rights')}
        </Typography>
      </Container>
    </Box>
  );
};