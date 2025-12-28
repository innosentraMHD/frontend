import React, { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemText, ListItemButton,
  Collapse, Divider, Menu, MenuItem, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CubeIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from '../images/logo.webp';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLangMenuClose();
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const openMenu = Boolean(anchorEl);
  const openLangMenu = Boolean(langAnchorEl);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLangMenuClick = (event) => setLangAnchorEl(event.currentTarget);
  const handleLangMenuClose = () => setLangAnchorEl(null);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleNavigation = (path) => {
    handleMenuClose();
    setMobileOpen(false);
    
    if (path.startsWith('#') && location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const id = path.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 800);
    } else if (path.startsWith('#')) {
      const id = path.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <CubeIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h6" fontWeight="bold">INNOSENTRA</Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        <ListItem sx={{ mt: 2, p: 0, mb: 2 }}>
          <Button variant="contained" fullWidth onClick={() => handleNavigation('/contact')}>
            {t('nav_contact')}
          </Button>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setMobileLangOpen(!mobileLangOpen)}>
            <LanguageIcon sx={{ mr: 1, fontSize: 20 }} />
            <ListItemText primary={i18n.language === 'en' ? t('lang_en') : t('lang_de')} />
            {mobileLangOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={mobileLangOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => { changeLanguage('en'); setMobileOpen(false); }}>
              <ListItemText primary={t('lang_en')} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => { changeLanguage('de'); setMobileOpen(false); }}>
              <ListItemText primary={t('lang_de')} />
            </ListItemButton>
          </List>
        </Collapse>

        <Divider sx={{ my: 1 }} />

        <ListItemButton onClick={() => handleNavigation('#home')}><ListItemText primary={t('nav_home')} /></ListItemButton>
        <ListItemButton onClick={() => handleNavigation('#about')}><ListItemText primary={t('nav_about')} /></ListItemButton>
        
        <ListItemButton onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}>
          <ListItemText primary={t('nav_solutions')} />
          {mobileSolutionsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={mobileSolutionsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/retail-solutions')}><ListItemText primary={t('nav_supermarket')} /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/traffic')}><ListItemText primary={t('nav_traffic')} /></ListItemButton>
            {/* <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/security')}><ListItemText primary={t('nav_security')} /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/industry')}><ListItemText primary={t('nav_industry')} /></ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleNavigation('/construction')}><ListItemText primary={t('nav_construction')} /></ListItemButton> */}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={scrolled ? 4 : 1} sx={{ backgroundColor: 'white', color: 'text.primary', transition: 'all 0.3s ease' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => handleNavigation('/')}>
            <img src={logo} alt="Logo" style={{ height: 40, width: 'auto' }} />
            <Typography variant="h6" fontWeight="bold" sx={{color: 'text.secondary'}}>INNOSENTRA</Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                
                <Button onClick={handleLangMenuClick} startIcon={<LanguageIcon />} endIcon={<KeyboardArrowDownIcon />} sx={{ color: 'text.primary', fontWeight: 500, mx: 1 }}>
                  {i18n.language.toUpperCase()}
                </Button>
                <Menu anchorEl={langAnchorEl} open={openLangMenu} onClose={handleLangMenuClose}>
                  <MenuItem onClick={() => changeLanguage('en')}>{t('lang_en')}</MenuItem>
                  <MenuItem onClick={() => changeLanguage('de')}>{t('lang_de')}</MenuItem>
                </Menu>

                <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 24, alignSelf: 'center' }} />

                <Button onClick={handleMenuClick} endIcon={<KeyboardArrowDownIcon />} sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {t('nav_solutions')}
                </Button>
                <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
                  <MenuItem onClick={() => handleNavigation('/retail-solutions')}>{t('nav_supermarket')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/traffic')}>{t('nav_traffic')}</MenuItem>
                  {/* <MenuItem onClick={() => handleNavigation('/security')}>{t('nav_security')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/industry')}>{t('nav_industry')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/construction')}>{t('nav_construction')}</MenuItem> */}
                </Menu>

                <Button onClick={() => handleNavigation('#home')} sx={{ color: 'text.primary', fontWeight: 500 }}>{t('nav_home')}</Button>
                <Button onClick={() => handleNavigation('#about')} sx={{ color: 'text.primary', fontWeight: 500 }}>{t('nav_about')}</Button>
                <Button variant="outlined" onClick={() => handleNavigation('/contact')}>{t('nav_contact')}</Button>
              </Box>
            )}

            {isMobile && (
              <IconButton color="inherit" onClick={handleDrawerToggle}><MenuIcon /></IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>{drawer}</Drawer>
    </>
  );
};