import React from 'react';
import { Container, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const PrivacyPolicy = () => {
  const { t, i18n} = useTranslation();
  const isAr = i18n.language === 'ar'; // تفعيل الترجمة

  return (
    <Container 
        dir={isAr ? 'rtl' : 'ltr'} 

sx={{ py: 10, minHeight: '100vh', textAlign: { xs: 'center', md: isAr ? 'right' : 'left' }, py: 10, minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        {t('privacy_title')}
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6">
        {t('privacy_collection_title')}
      </Typography>
      <Typography paragraph>
        {t('privacy_collection_text')}
      </Typography>

      <Typography variant="h6">
        {t('privacy_usage_title')}
      </Typography>
      <Typography paragraph>
        {t('privacy_usage_text')}
      </Typography>
    </Container>
  );
};