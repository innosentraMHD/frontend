import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const LegalMenu = ({ direction = 'column', color }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // تفعيل الترجمة
  const theme = useTheme();
  const textColor = color || theme.palette.text.secondary;

  // نقل المصفوفة للداخل لترجمة النصوص برمجياً
  const menuItems = [
    { text: t('legal_site_info'), path: '/site-info' },
    { text: t('legal_privacy'), path: '/privacy-policy' },
    { text: t('legal_cookies'), path: '/cookies' },
    { text: t('legal_terms'), path: '/terms' },
    { text: t('legal_security'), path: '/security-info' },
  ];

  return (
    <Box>
      <List sx={{ display: 'flex', flexDirection: direction, alignItems: 'center', gap: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ width: 'auto' }}>
            <ListItemButton 
              onClick={() => { window.scrollTo(0, 0); navigate(item.path); }}
              sx={{ '&:hover': { backgroundColor: alpha(theme.palette.custom.whitePure, 0.05) } ,p:0 }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  color: textColor, 
                  fontWeight: 200,
                  fontSize: { xs: '1rem', md: '1rem', lg: '1rem' }, 
                  textAlign: 'center',
                  letterSpacing: '0.5px',
                  
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};