import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CubeIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import logo from '../images/logo.webp';
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  const handleNavigation = (path) => {
    handleMenuClose();
    setMobileOpen(false);
    
    if (path.startsWith('#') && location.pathname !== '/') {
      navigate('/');
      // زيادة وقت الانتظار لضمان تحميل الصفحة
      setTimeout(() => {
        const id = path.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // محاولة التمرير عدة مرات للتأكد
          let attempts = 0;
          const tryScroll = () => {
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            } else if (attempts < 5) {
              attempts++;
              setTimeout(tryScroll, 200);
            }
          };
          tryScroll();
        }
      }, 800); // زيادة وقت الانتظار إلى 800ms
    } else if (path.startsWith('#')) {
      const id = path.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // محتوى الـDrawer (للموبايل فقط)
  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <CubeIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h6" fontWeight="bold">
           INNOSENTRA
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        <ListItem button onClick={() => handleNavigation('#home')}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('#about')}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem sx={{ mt: 2, p: 0 }}>
          <Button 
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleNavigation('/contact')}
          >
            Contact
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky"
        elevation={scrolled ? 4 : 1}
        sx={{ backgroundColor: 'white', color: 'text.primary', transition: 'all 0.3s ease' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 4 } }}>
          {/* الشعار */}
          <Box 
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} 
            onClick={() => handleNavigation('/')}
          >
            <img src={logo} alt="Innosentra Logo" style={{ height: 40, width: 'auto' }} />
            <Typography variant="h6" fontWeight="bold" sx={{color: 'text.secondary', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            INNOSENTRA
            </Typography>
          </Box>
          
          {/* زر Solutions دائمًا */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              id="solutions-button"
              aria-controls={openMenu ? 'solutions-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleMenuClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ color: 'text.primary', fontWeight: 500, '&:hover': { color: 'primary.main' } }}
            >
              Solutions
            </Button>
            <Menu
              id="solutions-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleMenuClose}
              MenuListProps={{ 'aria-labelledby': 'solutions-button' }}
            >
              <MenuItem onClick={() =>{handleNavigation('/retail-solutions')} }>
                Retail Solutions
              </MenuItem>
              

            </Menu>
          </Box>

          {/* إذا كان موبايل → زر Drawer ، إذا كان ديسكتوب → باقي الروابط مباشرة */}
          {isMobile ? (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button 
                onClick={() => handleNavigation('#home')}
                sx={{ color: 'text.primary', fontWeight: 500, '&:hover': { color: 'primary.main' } }}
              >
                Home
              </Button>
              <Button 
                onClick={() => handleNavigation('#about')}
                sx={{ color: 'text.primary', fontWeight: 500, '&:hover': { color: 'primary.main' } }}
              >
                About
              </Button>
              <Button 
                variant="outlined"
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </Button>
            </Box>
          )}
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Drawer يظهر فقط في الموبايل */}
      {isMobile && (
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      )}
    </>
  );
};
