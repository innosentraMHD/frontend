import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const SecurityInfo = () => {
  const { t } = useTranslation(); // تفعيل الترجمة

  return (
    <Container sx={{ py: 10, minHeight: '100vh' }}>
      <Typography variant="h3" color="error" gutterBottom>
        {t('security_info_title')}
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Box sx={{ bgcolor: '#f0f4f8', p: 3, borderRadius: 2 }}>
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