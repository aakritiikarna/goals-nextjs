'use client';
import React, { useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ChevronDown,
  ChevronUp } from
'lucide-react';
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '+977',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>>(
    {});
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: ''
      }));
    }
  };
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone || formData.phone === '+977') {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+977\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };
  const faqs = [
  {
    question: 'What age can my child start?',
    answer:
    'We accept children from age 6 onwards. Our Foundation program (ages 6-9) is designed specifically for early childhood football development.'
  },
  {
    question: 'Do you provide kits and equipment?',
    answer:
    'Yes, all registered players receive academy training kit. We provide all training equipment (balls, cones, bibs, etc.) during sessions.'
  },
  {
    question: 'How are fees structured?',
    answer:
    'Fees vary by program tier and are paid termly. We share detailed fee information during the trial booking call. Financial assistance is available for eligible families.'
  },
  {
    question: 'How do I book a free trial?',
    answer:
    'Fill out the enquiry form on our Join Now page, or message us on WhatsApp. Our team will call you within 24 hours to arrange a trial session.'
  }];

  if (submitted) {
    return (
      <div className="bg-touchline min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="max-w-2xl mx-auto px-4 text-center">
          
          <div className="bg-white border border-gray-200 p-12">
            <Mail className="w-20 h-20 text-floodlight mx-auto mb-6" />
            <h2 className="font-display text-4xl uppercase tracking-tight text-pitch mb-4">
              Message Sent
            </h2>
            <p className="font-body text-lg text-ink/70 leading-relaxed mb-6">
              Thank you for contacting Goals Football Academy. We'll reply to
              your message within 1 business day.
            </p>
            <p className="font-body text-base text-ink/60">
              A confirmation has been sent to <strong>{formData.email}</strong>
            </p>
          </div>
        </motion.div>
      </div>);

  }
  return (
    <div className="bg-touchline">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get in Touch"
            subtitle="Have questions? We're here to help."
            centered />
          
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
              
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="font-display text-2xl uppercase tracking-tight text-pitch mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}
                      placeholder="Your full name" />
                    
                    {errors.name &&
                    <p className="mt-1 text-sm text-whistle font-body">
                        {errors.name}
                      </p>
                    }
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}
                      placeholder="your.email@example.com" />
                    
                    {errors.email &&
                    <p className="mt-1 text-sm text-whistle font-body">
                        {errors.email}
                      </p>
                    }
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.startsWith('+977')) {
                          updateField('phone', value);
                        }
                      }}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}
                      placeholder="+977XXXXXXXXXX" />
                    
                    {errors.phone &&
                    <p className="mt-1 text-sm text-whistle font-body">
                        {errors.phone}
                      </p>
                    }
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.subject ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}>
                      
                      <option value="">Select a subject</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Trial Booking">Trial Booking</option>
                      <option value="Partnership/Sponsorship">
                        Partnership/Sponsorship
                      </option>
                      <option value="Media/Press">Media/Press</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                    {errors.subject &&
                    <p className="mt-1 text-sm text-whistle font-body">
                        {errors.subject}
                      </p>
                    }
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch resize-none`}
                      rows={6}
                      placeholder="Tell us how we can help..." />
                    
                    {errors.message &&
                    <p className="mt-1 text-sm text-whistle font-body">
                        {errors.message}
                      </p>
                    }
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-floodlight text-ink px-8 py-4 font-body font-bold hover:bg-pitch hover:text-white transition-all">
                    
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Map */}
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
              className="space-y-6">
              
              {/* Contact Details */}
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="font-display text-2xl uppercase tracking-tight text-pitch mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <a
                    href="tel:+9779841234567"
                    className="flex items-start gap-4 group hover:text-floodlight transition-colors">
                    
                    <div className="bg-pitch/5 p-3 group-hover:bg-floodlight/10 transition-colors">
                      <Phone className="w-5 h-5 text-pitch group-hover:text-floodlight" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ink/60 mb-1">
                        PHONE
                      </div>
                      <div className="font-body font-semibold text-pitch group-hover:text-floodlight">
                        +977 984-1234567
                      </div>
                      <div className="font-body text-sm text-ink/60">
                        Click to call
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@gfacnepal.com"
                    className="flex items-start gap-4 group hover:text-floodlight transition-colors">
                    
                    <div className="bg-pitch/5 p-3 group-hover:bg-floodlight/10 transition-colors">
                      <Mail className="w-5 h-5 text-pitch group-hover:text-floodlight" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ink/60 mb-1">
                        EMAIL
                      </div>
                      <div className="font-body font-semibold text-pitch group-hover:text-floodlight">
                        info@gfacnepal.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="bg-pitch/5 p-3">
                      <MapPin className="w-5 h-5 text-pitch" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ink/60 mb-1">
                        ADDRESS
                      </div>
                      <div className="font-body font-semibold text-pitch">
                        Kathmandu, Nepal
                      </div>
                      <div className="font-body text-sm text-ink/60">
                        Training ground location
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-pitch/5 p-3">
                      <Clock className="w-5 h-5 text-pitch" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ink/60 mb-1">
                        TRAINING HOURS
                      </div>
                      <div className="font-body text-sm text-pitch">
                        Morning: 6:00 AM - 8:00 AM
                        <br />
                        Evening: 4:00 PM - 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="font-mono text-xs text-ink/60 mb-4">
                    FOLLOW US
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://facebook.com/GFACNepal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pitch/5 p-3 hover:bg-pitch hover:text-white transition-colors group"
                      aria-label="Facebook">
                      
                      <Facebook className="w-5 h-5 text-pitch group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-pitch/5 p-3 hover:bg-pitch hover:text-white transition-colors group"
                      aria-label="Instagram">
                      
                      <Instagram className="w-5 h-5 text-pitch group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="bg-pitch/5 p-3 hover:bg-pitch hover:text-white transition-colors group"
                      aria-label="YouTube">
                      
                      <Youtube className="w-5 h-5 text-pitch group-hover:text-white" />
                    </a>
                    <a
                      href="https://wa.me/9779841234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366]/10 p-3 hover:bg-[#25D366] hover:text-white transition-colors group"
                      aria-label="WhatsApp">
                      
                      <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white border border-gray-200 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689005554!2d85.2911!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GFAC Location Map" />
                  
                </div>
                <div className="p-4 bg-floodlight/10 border-t border-floodlight/20">
                  <p className="font-body text-xs text-ink/70">
                    <strong>Note:</strong> Map shows general Kathmandu area.
                    Exact training ground location will be shared when you book
                    a trial.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-pitch mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 10
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.05
              }}
              className="border border-gray-200">
              
                <button
                onClick={() =>
                setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-touchline transition-colors">
                
                  <span className="font-body font-semibold text-pitch pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === index ?
                <ChevronUp className="w-5 h-5 text-pitch flex-shrink-0" /> :

                <ChevronDown className="w-5 h-5 text-pitch flex-shrink-0" />
                }
                </button>
                <AnimatePresence>
                  {expandedFaq === index &&
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1
                  }}
                  exit={{
                    height: 0,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="overflow-hidden">
                  
                      <div className="px-6 pb-6 font-body text-ink/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}