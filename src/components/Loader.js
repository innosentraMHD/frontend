import React from 'react';
import logo from '../images/logo.webp';

export const Loader = ({ progress }) => {
  const pct = Math.round(progress);
  const containerStyle = {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg, #fff)',
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
    background: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  };

  const barInner = {
    height: '100%',
    width: `${pct}%`,
    background: '#00d8fe',
   
    transition: 'width 300ms ease',
  };

  const textStyle = { fontSize: 14, color: '#333' };

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
