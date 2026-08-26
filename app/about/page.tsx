'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import { Target, Users, Award, Heart } from 'lucide-react';
export default function About() {
  const values = [
  {
    icon: Target,
    title: 'Discipline',
    description:
    'Building character through structured training, punctuality, and commitment to the team'
  },
  {
    icon: Heart,
    title: 'Access & Inclusion',
    description:
    'Opening doors to quality football training for all children in Kathmandu'
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
    'Pursuing competitive success while maintaining high coaching and training standards'
  },
  {
    icon: Users,
    title: 'Community',
    description:
    'Building a supportive environment where players, parents, and coaches grow together'
  }];

  const timeline = [
  {
    year: '2010',
    title: 'Founded',
    description:
    'Goals Football Academy established in Kathmandu with a mission to provide structured grassroots football training'
  },
  {
    year: '2015',
    title: 'First Grassroots Programs',
    description:
    'Launched age-based curriculum serving [X] children across Foundation and Development tiers'
  },
  {
    year: '2019',
    title: 'International Debut',
    description:
    'First appearance at the Dana Cup in Denmark, representing Nepal on the international stage'
  },
  {
    year: '2025',
    title: 'Dana Cup Champions',
    description:
    'Won the Playoff B title at Dana Cup 2025, marking a milestone in competitive achievement'
  }];

  return (
    <div className="bg-touchline">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Story" />
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-20 lg:py-32">
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
              
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop"
                  alt="GFAC early days"
                  className="w-full h-full object-cover" />
                
              </div>
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
                Founded on a Simple Belief
              </h2>
              <p className="font-body text-lg text-ink/70 leading-relaxed mb-6">
                In 2010, Goals Football Academy was founded with a
                straightforward mission: give children in Kathmandu access to
                structured, quality football training — regardless of their
                background.
              </p>
              <p className="font-body text-lg text-ink/70 leading-relaxed mb-6">
                What started as a grassroots initiative has grown into a proven
                pathway from early childhood football through competitive youth
                levels, with our players now representing Nepal on international
                stages.
              </p>
              <p className="font-body text-lg text-ink/70 leading-relaxed">
                We've stayed true to that founding belief: football should be
                accessible, structured, and focused on developing not just
                skilled players, but disciplined, confident young people.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
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
              className="bg-pitch text-white p-12">
              
              <h3 className="font-display text-3xl uppercase tracking-tight mb-6">
                Our Mission
              </h3>
              <p className="font-body text-lg text-white/90 leading-relaxed">
                To provide structured, age-appropriate football training that
                develops skilled, disciplined players while maintaining genuine
                community access — ensuring every child in Kathmandu has the
                opportunity to learn the game properly.
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
              }}
              className="bg-turf text-white p-12">
              
              <h3 className="font-display text-3xl uppercase tracking-tight mb-6">
                Our Vision
              </h3>
              <p className="font-body text-lg text-white/90 leading-relaxed">
                To be recognized as Nepal's leading grassroots-to-competitive
                football academy — known for producing technically skilled,
                tactically aware players who compete successfully at national
                and international levels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
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
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-ink/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              Our Journey
            </h2>
          </div>

          <div className="space-y-12">
            {timeline.map((milestone, index) =>
            <motion.div
              key={milestone.year}
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
              }}
              transition={{
                delay: index * 0.1
              }}
              className="flex gap-8 items-start">
              
                <div className="flex-shrink-0">
                  <div className="bg-pitch text-white px-6 py-3 font-mono text-xl font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-body text-2xl font-bold text-pitch mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-lg text-ink/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-pitch text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Be Part of Our Story
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the next generation of GFAC players and help us continue
            building Nepal's football future.
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