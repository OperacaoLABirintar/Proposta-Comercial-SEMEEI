
import React from 'react';
import LabirintarLogo from './LabirintarLogo';

const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <LabirintarLogo withTagline={false} />
      </div>
    </header>
  );
};

export default Header;
