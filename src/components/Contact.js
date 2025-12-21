import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button,
  TextField,
  Grid,
  Paper,
  Alert,
  CircularProgress,
  Snackbar,
  Fade,
  Stack,
  alpha
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as yup from 'yup';

// تم تحديث الألوان لتناسب الوضع الداكن
const COLOR_PALETTE = {
  primary: '#3B82F6', // أزرق ساطع قليلاً
  primaryLight: '#60A5FA',
  primaryDark: '#1E40AF',
  secondary: '#F97316',
  secondaryLight: '#FB923C',
  secondaryDark: '#EA580C',
  // لا نحتاج لتعريف background هنا لأننا سنستخدم background.dark من الثيم
  paper: 'transparent', // نجعل الورقة شفافة لتأخذ لون الخلفية
  textPrimary: '#FFFFFF', // أبيض
  textSecondary: 'rgba(255, 255, 255, 0.7)' // رمادي فاتح
};

// White background + black text FOR INPUTS ONLY
const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    color: '#000000',
    '& fieldset': {
      borderColor: '#000000',
    },
    '&:hover fieldset': {
      borderColor: '#000000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000000',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#000000',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#000000',
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#000000',
    opacity: 1,
  },
};


export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const validationSchema = yup.object({
    name: yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: yup.string().email('Enter a valid email address').required('Email is required'),
    phone: yup.string().matches(/^[+]?[0-9\s\-()]{10,}$/, 'Please enter a valid phone number'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
  });

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', message: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await emailjs.send(
          'service_u4q9l2k',
          'template_3xj3lz5',
          {
            to_name: 'RetailTech Team',
            from_name: values.name,
            from_email: values.email,
            phone: values.phone || 'Not provided',
            message: values.message,
            reply_to: values.email,
            date: new Date().toLocaleDateString('en-US'),
          },
          'xkZqAFq0QEaeUIYpd'
        );
        setSnackbarMessage('Message sent successfully! We will contact you soon.');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } catch (error) {
        setSnackbarMessage('Failed to send message. Please try again.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    },
  });

  const contactInfo = [
    { icon: <PhoneIcon />, title: 'Phone', details: ['0049 163 977 0059'], color: COLOR_PALETTE.primary },
    { icon: <EmailIcon />, title: 'Email', details: ['manar.bakro@innosentra.com'], color: COLOR_PALETTE.secondary }
  ];

  return (
    <Box id="contact" sx={{ 
      bgcolor: 'background.dark', // استخدام لون الثيم كما طلبت
      py: { xs: 4, sm: 6, md: 8 },
      position: 'relative',
      overflow: 'hidden',
      color: 'white' // توحيد لون النص العام للأبيض
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <Box  sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6 }  }}>
         
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 1,
            textAlign: 'center',
            color: 'white', // تعديل للأبيض
            '&::after': {
              content: '""',
              display: 'block',
              width: 60,
              height: 4,
              backgroundColor: 'secondary.main',
              margin: '10px auto 30px',
            }
          }}
        >
          Contact Us
        </Typography>
        
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 6, 
            textAlign: 'center',
            fontWeight: 400,
            color: COLOR_PALETTE.textSecondary, // تعديل للرمادي الفاتح
            maxWidth: '700px',
            mx: 'auto'
          }}
        >
          Have a question or a project in mind? 
          Let’s discuss how Innosentra can help you turn visual data into actionable insights. 
        </Typography>
          
        </Box>

        {/* Integrated Contact Section */}
        <Paper elevation={0} sx={{ 
          borderRadius: { xs: 2, sm: 3, md: 4 }, 
          overflow: 'hidden',
          background: 'transparent', // خلفية شفافة لتوحيد اللون مع background.dark
          boxShadow: 'none', // إلغاء الظل
          border: `1px solid ${alpha('#fff', 0.1)}` // حدود خفيفة جداً للتمييز بدلاً من الظل
        }}>
          <Box container sx={{ display: 'flex' , flexDirection:{ xs:'column', md:'row'} }}>
            
            {/* Left Side - Contact Info */}
            <Grid item xs={12} md={5} sx={{ 
              background: alpha(COLOR_PALETTE.primary, 0.05), // خلفية خفيفة جداً للتمييز
              p: { xs: 3, sm: 4, md: 5 }
            }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 700, 
                color: 'text.white', // أبيض
                bgcolor: 'transparent', 
                mb: 3,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}>
                Contact Information
              </Typography>
              
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <Box key={index} sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    p: { xs: 2, sm: 3 },
                    borderRadius: 3,
                    bgcolor: 'transparent', // خلفية شفافة
                    boxShadow: 'none', // إلغاء الظل
                    border: `1px solid ${alpha(info.color, 0.2)}`, // حدود ملونة خفيفة
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-3px)', bgcolor: alpha(info.color, 0.05) }
                  }}>
                    <Box sx={{ 
                      mr: { xs: 2, sm: 3 },
                      color: info.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: { xs: 45, sm: 50 },
                      height: { xs: 45, sm: 50 },
                      borderRadius: 3,
                      backgroundColor: alpha(info.color, 0.1),
                      fontSize: { xs: '1.5rem', sm: '1.75rem' }
                    }}>
                      {info.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ 
                        fontWeight: 600, 
                        color: 'white', // أبيض
                        bgcolor: 'transparent',
                        mb: 1,
                        fontSize: { xs: '1rem', sm: '1.1rem' }
                      }}>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body1" sx={{ 
                          color: COLOR_PALETTE.textSecondary, 
                          fontWeight: 500,
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          mb: 0.5,
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            backgroundColor: info.color, 
                            mr: 1.5 
                          }} />
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={7} sx={{ p: { xs: 3, sm: 4, md: 5 }, bgcolor:'background.default' }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 700, 
                color: 'text.primary', // أبيض
                mb: 3,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}>
                Send Us a Message
              </Typography>
              
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ display:'flex', flexDirection:'column'  }} container spacing={3}>
                  {/* السطر الأول: 3 مدخلات متجاورة */}
                  <Box sx={{ display:'flex', flexDirection:{xs:"column",md:"row"}, }}>
                    <Grid item xs={12} md={4} sx={{mx:1 ,mb:1}}>
                      <TextField
                        fullWidth
                        name="name"
                        label="Full Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        disabled={loading}
                  
                        size="small"
                       
                        sx={textFieldStyle} // تطبيق ستايل الوضع الداكن
                      />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mx:1 ,mb:1}}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        disabled={loading}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        size="small"
                        sx={textFieldStyle} // تطبيق ستايل الوضع الداكن
                      />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mx:1 ,mb:1}}>
                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone Number (Optional)"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone || 'Optional'}
                        disabled={loading}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        size="small"
                        sx={textFieldStyle} // تطبيق ستايل الوضع الداكن
                      />
                    </Grid>
                  </Box>
                  
                  {/* السطر الثاني: الرسالة ثلثين والزر ثلث */}
                  <Grid item xs={12} md={8} sx={{mb:2}} >
                    <TextField
                      fullWidth
                      name="message"
                      label="Your Message"
                      multiline
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                      disabled={loading}
                      placeholder="Tell us about your project or inquiry..."
                      InputProps={{ sx: { borderRadius: 2 } }}
                      size="small"
                      sx={textFieldStyle} // تطبيق ستايل الوضع الداكن
                    />
                  </Grid>

                  <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading || !formik.isValid}
                      startIcon={loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : <SendIcon />}
                      sx={{
                        background: `linear-gradient(135deg, ${COLOR_PALETTE.primary} 0%, ${COLOR_PALETTE.primaryDark} 100%)`,
                        color: 'white',
                        py: { xs: 1.2, sm: 1.5 },
                        px: { xs: 4, sm: 6 },
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                        fontWeight: 600,
                        borderRadius: 2,
                        minWidth: { xs: '180px', sm: '200px' },
                        boxShadow: 'none', // إلغاء الظل
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: `linear-gradient(135deg, ${COLOR_PALETTE.primaryDark} 0%, ${COLOR_PALETTE.primary} 100%)`,
                          transform: 'translateY(-2px)',
                        },
                        '&:disabled': {
                          background: COLOR_PALETTE.textSecondary,
                          transform: 'none',
                          boxShadow: 'none',
                        }
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Box>
              </form>

              <Box sx={{ 
                mt: 4, 
                pt: 3, 
                borderTop: `1px solid ${alpha('#fff', 0.1)}`, // حدود بيضاء خفيفة
                textAlign: 'center' 
              }}>
                <Typography variant="body2" sx={{ 
                  color: 'text.secondary',
                  fontSize: { xs: '0.8rem', sm: '0.85rem' }
                }}>
                  <Box component="span" sx={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: '50%', 
                    backgroundColor: COLOR_PALETTE.secondary,
                    display: 'inline-block',
                    mr: 1,
                    verticalAlign: 'middle'
                  }} />
                  Your information is secure and confidential
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Paper>

        {/* Snackbar */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setOpenSnackbar(false)} 
            severity={snackbarSeverity}
            sx={{ 
              width: '100%', 
              borderRadius: 2,
              boxShadow: 'none', // إلغاء الظل
              border: '1px solid rgba(255,255,255,0.1)',
              fontWeight: 500
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};