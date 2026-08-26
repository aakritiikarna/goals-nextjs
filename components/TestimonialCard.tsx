'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}
export function TestimonialCard({
  quote,
  author,
  role,
  index
}: TestimonialCardProps) {
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
      className="bg-white border border-gray-200 p-8 relative">
      
      <Quote className="w-8 h-8 text-floodlight/20 mb-4" />
      <p className="font-body text-base text-ink/80 leading-relaxed mb-6">
        "{quote}"
      </p>
      <div>
        <p className="font-body font-semibold text-pitch">{author}</p>
        <p className="font-body text-sm text-ink/60">{role}</p>
      </div>
    </motion.div>);

}