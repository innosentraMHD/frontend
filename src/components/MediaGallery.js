import React ,{ useState, useRef } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import PauseIcon from '@mui/icons-material/Pause';

// استيراد الصور




const MediaGallery = ({ mediaItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  // نستخدم مصفوفة مراجع لعناصر الفيديو
  const videoRefs = useRef([]);
  const controlsTimeoutRef = useRef(null);

  // دالة لإخفاء أدوات التحكم تلقائياً
  const startControlsTimer = () => {
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  const activateMedia = (index) => {
    // 1. إيقاف أي فيديو يعمل حالياً قبل الانتقال
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0; // إعادة الفيديو للبداية عند تركه
      }
    });

    setSelectedIndex(index);
    const newItem = mediaItems[index];

    if (newItem.type === 'video') {
      setIsLoading(true);
      // تأخير بسيط لضمان استجابة المتصفح (خاصة Safari)
      setTimeout(() => {
        const currentVideo = videoRefs.current[index];
        if (currentVideo) {
          // محاولة التشغيل ومعالجة الـ Promise
          currentVideo.play()
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
              startControlsTimer();
            })
            .catch((err) => {
              console.warn("Autoplay prevented or failed:", err);
              setIsLoading(false);
              setIsPlaying(false);
            });
        }
      }, 100);
    } else {
      setIsPlaying(false);
      setIsLoading(false);
      setShowControls(true);
    }
  };

  const handleMainScreenClick = () => {
    const currentVideo = videoRefs.current[selectedIndex];
    if (mediaItems[selectedIndex].type === 'video' && currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play();
        setIsPlaying(true);
        startControlsTimer();
      } else {
        currentVideo.pause();
        setIsPlaying(false);
        setShowControls(true);
      }
    }
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* الشاشة الرئيسية */}
      <Paper 
        elevation={6}
        onClick={handleMainScreenClick}
        onMouseMove={() => { setShowControls(true); if(isPlaying) startControlsTimer(); }}
        sx={{ 
          position: 'relative',
          width: '100%',
          height: { xs: 250, sm: 350, md: 450 },
          borderRadius: 4,
          overflow: 'hidden',
          bgcolor: '#ffffffff',
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: mediaItems[selectedIndex].type === 'video' ? 'pointer' : 'default'
        }}
      >
        {mediaItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              height: '100%',
              display: index === selectedIndex ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {item.type === 'image' ? (
              <Box
                component="img"
                src={item.image}
                alt={item.label}
                sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            ) : (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.videoSrc}
                poster={item.image}
                // --- إعدادات Safari الحرجة ---
                playsInline
                webkit-playsinline="true"
                muted={false} // غيّرها لـ true إذا أردت ضمان التشغيل التلقائي 100%
                preload="auto"
                // ---------------------------
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => setIsLoading(false)}
                onEnded={() => { setIsPlaying(false); setShowControls(true); }}
              />
            )}
          </Box>
        ))}

        {/* مؤشر التحميل */}
        {isLoading && (
          <Box sx={{ position: 'absolute', zIndex: 3 }}>
            <CircularProgress color="secondary" size={60} thickness={4} />
          </Box>
        )}

        {/* أيقونات التشغيل/الإيقاف الوسطى */}
        {!isLoading && mediaItems[selectedIndex].type === 'video' && (showControls || !isPlaying) && (
          <Box
            sx={{
              position: 'absolute',
              color: 'white',
              zIndex: 2,
              pointerEvents: 'none',
              transition: 'opacity 0.3s'
            }}
          >
            {isPlaying ? 
              <PauseIcon sx={{ fontSize: 90, opacity: 0.6 }} /> : 
              <PlayCircleOutlineIcon sx={{ fontSize: 90, opacity: 0.8 }} />
            }
          </Box>
        )}

        {/* الشريط السفلي للعنوان */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            p: 2,
            color: 'white',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            opacity: showControls ? 1 : 0,
            transition: 'opacity 0.5s'
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {mediaItems[selectedIndex].label}
          </Typography>
        </Box>
      </Paper>

      {/* شريط المصغرات */}
      <Box 
        sx={{ 
          display: 'flex', gap: 2, width: '100%', overflowX: 'auto', pb: 1,
          justifyContent: 'center',
          '&::-webkit-scrollbar': { height: '6px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: '#ddd', borderRadius: '3px' }
        }}
      >
        {mediaItems.map((item, index) => (
          <Box
            key={index}
            onMouseEnter={() => activateMedia(index)}
            onClick={() => activateMedia(index)}
            sx={{
              width: 90, height: 65, borderRadius: 2, overflow: 'hidden', cursor: 'pointer',
              border: index === selectedIndex ? '3px solid #e67e22' : '2px solid transparent',
              opacity: index === selectedIndex ? 1 : 0.6,
              transform: index === selectedIndex ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.2s ease', flexShrink: 0, position: 'relative'
            }}
          >
            <Box component="img" src={item.image} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {item.type === 'video' && (
              <PlayCircleOutlineIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: 24 }} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MediaGallery;