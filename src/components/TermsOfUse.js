import React from 'react';
import { Container, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const TermsOfUse = () => {
  const { t, i18n} = useTranslation();
  const isAr = i18n.language === 'ar'; // تفعيل الترجمة

  return (
    <Container dir={isAr ? 'rtl' : 'ltr'} sx={{ py: 10, minHeight: '100vh',textAlign: { xs: 'center', md: isAr ? 'right' : 'left' } }}>
      <Typography variant="h4" gutterBottom>
        {t('terms_title')}
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6">
        {t('terms_agreement_header')}
      </Typography>
      <Typography paragraph>
        {t('terms_agreement_text')}
      </Typography>

      <Typography variant="h6">
        {t('terms_license_header')}
      </Typography>
      <Typography paragraph>
        {t('terms_license_text')}
      </Typography>
    </Container>
  );
};