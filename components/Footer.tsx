'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-pitch text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-white flex items-center justify-center relative">
                <div className="w-3 h-3 rounded-full bg-white" />
                <div className="absolute inset-0 rounded-full border-[1.5px] border-white/30 scale-150" />
              </div>
              <span className="font-display text-lg tracking-tight">GFAC</span>
            </div>
            <p className="font-body text-sm text-white/80 leading-relaxed">
              Building Kathmandu's next generation of footballers through
              structured coaching and competitive excellence since 2010.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-wide mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
              {
                label: 'Home',
                path: '/'
              },
              {
                label: 'About Us',
                path: '/about'
              },
              {
                label: 'Success Stories',
                path: '/success-stories'
              },
              {
                label: 'Facilities',
                path: '/facilities'
              }].
              map((link) =>
              <li key={link.path}>
                  <Link
                  href={link.path}
                  className="font-body text-sm text-white/80 hover:text-floodlight transition-colors">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-wide mb-4">
              Programs
            </h3>
            <ul className="space-y-3">
              {[
              'Foundation (Ages 6-9)',
              'Development (Ages 10-12)',
              'Performance (Ages 13-15)',
              'Elite & Competitive (Ages 16+)'].
              map((program) =>
              <li key={program}>
                  <Link
                  href="/programs"
                  className="font-body text-sm text-white/80 hover:text-floodlight transition-colors">
                  
                    {program}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-wide mb-4">
              Connect
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-white/80 hover:text-floodlight transition-colors">
                  
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/join-now"
                  className="font-body text-sm text-white/80 hover:text-floodlight transition-colors">
                  
                  Join Now
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+9779841234567"
                className="flex items-center gap-2 font-body text-sm text-white/80 hover:text-floodlight transition-colors group">
                
                <Phone className="w-4 h-4" />
                <span>+977 984-1234567</span>
              </a>
              <a
                href="mailto:info@gfacnepal.com"
                className="flex items-center gap-2 font-body text-sm text-white/80 hover:text-floodlight transition-colors group">
                
                <Mail className="w-4 h-4" />
                <span>info@gfacnepal.com</span>
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com/GFACNepal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-floodlight transition-colors"
                aria-label="Facebook">
                
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-floodlight transition-colors"
                aria-label="Instagram">
                
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-floodlight transition-colors"
                aria-label="YouTube">
                
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <p className="font-body text-sm text-white/60 text-center">
            © {currentYear} Goals Football Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}