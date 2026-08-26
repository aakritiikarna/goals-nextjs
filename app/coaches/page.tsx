'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import { CoachCard } from '../../components/CoachCard';
export default function Coaches() {
  const coaches = [
  {
    name: '[Head Coach Name]',
    role: 'Head Coach & Technical Director',
    certification: 'UEFA B License',
    bio: 'Over 15 years of coaching experience with a focus on youth development and competitive football.'
  },
  {
    name: '[Assistant Coach Name]',
    role: 'Assistant Coach - Elite Program',
    certification: 'AFC C License',
    bio: 'Former professional player with extensive experience in tactical training and match preparation.'
  },
  {
    name: '[Foundation Coach Name]',
    role: 'Foundation Program Lead',
    certification: 'Grassroots Coaching Certificate',
    bio: 'Specialized in early childhood football development with a passion for building fundamental skills.'
  },
  {
    name: '[Development Coach Name]',
    role: 'Development Program Coach',
    certification: 'AFC C License',
    bio: 'Focuses on technical skill development and competitive mindset for pre-teen players.'
  },
  {
    name: '[Performance Coach Name]',
    role: 'Performance Program Coach',
    certification: 'UEFA C License',
    bio: 'Expert in advanced tactics and physical conditioning for competitive youth football.'
  },
  {
    name: '[GK Coach Name]',
    role: 'Goalkeeper Coach',
    certification: 'Specialized GK Coaching Certificate',
    bio: 'Former goalkeeper with dedicated expertise in shot-stopping, positioning, and distribution.'
  }];

  return (
    <div className="bg-touchline">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Coaches"
            subtitle="Experienced, certified coaches dedicated to developing skilled, disciplined footballers through structured training and genuine mentorship." />
          
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
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
            }}>
            
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-pitch mb-6">
              Our Coaching Philosophy
            </h2>
            <p className="font-body text-lg text-ink/70 leading-relaxed mb-6">
              Our coaches are more than instructors — they're mentors who
              understand that developing a footballer means developing the whole
              person. Every coach at GFAC holds recognized certifications and
              brings real competitive experience to their training.
            </p>
            <p className="font-body text-lg text-ink/70 leading-relaxed">
              We prioritize clear communication, structured progression, and
              creating an environment where players feel challenged but
              supported. Our coaching staff works as a team to ensure
              consistency across all age tiers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coach Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) =>
            <CoachCard key={coach.name} {...coach} index={index} />
            )}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-pitch text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 text-center">
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
              }}>
              
              <div className="font-mono text-5xl font-bold text-floodlight mb-2">
                [X]:1
              </div>
              <p className="font-body text-sm text-white/80 uppercase tracking-wide">
                Coach-to-Player Ratio
              </p>
            </motion.div>
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
                delay: 0.1
              }}>
              
              <div className="font-mono text-5xl font-bold text-floodlight mb-2">
                [X]+
              </div>
              <p className="font-body text-sm text-white/80 uppercase tracking-wide">
                Years Combined Coaching Experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-touchline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-6">
            Train with Experienced Coaches
          </h2>
          <p className="font-body text-lg text-ink/70 mb-8 max-w-2xl mx-auto">
            Book a free trial and meet the coaches who will guide your child's
            football development.
          </p>
          <Link
            href="/join-now"
            className="inline-block bg-floodlight text-ink px-10 py-5 font-body font-bold text-xl hover:bg-pitch hover:text-white transition-all hover:-translate-y-1 shadow-lg">
            
            Join Now
          </Link>
        </div>
      </section>
    </div>);

}