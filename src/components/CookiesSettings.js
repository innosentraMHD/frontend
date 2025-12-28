import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const CookiesSettings = () => {
  const { t } = useTranslation(); // تفعيل الترجمة

  return (
    <Container sx={{ py: 10, minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom>
        {t('cookies_title')}
      </Typography>
      <Divider sx={{ mb: 4 }} />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" color="secondary">
          {t('cookies_what_is_title')}
        </Typography>
        <Typography paragraph>
          {t('cookies_what_is_desc')}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">
          {t('cookies_essential_title')}
        </Typography>
        <Typography paragraph>
          {t('cookies_essential_desc')}
        </Typography>

        <Typography variant="h6">
          {t('cookies_analytical_title')}
        </Typography>
        <Typography paragraph>
          {t('cookies_analytical_desc')}
        </Typography>
      </Box>
    </Container>
  );
};