import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SecurityIcon from '@mui/icons-material/Security';
import FactoryIcon from '@mui/icons-material/Factory';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
export const SolutionsList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    { key: 'retail', title: t('solution_retail_title'), desc: t('solution_retail_desc'), icon: <StorefrontIcon fontSize="large" />, path: '/retail-solutions' },
    { key: 'traffic', title: t('solution_traffic_title'), desc: t('solution_traffic_desc'), icon: <DirectionsCarIcon fontSize="large" />, path: '/traffic' },
    { key: 'security', title: t('solution_security_title'), desc: t('solution_security_desc'), icon: <SecurityIcon fontSize="large" />, path: '/security' },
    { key: 'industry', title: t('solution_industry_title'), desc: t('solution_industry_desc'), icon: <FactoryIcon fontSize="large" />, path: '/industry' },
    { key: 'construction', title: t('solution_construction_title'), desc: t('solution_construction_desc'), icon: <ConstructionIcon fontSize="large" />, path: '/construction' },
  ];

  
  return (
    <Box id="solutions-overview" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mb: 4, fontSize: { xs: '1.6rem', md: '2.4rem', lg: '2.8rem' } }}>
          {t('solutions_section_title')}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {items.map((item, index) => (
            <MotionBox
              key={item.key}
              onClick={() => navigate(item.path)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay:index * 0.12 }}
              sx={{
                width: { xs: '100%', sm: '48%', md: '32%', lg: '20%' },
                minHeight: 140,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                p: 2,
                '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
              }}
            >
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 1 }}>{item.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.02rem', lg: '1.08rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, fontSize: { xs: '0.88rem', md: '0.95rem' }, lineHeight: 1.4, overflowWrap: 'break-word' }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
