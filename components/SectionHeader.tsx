'use client';
import React from 'react';
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}
export function SectionHeader({
  title,
  subtitle,
  centered = false
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
        {title}
      </h2>
      {subtitle &&
      <p className="font-body text-lg text-ink/70 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      }
    </div>);

}