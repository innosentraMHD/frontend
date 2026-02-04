import { createTheme, responsiveFontSizes } from '@mui/material';

const colors = {
  white: '#ffffff',
  gray: '#f8f9fa',
  black: '#2c3e50',
  blue: '#0056b3',
  orange: '#e67e22',
};

let theme = createTheme({
  palette: {
    primary: { main: colors.blue, dark: '#013878ff' },
    secondary: { main: colors.orange, dark: '#d35400' },
    background: { default: colors.white, gray: colors.gray, dark: '#013878ff' },
    text: { primary: colors.blue, secondary: colors.black, third: colors.orange, white: colors.white },
  },
  typography: {
    // التعديل الوحيد هنا: إضافة خط "Cairo" في البداية لدعم العربية
    fontFamily: '"Cairo", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
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