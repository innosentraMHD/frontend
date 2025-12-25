import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import TrafficIcon from '@mui/icons-material/Traffic';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Traffic = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    "Vehicle Counting & Classification",
    "Automatic Number Plate Recognition (ANPR)",
    "Traffic Density & Congestion Mapping",
    "Wrong-way Driving Detection",
    "Pedestrian Flow Analytics"
  ];

  const importance = [
    "Reduce Urban Congestion",
    "Enhance Road Safety",
    "Data-driven Infrastructure Planning"
  ];

  return (
    <Box>
      {/* Hero Header */}
      <Box sx={{ 
        bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
        background: 'linear-gradient(135deg, #0a2e38 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Smart Traffic Management
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
            Real-time Urban Mobility Intelligence.
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 8 }}>
            <Box sx={{ width: { xs: '100%', md: '60%' } }}>
              <TrafficIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>Urban Flow Analytics</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Transforming city cameras into sensors for intelligent transport systems.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>WHAT WE ANALYZE</Typography>
                  <List dense disablePadding>
                    {features.map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>WHY IT MATTERS</Typography>
                  <List dense disablePadding>
                    {importance.map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};