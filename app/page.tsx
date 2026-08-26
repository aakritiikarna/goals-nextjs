'use client';
import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { KickoffCircle } from '../components/KickoffCircle';
import { ProgramCard } from '../components/ProgramCard';
import { TestimonialCard } from '../components/TestimonialCard';
import {
  Target,
  Users,
  Trophy,
  TrendingUp,
  Heart,
  Building2 } from
'lucide-react';
export default function Home() {
  const whyGFAC = [
  {
    icon: Target,
    title: 'Structured Age-Based Curriculum',
    description: 'Progressive training designed for each developmental stage'
  },
  {
    icon: Users,
    title: 'Experienced Coaching Staff',
    description:
    'Certified coaches with years of competitive football experience'
  },
  {
    icon: Trophy,
    title: 'International Tournament Exposure',
    description:
    'Regular participation in regional and international competitions'
  },
  {
    icon: TrendingUp,
    title: 'A Real Pathway to Competitive Football',
    description:
    'Clear progression from grassroots to elite competitive levels'
  },
  {
    icon: Heart,
    title: 'Community & Access',
    description:
    'Opening doors to structured football for all children in Kathmandu'
  },
  {
    icon: Building2,
    title: 'Modern Training Facilities',
    description:
    'Well-maintained pitches and professional training equipment'
  }];

  const programs = [
  {
    ageRange: '6-9',
    name: 'Foundation',
    focus:
    'Building fundamental skills, coordination, and love for the game through structured play',
    sessionsPerWeek: '2-3 sessions per week'
  },
  {
    ageRange: '10-12',
    name: 'Development',
    focus:
    'Technical skill development, tactical awareness, and competitive match experience',
    sessionsPerWeek: '3-4 sessions per week'
  },
  {
    ageRange: '13-15',
    name: 'Performance',
    focus:
    'Advanced tactics, position-specific training, and tournament preparation',
    sessionsPerWeek: '4-5 sessions per week'
  },
  {
    ageRange: '16+',
    name: 'Elite & Competitive',
    focus:
    'High-level competitive football with international tournament opportunities',
    sessionsPerWeek: '5-6 sessions per week'
  }];

  const testimonials = [
  {
    quote:
    "My son joined GFAC three years ago and the transformation has been incredible. The coaches genuinely care about each child's development, not just winning matches.",
    author: 'Sanjay Sharma',
    role: 'Parent, Development Program'
  },
  {
    quote:
    'GFAC gave my daughter the opportunity to represent Nepal at the Dana Cup. She came back not just a better player, but more confident and disciplined in everything she does.',
    author: 'Anjali Thapa',
    role: 'Parent, Performance Program'
  },
  {
    quote:
    "The structured pathway from Foundation to Elite means my child isn't just playing football — he's learning teamwork, commitment, and what it takes to compete at a serious level.",
    author: 'Ramesh Gurung',
    role: 'Parent, Foundation Program'
  }];

  return (
    <div className="bg-touchline">
      {/* Hero Section */}
      <section className="relative bg-touchline overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Headline */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="lg:col-span-3">
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tighter text-pitch leading-[0.9] mb-6">
                Where Kathmandu's Next Footballers Are Made
              </h1>
              <p className="font-body text-lg sm:text-xl text-ink/70 leading-relaxed mb-8 max-w-2xl">
                Structured, age-based coaching and a proven record on the
                international stage — Goals Football Academy has trained players
                from grassroots to competitive football since 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/join-now"
                  className="inline-block bg-floodlight text-ink px-8 py-4 font-body font-bold text-lg hover:bg-pitch hover:text-white transition-all hover:-translate-y-1 shadow-md hover:shadow-xl text-center">
                  
                  Book a Free Trial
                </Link>
                <Link
                  href="/programs"
                  className="inline-block bg-white border-2 border-pitch text-pitch px-8 py-4 font-body font-bold text-lg hover:bg-pitch hover:text-white transition-all text-center">
                  
                  See Our Pathway
                </Link>
              </div>
            </motion.div>

            {/* Right: Circle Photo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="lg:col-span-2 flex justify-center lg:justify-end">
              
              <KickoffCircle
                size="xl"
                rotation={-15}
                className="w-full max-w-md">
                
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=800&fit=crop"
                  alt="Young footballer in action"
                  className="w-full h-full object-cover" />
                
              </KickoffCircle>
            </motion.div>
          </div>
        </div>

        {/* Curved Touchline Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg
            viewBox="0 0 1440 100"
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none">
            
            <path
              d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
              fill="#143D2B" />
            
          </svg>
        </div>
      </section>

      {/* Team Sheet Fact Strip */}
      <section className="bg-pitch text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 font-mono text-xs sm:text-sm tracking-wider">
            <span>EST. 2010</span>
            <span className="hidden sm:inline text-floodlight">·</span>
            <span>KATHMANDU, NEPAL</span>
            <span className="hidden sm:inline text-floodlight">·</span>
            <span className="text-floodlight">
              DANA CUP CHAMPIONS — PLAYOFF B, 2025
            </span>
            <span className="hidden sm:inline text-floodlight">·</span>
            <span>[500]+ PLAYERS TRAINED</span>
          </div>
        </div>
      </section>

      {/* Why GFAC */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              Why Goals Football Academy
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyGFAC.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
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
                  className="bg-white border border-gray-200 p-8">
                  
                  <div className="bg-pitch/5 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-pitch" />
                  </div>
                  <h3 className="font-body text-lg font-bold text-pitch mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-ink/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <KickoffCircle size="lg" className="mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop"
                  alt="GFAC community training"
                  className="w-full h-full object-cover" />
                
              </KickoffCircle>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-pitch mb-6">
                Football for Every Child
              </h2>
              <p className="font-body text-lg text-ink/70 leading-relaxed mb-6">
                Since 2010, Goals Football Academy has been more than a training
                ground — it's been a pathway to opportunity. We've opened our
                doors to children across Kathmandu, including those who wouldn't
                otherwise have access to structured football coaching.
              </p>
              <p className="font-body text-lg text-ink/70 leading-relaxed mb-8">
                Our mission is simple: build disciplined, confident footballers
                through structured training, competitive exposure, and a genuine
                commitment to community access.
              </p>
              <Link
                href="/about"
                className="inline-block font-body font-semibold text-pitch hover:text-floodlight transition-colors text-lg group">
                
                Read Our Story{' '}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              Our Training Programs
            </h2>
            <p className="font-body text-lg text-ink/70 max-w-3xl mx-auto">
              A clear pathway from grassroots to competitive football,
              structured by age and development stage
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map((program, index) =>
            <ProgramCard key={program.name} {...program} index={index} />
            )}
          </div>

          <div className="text-center">
            <Link
              href="/programs"
              className="inline-block bg-pitch text-white px-8 py-4 font-body font-bold text-lg hover:bg-turf transition-colors">
              
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Dana Cup Achievement */}
      <section className="py-20 lg:py-32 bg-pitch text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <div className="inline-block bg-floodlight text-ink px-4 py-2 font-mono text-sm font-bold mb-6">
                LATEST ACHIEVEMENT
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
                Dana Cup 2025 Champions
              </h2>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-6">
                Our team represented Nepal at the Dana Cup 2025 in Denmark — one
                of the world's largest international youth football tournaments
                — and brought home the Playoff B title.
              </p>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-8">
                This achievement represents years of structured training,
                dedication, and the competitive pathway we've built for our
                players.
              </p>
              <Link
                href="/success-stories"
                className="inline-block bg-floodlight text-ink px-8 py-4 font-body font-bold text-lg hover:bg-white transition-colors">
                
                See All Achievements
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="relative">
              
              <KickoffCircle size="lg" rotation={10} className="mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=600&fit=crop"
                  alt="GFAC team celebrating Dana Cup victory"
                  className="w-full h-full object-cover" />
                
              </KickoffCircle>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              What Parents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) =>
            <TestimonialCard key={index} {...testimonial} index={index} />
            )}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              See Us in Action
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
            'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=400&fit=crop'].
            map((src, index) =>
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
              className="aspect-[3/2] overflow-hidden group">
              
                <img
                src={src}
                alt={`GFAC training ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              
              </motion.div>
            )}
          </div>

          <div className="text-center">
            <Link
              href="/facilities"
              className="inline-block font-body font-semibold text-pitch hover:text-floodlight transition-colors text-lg group">
              
              View Full Gallery{' '}
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-pitch text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Ready to Start Your Child's Football Journey?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free trial session and see how our structured training
            pathway can help your child develop as a footballer.
          </p>
          <Link
            href="/join-now"
            className="inline-block bg-floodlight text-ink px-10 py-5 font-body font-bold text-xl hover:bg-white transition-all hover:-translate-y-1 shadow-lg">
            
            Join Now
          </Link>
        </div>
      </section>
    </div>);

}