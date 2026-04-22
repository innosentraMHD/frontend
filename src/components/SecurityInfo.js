import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const SecurityInfo = () => {
  const { t, i18n} = useTranslation();
  const isAr = i18n.language === 'ar'; // تفعيل الترجمة

  return (
    <Container dir={isAr ? 'rtl' : 'ltr'} 
    sx={{ py: 10, minHeight: '100vh', textAlign: { xs: 'center', md: isAr ? 'right' : 'left' } }}>
      <Typography variant="h4" color="error" gutterBottom>
        {t('security_info_title')}
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Box sx={{ bgcolor: 'custom.surfaceLight', p: 3, borderRadius: 2 }}>
        <Typography variant="h6">
          {t('security_info_protection_header')}
        </Typography>
        <Typography paragraph>
          {t('security_info_protection_text')}
        </Typography>
      </Box>
    </Container>
  );
};