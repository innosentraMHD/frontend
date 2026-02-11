import { createTheme, responsiveFontSizes } from '@mui/material';

const colors = {
  white: '#ffffff',
  gray: '#000000',
  black: '#000000',
  blue: 'rgb(10,60,90)' ,
  orange: '#00d8fe',
};

let theme = createTheme({
  palette: {
    primary: { main: colors.blue, dark: 'rgb(10,70,80)' },
    secondary: { main: colors.orange, dark: '#000000' },
    background: { default: colors.white, gray: colors.gray, dark:  'rgb(10,60,90)' },
    text: { primary: colors.blue, secondary: colors.black, third: colors.orange, white: colors.white },
  },
  typography: {
    // التعديل الوحيد هنا: إضافة خط "Cairo" في البداية لدعم العربية
    fontFamily: '"SN Pro","Cairo", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          // بما أننا لا نستخدم القلب التلقائي، سنستخدم الخصائص المنطقية للأمان
          paddingLeft: '16px',
          paddingRight: '16px',
        }
      }
    }
  },
});

theme = responsiveFontSizes(theme);
export { theme };