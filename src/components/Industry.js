import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import MediaGallery from './MediaGallery'; // تأكد من صحة مسار الملف

// استيراد الصور للمعرض (أبدل المسارات بالصحيحة لديك)
import img1 from '../images/i1.webp';
import img2 from '../images/i2.webp';
import img3 from '../images/i3.webp';

const MotionBox = motion(Box);

export const Industry = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // بيانات الصور للمعرض
  const industryMedia = [
    { type: 'image', image: img1, label: '' },
    { type: 'image', image: img2, label: '' },
    { type: 'image', image: img3, label: '' },
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}> {/* لمنع السكرول العرضي أثناء الانزلاق */}
      
      {/* القسم العلوي (Hero) */}
      <Box sx={{ 
        bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center',
        background: 'linear-gradient(135deg, #2d2d2d 0%, #11152f 100%)' 
      }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Industrial AI Vision
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, mt: 2 }}>
              Automated Quality Assurance for Modern Factories.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* قسم المحتوى والمعرض */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, // الموبايل تحت بعض، اللابتوب بجانب بعض
            alignItems: 'center', 
            gap: 8 
          }}>
            
            {/* قسم النصوص - ينسحب من اليسار */}
            <MotionBox 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '50%' } }}
            >
              <PrecisionManufacturingIcon sx={{ fontSize: 48, color: 'grey.700', mb: 2 }} />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                Automated Inspection
              </Typography>
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
            </MotionBox>

            {/* قسم المعرض - ينسحب من اليمين */}
            <MotionBox
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ width: { xs: '100%', md: '50%' } }}
            >
              <MediaGallery mediaItems={industryMedia} />
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};