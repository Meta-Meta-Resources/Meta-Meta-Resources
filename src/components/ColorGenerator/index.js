import React from 'react';

const ColorGenerator = ({color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0.5rem',
      width: '5rem',
      height: '1rem',
      display: 'inline-block',
      verticalAlign: 'middle',
    }}>
  </span>
);

export default ColorGenerator;
