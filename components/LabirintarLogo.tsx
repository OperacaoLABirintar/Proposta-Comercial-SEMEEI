
import React from 'react';

interface LabirintarLogoProps {
  className?: string;
  withTagline?: boolean;
}

const LabirintarLogo: React.FC<LabirintarLogoProps> = ({ className, withTagline = true }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center">
        <span className="font-slab text-3xl font-bold tracking-wider">
          <span style={{ color: '#ff595a' }}>LAB</span><span style={{ color: '#ffa400' }}>IRINTAR</span>
        </span>
      </div>
      {withTagline && (
        <p className="font-sans text-xs text-[#BF917F] mt-[-2px]"></p>
      )}
    </div>
  );
};

export default LabirintarLogo;
