'use client';
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/9779841234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors"
      initial={{
        scale: 1
      }}
      animate={{
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }}
      aria-label="Contact us on WhatsApp">
      
      <MessageCircle className="w-6 h-6" />
    </motion.a>);

}