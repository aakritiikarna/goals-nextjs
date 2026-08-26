'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import { TestimonialCard } from '../../components/TestimonialCard';
import { KickoffCircle } from '../../components/KickoffCircle';
import { Trophy, Award, Target } from 'lucide-react';
export default function SuccessStories() {
  const achievements = [
  {
    year: '2025',
    title: 'Dana Cup Playoff B Champions',
    description:
    'Won the Playoff B title at Dana Cup 2025 in Denmark, competing against teams from across the world',
    icon: Trophy
  },
  {
    year: '2023',
    title: 'National Youth Championship Runners-Up',
    description:
    'Reached the final of the Nepal National Youth Championship in the U-15 category',
    icon: Award
  },
  {
    year: '2021',
    title: 'Regional Tournament Winners',
    description:
    'Multiple wins in Kathmandu Valley inter-academy tournaments across age groups',
    icon: Target
  }];

  const playerSpotlights = [
  {
    name: '[Player Name]',
    age: '16',
    quote:
    'GFAC gave me the structure and competitive experience I needed to develop as a serious footballer. Representing Nepal at the Dana Cup was a dream come true.',
    imageUrl:
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop'
  },
  {
    name: '[Player Name]',
    age: '14',
    quote:
    "I started in the Foundation program when I was 7. The coaches have been with me every step, and I've grown not just as a player but as a person.",
    imageUrl:
    'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=400&fit=crop'
  },
  {
    name: '[Player Name]',
    age: '12',
    quote:
    'The training is tough but fair. I love that we get to compete in real tournaments and test ourselves against other teams.',
    imageUrl:
    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop'
  }];

  const parentTestimonials = [
  {
    quote:
    "Watching my son grow from a shy 8-year-old to a confident young footballer who represented Nepal internationally has been incredible. GFAC's structured approach works.",
    author: 'Deepak Rai',
    role: 'Parent, Elite Program'
  },
  {
    quote:
    'The coaches genuinely care about each child. They pushed my daughter to improve while making sure she still loved the game. That balance is rare.',
    author: 'Sita Karki',
    role: 'Parent, Performance Program'
  },
  {
    quote:
    'GFAC opened doors for my son that we never thought possible. The international tournament exposure alone has been life-changing for him.',
    author: 'Mohan Shrestha',
    role: 'Parent, Development Program'
  }];

  return (
    <div className="bg-touchline">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="From Grassroots to Glory"
            subtitle="Real achievements, real players, real progress — the results of structured training and competitive dedication." />
          
        </div>
      </section>

      {/* Dana Cup 2025 Feature */}
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
                Dana Cup 2025 Playoff B Champions
              </h2>
              <p className="font-body text-lg text-white/90 leading-relaxed mb-6">
                In July 2025, our team traveled to Hjørring, Denmark to compete
                in the Dana Cup — one of the world's largest and most
                prestigious international youth football tournaments, with over
                1,000 teams from 50+ countries.
              </p>
              <p className="font-body text-lg text-white/90 leading-relaxed mb-6">
                After a week of intense competition, our players brought home
                the Playoff B championship title, representing Nepal with
                discipline, skill, and determination.
              </p>
              <p className="font-body text-lg text-white/90 leading-relaxed">
                This achievement is the result of years of structured training,
                competitive preparation, and the commitment of our players,
                coaches, and families.
              </p>
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
              
              <KickoffCircle size="lg" rotation={-10} className="mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=600&fit=crop"
                  alt="GFAC team celebrating Dana Cup victory"
                  className="w-full h-full object-cover" />
                
              </KickoffCircle>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              Tournament History
            </h2>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.year}
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
                  className="bg-white border border-gray-200 p-8 flex gap-6 items-start">
                  
                  <div className="flex-shrink-0">
                    <div className="bg-pitch text-white w-16 h-16 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-sm text-floodlight mb-2">
                      {achievement.year}
                    </div>
                    <h3 className="font-body text-2xl font-bold text-pitch mb-2">
                      {achievement.title}
                    </h3>
                    <p className="font-body text-base text-ink/70 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Player Spotlights */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              Player Voices
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {playerSpotlights.map((player, index) =>
            <motion.div
              key={player.name}
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
              className="bg-touchline border border-gray-200 overflow-hidden">
              
                <div className="aspect-square overflow-hidden">
                  <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-full h-full object-cover" />
                
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <h3 className="font-body text-xl font-bold text-pitch">
                      {player.name}
                    </h3>
                    <span className="font-mono text-xs text-ink/60">
                      AGE {player.age}
                    </span>
                  </div>
                  <p className="font-body text-sm text-ink/70 leading-relaxed italic">
                    "{player.quote}"
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-pitch mb-4">
              What Parents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parentTestimonials.map((testimonial, index) =>
            <TestimonialCard key={index} {...testimonial} index={index} />
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-pitch text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            Write Your Own Success Story
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the next generation of GFAC players and start your journey from
            grassroots to competitive football.
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