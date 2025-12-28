import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة

export const LegalMenu = ({ direction = 'column', color = '#0c3478ff' }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // تفعيل الترجمة

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
              sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  color: color, 
                  fontWeight: 300,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }, 
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