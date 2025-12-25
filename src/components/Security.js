import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Security = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Box>
      <Box sx={{ 
        bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
        background: 'linear-gradient(135deg, #1a0a0a 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Advanced Surveillance
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
            Autonomous Security for Critical Infrastructure.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, alignItems: 'center', gap: 8 }}>
            <Box sx={{ width: '100%' }}>
              <SecurityIcon sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>Proactive Threat Detection</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Moving beyond passive recording to real-time incident prevention.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>CORE CAPABILITIES</Typography>
                  <List dense disablePadding>
                    {["Facial Recognition", "Intrusion Detection", "Abandoned Object Alerts", "Loitering Analysis"].map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>BUSINESS VALUE</Typography>
                  <List dense disablePadding>
                    {["24/7 Automated Guarding", "Reduced Response Time", "High-Precision Access"].map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} />
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