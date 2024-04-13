import React from 'react';

function Logo({ width = '20px', height = '40px' }) {
  const logoStyle = {
    maxHeight: height,
    minHeight: height,
    maxWidth: width,
    minWidth: width,
  };

  return (
    <img src="./logo.png" alt="Logo" style={logoStyle} />
  );
}

export default Logo;
