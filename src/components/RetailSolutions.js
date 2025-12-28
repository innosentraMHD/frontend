import React, { useEffect, useRef, Suspense } from 'react';
import {
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, CircularProgress
} from '@mui/material';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة
import videoThumbnail from '../images/y.webp'
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

const useLazyVideo = () => {
  const videoRef = useRef(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.src) video.src = video.dataset.src;
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return videoRef;
};

const FeatureSection = ({ title, subtitle, features, importance, mediaItems, icon, reverse }) => {
  const { t } = useTranslation();
  return (
    <Box id='retail' sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' }, alignItems: 'center', gap: { xs: 6, md: 8 } }}>
          <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.5rem' }, lineHeight: 1.2 }}>{title}</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}>{subtitle}</Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom color="primary" sx={{ textTransform: 'uppercase', mb: 2 }}>{t('retail_analyze_label')}</Typography>
                <List dense disablePadding>
                  {features.map((item, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon sx={{color:"text.primary"}} fontSize="small" /></ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color:"text.secondary" }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom color="secondary" sx={{ textTransform: 'uppercase', mb: 2 }}>{t('retail_matters_label')}</Typography>
                <List dense disablePadding>
                  {importance.map((item, index) => (
                    <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="secondary" fontSize="small" /></ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color:"text.secondary" }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MediaGallery mediaItems={mediaItems} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const RetailSolutions = () => {
  const { t } = useTranslation();
  const videoRef = useLazyVideo();

  return (
    <Box>
      {/* Hero Header */}
      <Box sx={{ bgcolor: '#0f1220', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center', background: 'linear-gradient(135deg, #11152f 0%, #1b1f4a 100%)' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            {t('retail_hero_title')}
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, maxWidth: '800px', mx: 'auto' }}>
            {t('retail_hero_subtitle')}
          </Typography>
        </Container>
      </Box>

      <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}><CircularProgress /></Box>}>
        {/* Section 1 */}
        <FeatureSection
          icon={<AnalyticsIcon fontSize="large" />}
          title={t('retail_s1_title')}
          subtitle={t('retail_s1_subtitle')}
          features={[t('retail_s1_f1'), t('retail_s1_f2'), t('retail_s1_f3'), t('retail_s1_f4'), t('retail_s1_f5'), t('retail_s1_f6')]}
          importance={[t('retail_s1_i1'), t('retail_s1_i2'), t('retail_s1_i3')]}
          mediaItems={[
            { type: 'video', label: t('gallery_reid'), image: idimg, videoSrc: videoThumb },
            { type: 'video', label: t('gallery_tracking'), image: frontimg, videoSrc: videoThumb2 },
            { type: 'video', label: t('gallery_gender'), image: faceimg, videoSrc: videoThumb3 },
          ]}
        />

        {/* Section 2 */}
        <FeatureSection
          reverse
          icon={<VisibilityIcon fontSize="large" />}
          title={t('retail_s2_title')}
          subtitle={t('retail_s2_subtitle')}
          features={[t('retail_s2_f1'), t('retail_s2_f2'), t('retail_s2_f3')]}
          importance={[t('retail_s2_i1'), t('retail_s2_i2'), t('retail_s2_i3')]}
          mediaItems={[
            { type: 'image', label: t('gallery_heatmap'), image: heatmapImg },
            { type: 'video', label: t('gallery_journey'), image: mapimg, videoSrc: tracking_customer_on_map },
          ]}
        />

        {/* Section 3 */}
        <FeatureSection
          icon={<DashboardCustomizeIcon fontSize="large" />}
          title={t('retail_s3_title')}
          subtitle={t('retail_s3_subtitle')}
          features={[t('retail_s3_f1'), t('retail_s3_f2'), t('retail_s3_f3'), t('retail_s3_f4')]}
          importance={[t('retail_s3_i1'), t('retail_s3_i2'), t('retail_s3_i3')]}
          mediaItems={[
            { type: 'image', label: t('gallery_dashboard'), image: dashboard1 },
            { type: 'image', label: t('gallery_report'), image: dashboard2 },
          ]}
        />
      </Suspense>

      {/* Mobile App Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 6, md: 10 } }}>
            <Typography variant="h4" fontWeight={800} gutterBottom sx={{ display: { xs: 'block', md: 'none' }, mb: 3, textAlign: 'center' }}>
              {t('retail_mobile_title')}
            </Typography>
            <Box sx={{ width: { xs: '100%', md: '40%' }, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '280px', height: '640px', borderRadius: '28px', border: 'solid 4px black', overflow: 'hidden', bgcolor: 'black' }}>
                <video ref={videoRef} data-src={mobileDashboardVideo} controls playsInline poster={videoThumbnail} muted preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} />
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '60%' } }}>
              <Typography variant="h3" fontWeight={800} gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                {t('retail_mobile_title')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                {t('retail_mobile_desc')}
              </Typography>
              <List dense disablePadding>
                {[t('retail_mobile_f1'), t('retail_mobile_f2'), t('retail_mobile_f3'), t('retail_mobile_f4'), t('retail_mobile_f5')].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleOutlineIcon color="primary" fontSize="small" /></ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500, color: 'text.secondary' }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};