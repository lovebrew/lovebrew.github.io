import React from 'react';
import './Badge.css';

import LoveLogoUrl from '@site/static/images/love-app-icon.svg';

interface VersionIndicatorProps {
  version: string;
}

const Badge: React.FC<VersionIndicatorProps> = ({ version }) => {
  return (
    <div className="version-indicator">
      <LoveLogoUrl className="love-icon" />
      <span className="version-text">LÖVE {version}</span>
    </div>
  );
};

export default Badge;
