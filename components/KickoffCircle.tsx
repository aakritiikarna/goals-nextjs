'use client';
import React from 'react';
interface KickoffCircleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rotation?: number;
}
export function KickoffCircle({
  children,
  className = '',
  size = 'md',
  rotation = 0
}: KickoffCircleProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96'
  };
  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`
      }}>
      
      <div className="absolute inset-0 rounded-full border-[1.5px] border-pitch" />
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {children}
      </div>
    </div>);

}