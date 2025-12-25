import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Industry = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Box>
      <Box sx={{ 
        bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
        background: 'linear-gradient(135deg, #2d2d2d 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Industrial AI Vision
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
            Automated Quality Assurance for Modern Factories.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 8 }}>
            <Box sx={{ width: '100%' }}>
              <PrecisionManufacturingIcon sx={{ fontSize: 48, color: 'grey.700', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>Automated Inspection</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Achieving zero-defect manufacturing with high-speed visual processing.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>WHAT WE ANALYZE</Typography>
                  <List dense disablePadding>
                    {["Surface Defect Detection", "Assembly Verification", "Packaging Accuracy", "Product Sorting"].map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>WHY IT MATTERS</Typography>
                  <List dense disablePadding>
                    {["Reduced Production Waste", "Increased Throughput", "Lower Operational Costs"].map((text, i) => (
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