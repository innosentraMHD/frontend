import React from 'react';
import { Container, Typography, Box, Divider, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const SiteInfo = () => {
  const { t, i18n} = useTranslation();
  const isAr = i18n.language === 'ar'; // تفعيل الترجمة

  return (
    <Container sx={{ py: 10, minHeight: '100vh' }}>
      <Paper dir={isAr ? 'rtl' : 'ltr'}  
      elevation={0} 
      sx={{ p: 4, bgcolor: 'custom.surfaceSoft',textAlign: { xs: 'center', md: isAr ? 'right' : 'left' }, }}>
        <Typography variant="h4" color="primary" gutterBottom>
          {t('site_info_title')}
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Typography variant="h5" gutterBottom>
          {t('site_info_about_title')}
        </Typography>
        <Typography paragraph>
          {t('site_info_about_text')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {t('site_info_ownership_title')}
        </Typography>
        <Typography paragraph>
          {t('site_info_ownership_text')}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {t('site_info_tech_title')}
        </Typography>
        <Typography paragraph>
          {t('site_info_tech_text')}
        </Typography>
      </Paper>
    </Container>
  );
};