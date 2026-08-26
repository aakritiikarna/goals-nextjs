'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import { MapPin, Shield, Dumbbell } from 'lucide-react';
export default function Facilities() {
  const facilities = [
  {
    icon: MapPin,
    title: 'Training Ground',
    description:
    'Well-maintained grass pitch with proper markings, goals, and spectator area. Located in Kathmandu with easy access for families across the valley.',
    imageUrl:
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop'
  },
  {
    icon: Dumbbell,
    title: 'Equipment & Resources',
    description:
    'Professional training equipment including cones, agility ladders, training bibs, and age-appropriate footballs. All players receive academy kit.',
    imageUrl:
    'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop'
  },
  {
    icon: Shield,
    title: 'Safety & First Aid',
    description:
    'Trained first aid staff on-site during all sessions. Comprehensive insurance coverage for all registered players.',
    imageUrl:
    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop'
  }];

  const galleryImages = [
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&h=600&fit=crop'];

  return (
    <div className="bg-touchline">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Where We Train"
            subtitle="Professional facilities designed to support player development from grassroots through competitive levels." />
          
        </div>
      </section>

      {/* Facilities Features */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={facility.title}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                      <img
                        src={facility.imageUrl}
                        alt={facility.title}
                        className="w-full h-full object-cover" />
                      
                    </div>
                  </div>

                  <div
                    className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    
                    <div className="bg-pitch/5 w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-pitch" />
                    </div>
                    <h3 className="font-display text-3xl uppercase tracking-tight text-pitch mb-4">
                      {facility.title}
                    </h3>
                    <p className="font-body text-lg text-ink/70 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              Gallery
            </h2>
            <p className="font-body text-lg text-ink/70 max-w-3xl mx-auto">
              Training sessions, matches, and moments from our journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05
              }}
              className="aspect-[4/3] overflow-hidden group cursor-pointer">
              
                <img
                src={src}
                alt={`GFAC gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-pitch text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Visit Our Facilities
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Interested in facility visits or partnership opportunities? Get in
            touch with us.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-floodlight text-ink px-10 py-5 font-body font-bold text-xl hover:bg-white transition-all hover:-translate-y-1 shadow-lg">
            
            Contact Us
          </Link>
        </div>
      </section>
    </div>);

}