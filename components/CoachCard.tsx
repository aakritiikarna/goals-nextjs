'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
interface CoachCardProps {
  name: string;
  role: string;
  certification: string;
  bio: string;
  imageUrl?: string;
  index: number;
}
export function CoachCard({
  name,
  role,
  certification,
  bio,
  imageUrl,
  index
}: CoachCardProps) {
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
      className="bg-white border border-gray-200 overflow-hidden group">
      
      <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
        {imageUrl ?
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> :


        <div className="w-full h-full flex items-center justify-center bg-pitch/5">
            <span className="font-display text-6xl text-pitch/20">
              {name.charAt(0)}
            </span>
          </div>
        }
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-body text-xl font-bold text-pitch mb-1">
              {name}
            </h3>
            <p className="font-body text-sm text-turf font-semibold">{role}</p>
          </div>
          <div className="bg-floodlight/10 p-2 rounded">
            <Award className="w-5 h-5 text-floodlight" />
          </div>
        </div>
        <p className="font-mono text-xs text-ink/60 mb-3">{certification}</p>
        <p className="font-body text-sm text-ink/70 leading-relaxed">{bio}</p>
      </div>
    </motion.div>);

}