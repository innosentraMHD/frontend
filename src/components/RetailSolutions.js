import React ,{ useEffect, useRef, Suspense } from 'react';


import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Button,

} from '@mui/material';

import MediaGallery from './MediaGallery';
import dashboard1 from '../images/dashboard1_.webp'; 
import dashboard2 from '../images/dashboard2_.webp'; 
import AnalyticsIcon from '@mui/icons-material/Analytics';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import idimg from '../images/id.webp'; 
import mapimg from '../images/journy.webp'; 
import frontimg from '../images/front.webp'; 
import faceimg from '../images/face.webp'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import heatmapImg from '../images/heatmap.webp'; 
import videoThumb from '../videos/ReID.webm'; 
import videoThumb2 from '../videos/output_tracked4.webm'; 
import videoThumb3 from '../videos/mivolo_yolo8fp_only_person.webm'; 
import tracking_customer_on_map from '../videos/tracking_customer_on_map.webm';
import mobileDashboardVideo from '../videos/Screenrecorder-application.mp4';


// --- 1. مكون المعرض (The Gallery) ---

const useLazyVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = video.dataset.src;
          }
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return videoRef;
};



// ... (مكون FeatureSection يبقى كما هو دون تغيير) ...
// --- 2. مكون القسم (Feature Section) ---
const FeatureSection = ({ title, subtitle, features, importance, mediaItems, icon, reverse }) => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
          alignItems: 'center',
          gap: { xs: 6, md: 8 }
        }}>
          {/* النصوص */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.5rem' }, lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}>
              {subtitle}
            </Typography>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom color="primary" sx={{ textTransform: 'uppercase', mb: 2 }}>
                  What We Analyze
                </Typography>
                <List dense disablePadding>
                  {features.map((item, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleOutlineIcon sx={{color:"text.primary"}}  fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500,color:"text.secondary" }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom color="secondary" sx={{ textTransform: 'uppercase', mb: 2 }}>
                  Why It Matters
                </Typography>
                <List dense disablePadding>
                  {importance.map((item, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleOutlineIcon color="secondary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500,color:"text.secondary" }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>

          {/* المعرض */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <MediaGallery mediaItems={mediaItems} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// --- 3. المكون الرئيسي ---
export const RetailSolutions = () => {
  
const videoRef = useLazyVideo();
  

  return (
    <Box>
      {/* Hero Header */}
      <Box sx={{ 
        bgcolor: '#0f1220', 
        color: 'white', 
        py: { xs: 8, md: 12 }, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #11152f 0%, #1b1f4a 100%)'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Innosentra Retail Analytics
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, maxWidth: '800px', mx: 'auto' }}>
            Turn Your Security Cameras into Your Smartest Business Consultant.
          </Typography>
        </Container>
      </Box>

      <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}><CircularProgress /></Box>}>
        
        {/* Section 1 */}
        <FeatureSection
          icon={<AnalyticsIcon fontSize="large" />}
          title="Smart Customer Analytics"
          subtitle="Understand who your customers are and how they behave in real time."
          features={[
            "Customer counting by time and day",
            "Adult vs. Child classification",
            "Gender Analysis",
            "Average dwell time",
            "Window engagement before entry",
            "Emotion Analysis",
          ]}
          importance={[
            "Optimize staffing and operations",
            "Know what attracts your customers",
            "Understand real customer interest"
          ]}
          mediaItems={[
            // --- التعديل هنا: إضافة صورة كعنصر نائب في البداية ---
   
            // --- نهاية التعديل ---
            { 
              type: 'video', 
              label: 'People Counting & ReID ', 
              image: idimg,
              videoSrc: videoThumb
            },
            { 
              type: 'video', 
              label: 'Tracking Example', 
              image: frontimg,
              videoSrc: videoThumb2
            },
            { 
              type: 'video', 
              label: 'Gender & Age Classification', 
              image: faceimg,
              videoSrc: videoThumb3
            },
          ]}
        />

        {/* Section 2 (Reversed) - باقي الأقسام كما هي */}
        <FeatureSection
          reverse
          icon={<VisibilityIcon fontSize="large" />}
          title="Customer journey & Heatmaps"
          subtitle="See your store through your customers' eyes."
          features={[
            "Hot & Cold Zone Heatmaps",
            "High dwell-time areas",
            "Multi-camera customer journeys"
          ]}
          importance={[
            "Improve store layout",
            "Optimize product placement",
            "Increase engagement and conversion"
          ]}
          mediaItems={[
            { 
              type: 'image', 
              label: 'Store Heatmap', 
              image: heatmapImg
            },
            { 
              type: 'video', 
              label: 'Customer journey', 
              image: mapimg,
              videoSrc: tracking_customer_on_map
            },
          ]}
        />

        {/* Section 3 */}
        <FeatureSection
          icon={<DashboardCustomizeIcon fontSize="large" />}
          title="Analytics Dashboard"
          subtitle="All insights delivered through a clean, intuitive dashboard."
          features={[
            "Real-time and historical KPIs",
            "Traffic trends and comparisons",
            "Visual charts and heatmaps",
            "See all your data in one place"
          ]}
          importance={[
            "Faster decision-making",
            "Clear performance tracking",
            "Data everyone can understand"
          ]}
          mediaItems={[
            { type: 'image', label: 'Main Dashboard', image: dashboard1 },
            { type: 'image', label: 'Report View', image: dashboard2 },
          ]}
        />

      </Suspense>
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fafafa' }}>
  <Container maxWidth="lg">
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 6, md: 10 },
      }}
    >
      <Typography
          variant="h4"
          fontWeight={800}
          gutterBottom
          sx={{ display: { xs: 'block', md: 'none' }, mb: 3, textAlign: 'center' }}
        >
          Analytics Anywhere, Anytime, using mobile app
        </Typography>
      {/* Video */}
  <Box
  sx={{
    width: { xs: '100%', md: '40%' },
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <Box
    sx={{
      width: '280px',
      height: '640px',          // ⬅️ أطول بوضوح
      borderRadius: '28px',
      overflow: 'hidden',
     
      bgcolor: 'black',
    }}
  >
    <video
      ref={videoRef}
      data-src={mobileDashboardVideo}
      controls
      playsInline
      muted
      preload="metadata"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        cursor: 'pointer',
      }}
    />
  </Box>
</Box>



      {/* Text */}
      <Box sx={{ width: { xs: '100%', md: '60%' } }}>
        {/* Mobile title appears before video */}
        

        {/* Desktop title */}
        <Typography
          variant="h3"
          fontWeight={800}
          gutterBottom
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          Analytics Anywhere, Anytime, using mobile app
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
          Access all your retail insights directly from your mobile device.
          The application focuses on clear data visualization without complexity,
          delivering only what matters.
        </Typography>

        <List dense disablePadding>
          {[
            'Live customer counts and trends',
            'Heatmaps and journey visualizations',
            'Map-based movement tracking',
            'Simple KPI views for quick decisions',
            'Optimized for managers on the move',
          ].map((item, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500,
                  color: 'text.secondary',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </Container>
</Box>

      {/* CTA Footer */}
      
    </Box>
  );
};