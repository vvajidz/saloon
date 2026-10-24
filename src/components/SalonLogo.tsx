'use client';

import React from 'react';
import { Scissors } from 'lucide-react';

interface SalonLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  centered?: boolean;
}

export const SalonLogo: React.FC<SalonLogoProps> = ({ 
  size = 'md', 
  showSubtitle = false,
  centered = false
}) => {
  const iconPixelSizes = {
    sm: 32,
    md: 44,
    lg: 56,
    xl: 68,
  };

  const titleSizes = {
    sm: 'text-sm tracking-wider',
    md: 'text-lg tracking-wider',
    lg: 'text-2xl tracking-widest',
    xl: 'text-3xl tracking-widest',
  };

  const dim = iconPixelSizes[size];

  return (
    <div className={`flex items-center gap-3 select-none ${centered ? 'flex-col justify-center text-center' : ''}`}>
      {/* Saloon Logo Icon */}
      <div 
        className="flex items-center justify-center rounded-xl bg-[#141a24] border border-[#d4af37]/40 shrink-0 shadow-sm"
        style={{ width: dim, height: dim }}
      >
        <Scissors 
          size={Math.round(dim * 0.52)} 
          className="text-[#d4af37]" 
        />
      </div>

      {/* Brand Typography */}
      <div>
        <div className={`flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
          <span className={`font-bold text-white uppercase tracking-wider ${titleSizes[size]}`}>
            SALOON
          </span>
        </div>

        {showSubtitle && (
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mt-0.5">
            SALOON SYSTEM
          </p>
        )}
      </div>
    </div>
  );
};


