import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const LegalMenu = ({ direction = 'column', color = '#b0bec5' }) => { // تم تغيير اللون الافتراضي للرمادي
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Site Info', path: '/site-info' },
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Cookies Settings', path: '/cookies' },
    { text: 'Terms of Use', path: '/terms' },
    { text: 'Security', path: '/security-info' },
  ];

  return (
    <Box>
      <List sx={{ display: 'flex', flexDirection: direction, alignItems: 'center', gap: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ width: 'auto' }}>
            <ListItemButton 
              onClick={() => navigate(item.path)}
              sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  color: color, // استخدام اللون الرمادي هنا
                  fontWeight: 300,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }, // تكبير الخط قليلاً ليشبه الصورة
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