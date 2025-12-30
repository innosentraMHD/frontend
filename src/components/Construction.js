import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import MediaGallery from './MediaGallery'; // تأكد من استيراد الكومبوننت

// استيراد صور المعرض
import constr1 from '../images/c1.webp';
import constr2 from '../images/c2.webp';

const MotionBox = motion(Box);

export const Construction = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // إعداد الصور للمعرض
  const safetyMedia = [
    { type: 'image', image: constr1, label: '' },
    { type: 'image', image: constr2, label: '' },
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* القسم العلوي (Hero) */}
      <Box sx={{ 
        bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
        background: 'linear-gradient(135deg, #3d2b0a 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Construction Safety
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
              Protecting Workforce with Vision AI.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* قسم المحتوى والمعرض */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row-reverse' }, // النصوص يمين والصور يسار في اللابتوب
            alignItems: 'center', 
            gap: 8 
          }}>
            
            {/* قسم النصوص - ينسحب من اليمين (لأنه في جهة اليمين) */}
            <MotionBox 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '50%' } }}
            >
              <EngineeringIcon sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>Safety Compliance</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Ensuring on-site safety protocols are followed automatically.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="primary" sx={{ mb: 2 }}>SITE ANALYSIS</Typography>
                  <List dense disablePadding>
                    {["PPE (Helmet/Vest) Detection", "Hazard Zone Monitoring", "Worker Fall Alerts", "Machine Interaction"].map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" color="secondary" sx={{ mb: 2 }}>BENEFITS</Typography>
                  <List dense disablePadding>
                    {["Fewer On-site Accidents", "Legal Compliance", "Remote Project Oversight"].map((text, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </MotionBox>

            {/* قسم المعرض - ينسحب من اليسار */}
            <MotionBox
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '50%' } }}
            >
              <MediaGallery mediaItems={safetyMedia} />
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};