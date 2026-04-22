import React from 'react';
import { useTheme } from '@mui/material/styles';
import logo from '../images/logo.webp';

export const Loader = ({ progress }) => {
  const theme = useTheme();
  const pct = Math.round(progress);
  const containerStyle = {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    zIndex: 9999,
    flexDirection: 'column',
  };

  const logoStyle = {
    width: 120,
    height: 120,
    objectFit: 'contain',
    marginBottom: 20,
  };

  const barOuter = {
    width: 220,
    height: 8,
    background: theme.palette.custom.navbarBorder,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  };

  const barInner = {
    height: '100%',
    width: `${pct}%`,
    background: theme.palette.secondary.main,
   
    transition: 'width 300ms ease',
  };

  const textStyle = { fontSize: 14, color: theme.palette.text.secondary };

  return (
    <div style={containerStyle} aria-live="polite">
      <img src={logo} alt="logo" style={logoStyle} />
      <div style={textStyle}>{pct}%</div>
      <div style={barOuter}>
        <div style={barInner} />
      </div>
    </div>
  );
};

export default Loader;
