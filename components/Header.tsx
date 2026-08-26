'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Programs',
    path: '/programs'
  },
  {
    label: 'Coaches',
    path: '/coaches'
  },
  {
    label: 'Facilities',
    path: '/facilities'
  },
  {
    label: 'Success Stories',
    path: '/success-stories'
  },
  {
    label: 'Contact',
    path: '/contact'
  }];

  const isActive = (path: string) => pathname === path;
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-[1.5px] border-pitch flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-pitch" />
            </div>
            <span className="font-display text-xl tracking-tight text-pitch hidden sm:block">
              GOALS FOOTBALL ACADEMY
            </span>
            <span className="font-display text-xl tracking-tight text-pitch sm:hidden">
              GFAC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              href={link.path}
              className={`font-body text-sm transition-colors relative group ${isActive(link.path) ? 'text-pitch font-semibold' : 'text-gray-600 hover:text-pitch'}`}>
              
                {link.label}
                <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-pitch transition-all ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              
              </Link>
            )}
          </nav>

          {/* CTA Button */}
          <Link
            href="/join-now"
            className="hidden lg:block bg-floodlight text-ink px-6 py-2.5 font-body font-semibold text-sm hover:bg-pitch hover:text-white transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md">
            
            Join Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-pitch"
            aria-label="Toggle menu">
            
            {mobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 top-20 bg-pitch z-50 lg:hidden">
          
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, index) =>
            <motion.div
              key={link.path}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.05
              }}>
              
                  <Link
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-3xl tracking-tight ${isActive(link.path) ? 'text-floodlight' : 'text-white hover:text-floodlight'} transition-colors`}>
                
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
            )}
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
                delay: navLinks.length * 0.05
              }}
              className="mt-8">
              
                <Link
                href="/join-now"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-floodlight text-ink px-8 py-4 font-body font-semibold text-lg inline-block">
                
                  Join Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}