'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import { ProgramCard } from '../../components/ProgramCard';
import { Calendar, Users2, Sparkles } from 'lucide-react';
export default function Programs() {
  const mainPrograms = [
  {
    ageRange: '6-9',
    name: 'Foundation',
    focus:
    'Building fundamental skills, coordination, and love for the game through structured play. Focus on basic ball control, movement, and understanding team concepts.',
    sessionsPerWeek: '2-3 sessions per week'
  },
  {
    ageRange: '10-12',
    name: 'Development',
    focus:
    'Technical skill development, tactical awareness, and competitive match experience. Players learn position-specific skills and begin competitive tournament participation.',
    sessionsPerWeek: '3-4 sessions per week'
  },
  {
    ageRange: '13-15',
    name: 'Performance',
    focus:
    'Advanced tactics, position-specific training, and tournament preparation. Emphasis on game intelligence, physical conditioning, and competitive mindset.',
    sessionsPerWeek: '4-5 sessions per week'
  },
  {
    ageRange: '16+',
    name: 'Elite & Competitive',
    focus:
    'High-level competitive football with international tournament opportunities. Players train at near-professional intensity with focus on tactical sophistication and mental resilience.',
    sessionsPerWeek: '5-6 sessions per week'
  }];

  const specialtyPrograms = [
  {
    icon: Calendar,
    title: 'Holiday Camps',
    description:
    'Intensive training camps during school breaks with focused skill development and fun tournaments'
  },
  {
    icon: Users2,
    title: "Girls' Football Program",
    description:
    'Dedicated training sessions for girls across all age groups with female coaching staff'
  },
  {
    icon: Sparkles,
    title: 'Goalkeeper Clinic',
    description:
    'Specialized training for goalkeepers focusing on positioning, shot-stopping, and distribution'
  }];

  return (
    <div className="bg-touchline">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Training Programs"
            subtitle="A clear pathway from grassroots to competitive football, structured by age and development stage. Each tier builds on the previous one, ensuring players progress with the right skills at the right time." />
          
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mainPrograms.map((program, index) =>
            <ProgramCard key={program.name} {...program} index={index} />
            )}
          </div>
        </div>
      </section>

      {/* Pathway Visual */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              The GFAC Pathway
            </h2>
            <p className="font-body text-lg text-ink/70 max-w-3xl mx-auto">
              Our structured progression ensures every player develops the right
              skills at each stage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
            {
              stage: '01',
              name: 'Foundation',
              ages: '6-9',
              focus: 'Fundamentals'
            },
            {
              stage: '02',
              name: 'Development',
              ages: '10-12',
              focus: 'Technical Skills'
            },
            {
              stage: '03',
              name: 'Performance',
              ages: '13-15',
              focus: 'Advanced Tactics'
            },
            {
              stage: '04',
              name: 'Elite',
              ages: '16+',
              focus: 'Competition'
            }].
            map((stage, index) =>
            <motion.div
              key={stage.stage}
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
                delay: index * 0.1
              }}
              className="relative">
              
                <div className="bg-pitch text-white p-8 text-center">
                  <div className="font-mono text-sm text-floodlight mb-2">
                    STAGE {stage.stage}
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-tight mb-2">
                    {stage.name}
                  </h3>
                  <div className="font-mono text-xs text-white/60 mb-3">
                    AGES {stage.ages}
                  </div>
                  <p className="font-body text-sm text-white/80">
                    {stage.focus}
                  </p>
                </div>
                {index < 3 &&
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-pitch/30" />
              }
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Specialty Programs */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              Specialty Programs
            </h2>
            <p className="font-body text-lg text-ink/70 max-w-3xl mx-auto">
              Additional training opportunities to complement our core pathway
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialtyPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
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
                  className="bg-white border border-gray-200 p-8 text-center">
                  
                  <div className="bg-pitch/5 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-pitch" />
                  </div>
                  <h3 className="font-body text-xl font-bold text-pitch mb-3">
                    {program.title}
                  </h3>
                  <p className="font-body text-sm text-ink/70 leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-pitch text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Find the Right Program for Your Child
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free trial session and our coaches will help place your child
            in the appropriate tier.
          </p>
          <Link
            href="/join-now"
            className="inline-block bg-floodlight text-ink px-10 py-5 font-body font-bold text-xl hover:bg-white transition-all hover:-translate-y-1 shadow-lg">
            
            Book a Free Trial
          </Link>
        </div>
      </section>
    </div>);

}