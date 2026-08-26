'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface ProgramCardProps {
  ageRange: string;
  name: string;
  focus: string;
  sessionsPerWeek?: string;
  index: number;
}
export function ProgramCard({
  ageRange,
  name,
  focus,
  sessionsPerWeek,
  index
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay: index * 0.08
      }}
      className="bg-white border border-gray-200 p-6 relative group hover:shadow-lg transition-shadow">
      
      {/* Age Badge */}
      <div className="absolute top-6 right-6 bg-pitch text-white px-3 py-1.5 font-mono text-xs font-bold">
        {ageRange}
      </div>

      <div className="pr-20">
        <h3 className="font-display text-2xl uppercase tracking-tight text-pitch mb-3">
          {name}
        </h3>
        <p className="font-body text-sm text-ink/70 leading-relaxed mb-4">
          {focus}
        </p>
        {sessionsPerWeek &&
        <p className="font-mono text-xs text-turf mb-4">{sessionsPerWeek}</p>
        }
        <Link
          href="/join-now"
          className="inline-block font-body text-sm font-semibold text-pitch hover:text-floodlight transition-colors group-hover:underline">
          
          Enquire →
        </Link>
      </div>
    </motion.div>);

}