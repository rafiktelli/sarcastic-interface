import React from 'react';

const Ring = ({ percent, size = 100, color }) => {
  const radius = size / 2 -5;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - ((percent-100) / 100) * circumference;
  const dasharray = `${circumference} ${circumference}`;
  const dashoffset = circumference - progress;

  return (
    <div style={{ width: size, height: size, position: 'relative', marginRight:10 }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', top: 0, left: 0,  }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f6f6f6"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeLinecap="round"
          fill="transparent"
        />
        <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central" className="percent-text" fill={color}  fontSize="26" fontWeight="500" fontFamily="Work Sans, sans-serif">
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default Ring;