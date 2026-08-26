'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader';
import { TestimonialCard } from '../../components/TestimonialCard';
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Upload,
  MessageCircle } from
'lucide-react';
type FormData = {
  playerName: string;
  dateOfBirth: string;
  gender: string;
  playedBefore: string;
  experience: string;
  program: string;
  batch: string;
  guardianName: string;
  relationship: string;
  phone: string;
  email: string;
  address: string;
  hearAbout: string;
  agreeTerms: boolean;
  photo?: File;
};
export default function JoinNow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    playerName: '',
    dateOfBirth: '',
    gender: '',
    playedBefore: 'no',
    experience: '',
    program: '',
    batch: '',
    guardianName: '',
    relationship: '',
    phone: '+977',
    email: '',
    address: '',
    hearAbout: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;
  const updateField = (
  field: keyof FormData,
  value: string | boolean | File) =>
  {
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
  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (step === 1) {
      if (!formData.playerName.trim())
      newErrors.playerName = 'Player name is required';
      if (!formData.dateOfBirth)
      newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Please select a gender';
    }
    if (step === 2) {
      if (!formData.program) newErrors.program = 'Please select a program';
      if (!formData.batch) newErrors.batch = 'Please select a preferred batch';
    }
    if (step === 3) {
      if (!formData.guardianName.trim())
      newErrors.guardianName = 'Guardian name is required';
      if (!formData.relationship)
      newErrors.relationship = 'Please select relationship';
      if (!formData.phone || formData.phone === '+977') {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+977\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.hearAbout)
      newErrors.hearAbout = 'Please tell us how you heard about us';
    }
    if (step === 4) {
      if (!formData.agreeTerms)
      newErrors.agreeTerms = 'You must agree to the terms to continue';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      const payload = {
        player_name: formData.playerName,
        date_of_birth: formData.dateOfBirth,
        gender:
          formData.gender === 'Male'
            ? 'male'
            : formData.gender === 'Female'
            ? 'female'
            : 'other',
        played_before: formData.playedBefore === 'yes',
        experience: formData.experience,
        program: formData.program,
        batch: formData.batch.toLowerCase(),
        guardian_name: formData.guardianName,
        relationship:
          formData.relationship === 'Father'
            ? 'father'
            : formData.relationship === 'Mother'
            ? 'mother'
            : 'guardian',
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        hear_about:
          formData.hearAbout === 'Facebook' ||
          formData.hearAbout === 'Instagram'
            ? 'social_media'
            : formData.hearAbout === 'Friend/Family'
            ? 'friend'
            : formData.hearAbout === 'Walk-in'
            ? 'walked_by'
            : 'other',
        agree_terms: formData.agreeTerms
      };

      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Registration error:', data);
        alert('Registration failed. Please check the browser console and Django terminal.');
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Network error:', error);
      alert('Backend server not connected. Please start Django server.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const calculateAge = (dob: string): number => {
    if (!dob) return 0;
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
    monthDiff < 0 ||
    monthDiff === 0 && today.getDate() < birthDate.getDate())
    {
      age--;
    }
    return age;
  };
  const getSuggestedProgram = (): string => {
    const age = calculateAge(formData.dateOfBirth);
    if (age >= 6 && age <= 9) return 'foundation';
    if (age >= 10 && age <= 12) return 'development';
    if (age >= 13 && age <= 15) return 'performance';
    if (age >= 16) return 'elite';
    return '';
  };
  useEffect(() => {
    if (formData.dateOfBirth && currentStep === 2 && !formData.program) {
      const suggested = getSuggestedProgram();
      if (suggested) {
        updateField('program', suggested);
      }
    }
  }, [formData.dateOfBirth, currentStep]);
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
            <CheckCircle2 className="w-20 h-20 text-floodlight mx-auto mb-6" />
            <h2 className="font-display text-4xl uppercase tracking-tight text-pitch mb-4">
              Thank You, {formData.guardianName.split(' ')[0]}
            </h2>
            <p className="font-body text-lg text-ink/70 leading-relaxed mb-6">
              Your enquiry for <strong>{formData.playerName}</strong> has been
              received. Our team will call you within 24 hours to arrange a free
              trial session.
            </p>
            <p className="font-body text-base text-ink/60 mb-8">
              We've sent a confirmation email to{' '}
              <strong>{formData.email}</strong>
            </p>
            <a
              href="https://wa.me/9779841234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-body font-bold hover:bg-[#20BA5A] transition-colors">
              
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp (Faster)
            </a>
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
            title="Start Your Journey"
            subtitle="Tell us about your child — our team will call you to arrange a free trial session."
            centered />
          
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-pitch text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 text-center">
            {['Fill the form', 'We call you', 'Free trial', 'Join program'].map(
              (step, index) =>
              <div key={index} className="flex flex-col items-center">
                  <div className="font-mono text-2xl font-bold text-floodlight mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="font-body text-xs sm:text-sm text-white/80">
                    {step}
                  </p>
                </div>

            )}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-ink/60">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span className="font-mono text-sm text-floodlight font-bold">
                      {Math.round(currentStep / totalSteps * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 overflow-hidden">
                    <motion.div
                      className="h-full bg-floodlight"
                      initial={{
                        width: 0
                      }}
                      animate={{
                        width: `${currentStep / totalSteps * 100}%`
                      }}
                      transition={{
                        duration: 0.3
                      }} />
                    
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* Step 1: Player Details */}
                  {currentStep === 1 &&
                  <motion.div
                    key="step1"
                    initial={{
                      opacity: 0,
                      x: 20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    exit={{
                      opacity: 0,
                      x: -20
                    }}>
                    
                      <h3 className="font-display text-2xl uppercase tracking-tight text-pitch mb-6">
                        Player Details
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            Player's Full Name *
                          </label>
                          <input
                          type="text"
                          value={formData.playerName}
                          onChange={(e) =>
                          updateField('playerName', e.target.value)
                          }
                          className={`w-full px-4 py-3 border ${errors.playerName ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}
                          placeholder="Enter player's full name" />
                        
                          {errors.playerName &&
                        <p className="mt-1 text-sm text-whistle font-body">
                              {errors.playerName}
                            </p>
                        }
                        </div>

                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            Date of Birth *
                          </label>
                          <input
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                          updateField('dateOfBirth', e.target.value)
                          }
                          className={`w-full px-4 py-3 border ${errors.dateOfBirth ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`} />
                        
                          {errors.dateOfBirth &&
                        <p className="mt-1 text-sm text-whistle font-body">
                              {errors.dateOfBirth}
                            </p>
                        }
                        </div>

                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            Gender *
                          </label>
                          <div className="flex gap-4">
                            {['Male', 'Female', 'Prefer not to say'].map(
                            (option) =>
                            <label
                              key={option}
                              className="flex items-center gap-2 cursor-pointer">
                              
                                  <input
                                type="radio"
                                name="gender"
                                value={option}
                                checked={formData.gender === option}
                                onChange={(e) =>
                                updateField('gender', e.target.value)
                                }
                                className="w-4 h-4 text-pitch focus:ring-pitch" />
                              
                                  <span className="font-body text-sm text-ink">
                                    {option}
                                  </span>
                                </label>

                          )}
                          </div>
                          {errors.gender &&
                        <p className="mt-1 text-sm text-whistle font-body">
                              {errors.gender}
                            </p>
                        }
                        </div>

                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            Played Football Before?
                          </label>
                          <div className="flex gap-4 mb-4">
                            {['yes', 'no'].map((option) =>
                          <label
                            key={option}
                            className="flex items-center gap-2 cursor-pointer">
                            
                                <input
                              type="radio"
                              name="playedBefore"
                              value={option}
                              checked={formData.playedBefore === option}
                              onChange={(e) =>
                              updateField('playedBefore', e.target.value)
                              }
                              className="w-4 h-4 text-pitch focus:ring-pitch" />
                            
                                <span className="font-body text-sm text-ink capitalize">
                                  {option}
                                </span>
                              </label>
                          )}
                          </div>
                          {formData.playedBefore === 'yes' &&
                        <textarea
                          value={formData.experience}
                          onChange={(e) =>
                          updateField('experience', e.target.value)
                          }
                          placeholder="Tell us briefly about their experience (optional)"
                          className="w-full px-4 py-3 border border-gray-300 font-body focus:outline-none focus:border-pitch resize-none"
                          rows={3} />

                        }
                        </div>
                      </div>
                    </motion.div>
                  }

                  {/* Step 2: Program & Schedule */}
                  {currentStep === 2 &&
                  <motion.div
                    key="step2"
                    initial={{
                      opacity: 0,
                      x: 20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    exit={{
                      opacity: 0,
                      x: -20
                    }}>
                    
                      <h3 className="font-display text-2xl uppercase tracking-tight text-pitch mb-6">
                        Program & Schedule
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-4">
                            Program / Age Group *
                          </label>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {[
                          {
                            value: 'foundation',
                            label: 'Foundation',
                            ages: '6-9'
                          },
                          {
                            value: 'development',
                            label: 'Development',
                            ages: '10-12'
                          },
                          {
                            value: 'performance',
                            label: 'Performance',
                            ages: '13-15'
                          },
                          {
                            value: 'elite',
                            label: 'Elite & Competitive',
                            ages: '16+'
                          }].
                          map((program) => {
                            const suggested = getSuggestedProgram();
                            const isSuggested = program.value === suggested;
                            return (
                              <label
                                key={program.value}
                                className={`relative border-2 p-4 cursor-pointer transition-all ${formData.program === program.value ? 'border-pitch bg-pitch/5' : isSuggested ? 'border-floodlight bg-floodlight/5' : 'border-gray-200 hover:border-gray-300'}`}>
                                
                                  <input
                                  type="radio"
                                  name="program"
                                  value={program.value}
                                  checked={formData.program === program.value}
                                  onChange={(e) =>
                                  updateField('program', e.target.value)
                                  }
                                  className="sr-only" />
                                
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="font-body font-bold text-pitch">
                                      {program.label}
                                    </div>
                                    <div className="font-mono text-xs text-ink/60">
                                      {program.ages}
                                    </div>
                                  </div>
                                  {isSuggested &&
                                <div className="text-xs font-mono text-floodlight">
                                      Suggested for age
                                    </div>
                                }
                                </label>);

                          })}
                          </div>
                          {errors.program &&
                        <p className="mt-2 text-sm text-whistle font-body">
                              {errors.program}
                            </p>
                        }
                        </div>

                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-4">
                            Preferred Batch *
                          </label>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {['Morning', 'Evening'].map((batch) =>
                          <label
                            key={batch}
                            className={`border-2 p-4 cursor-pointer transition-all ${formData.batch === batch ? 'border-pitch bg-pitch/5' : 'border-gray-200 hover:border-gray-300'}`}>
                            
                                <input
                              type="radio"
                              name="batch"
                              value={batch}
                              checked={formData.batch === batch}
                              onChange={(e) =>
                              updateField('batch', e.target.value)
                              }
                              className="sr-only" />
                            
                                <div className="font-body font-bold text-pitch">
                                  {batch}
                                </div>
                              </label>
                          )}
                          </div>
                          {errors.batch &&
                        <p className="mt-2 text-sm text-whistle font-body">
                              {errors.batch}
                            </p>
                        }
                        </div>
                      </div>
                    </motion.div>
                  }

                  {/* Step 3: Guardian & Contact */}
                  {currentStep === 3 &&
                  <motion.div
                    key="step3"
                    initial={{
                      opacity: 0,
                      x: 20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    exit={{
                      opacity: 0,
                      x: -20
                    }}>
                    
                      <h3 className="font-display text-2xl uppercase tracking-tight text-pitch mb-6">
                        Guardian & Contact
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            Parent/Guardian Full Name *
                          </label>
                          <input
                          type="text"
                          value={formData.guardianName}
                          onChange={(e) =>
                          updateField('guardianName', e.target.value)
                          }
                          className={`w-full px-4 py-3 border ${errors.guardianName ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}
                          placeholder="Enter your full name" />
                        
                          {errors.guardianName &&
                        <p className="mt-1 text-sm text-whistle font-body">
                              {errors.guardianName}
                            </p>
                        }
                        </div>

                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            Relationship to Player *
                          </label>
                          <select
                          value={formData.relationship}
                          onChange={(e) =>
                          updateField('relationship', e.target.value)
                          }
                          className={`w-full px-4 py-3 border ${errors.relationship ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}>
                          
                            <option value="">Select relationship</option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Guardian">Guardian</option>
                          </select>
                          {errors.relationship &&
                        <p className="mt-1 text-sm text-whistle font-body">
                              {errors.relationship}
                            </p>
                        }
                        </div>

                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            Phone Number *
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
                            Email Address *
                          </label>
                          <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                          updateField('email', e.target.value)
                          }
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
                            Address (City/Ward) *
                          </label>
                          <input
                          type="text"
                          value={formData.address}
                          onChange={(e) =>
                          updateField('address', e.target.value)
                          }
                          className={`w-full px-4 py-3 border ${errors.address ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}
                          placeholder="e.g., Lalitpur, Ward 3" />
                        
                          {errors.address &&
                        <p className="mt-1 text-sm text-whistle font-body">
                              {errors.address}
                            </p>
                        }
                        </div>

                        <div>
                          <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                            How Did You Hear About Us? *
                          </label>
                          <select
                          value={formData.hearAbout}
                          onChange={(e) =>
                          updateField('hearAbout', e.target.value)
                          }
                          className={`w-full px-4 py-3 border ${errors.hearAbout ? 'border-whistle' : 'border-gray-300'} font-body focus:outline-none focus:border-pitch`}>
                          
                            <option value="">Select an option</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Friend/Family">
                              Friend/Family Referral
                            </option>
                            <option value="Walk-in">Walk-in</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.hearAbout &&
                        <p className="mt-1 text-sm text-whistle font-body">
                              {errors.hearAbout}
                            </p>
                        }
                        </div>
                      </div>
                    </motion.div>
                  }

                  {/* Step 4: Confirm & Submit */}
                  {currentStep === 4 &&
                  <motion.div
                    key="step4"
                    initial={{
                      opacity: 0,
                      x: 20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    exit={{
                      opacity: 0,
                      x: -20
                    }}>
                    
                      <h3 className="font-display text-2xl uppercase tracking-tight text-pitch mb-6">
                        Confirm & Submit
                      </h3>

                      <div className="bg-touchline border border-gray-200 p-6 mb-6">
                        <h4 className="font-body font-bold text-pitch mb-4">
                          Summary
                        </h4>
                        <div className="space-y-3 font-body text-sm">
                          <div className="flex justify-between">
                            <span className="text-ink/60">Player Name:</span>
                            <span className="font-semibold text-pitch">
                              {formData.playerName}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/60">Date of Birth:</span>
                            <span className="font-semibold text-pitch">
                              {formData.dateOfBirth}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/60">Program:</span>
                            <span className="font-semibold text-pitch capitalize">
                              {formData.program.replace('-', ' ')}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/60">
                              Preferred Batch:
                            </span>
                            <span className="font-semibold text-pitch">
                              {formData.batch}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/60">Guardian:</span>
                            <span className="font-semibold text-pitch">
                              {formData.guardianName}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/60">Phone:</span>
                            <span className="font-semibold text-pitch">
                              {formData.phone}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-ink/60">Email:</span>
                            <span className="font-semibold text-pitch">
                              {formData.email}
                            </span>
                          </div>
                        </div>
                        <button
                        onClick={() => setCurrentStep(1)}
                        className="mt-4 font-body text-sm text-pitch hover:text-floodlight transition-colors">
                        
                          ← Edit Details
                        </button>
                      </div>

                      <div className="mb-6">
                        <label className="block font-mono text-xs uppercase tracking-wide text-ink/70 mb-2">
                          Recent Photo of Player (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 p-8 text-center">
                          <Upload className="w-8 h-8 text-ink/40 mx-auto mb-2" />
                          <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              updateField('photo', e.target.files[0]);
                            }
                          }}
                          className="hidden"
                          id="photo-upload" />
                        
                          <label
                          htmlFor="photo-upload"
                          className="font-body text-sm text-pitch hover:text-floodlight cursor-pointer">
                          
                            Click to upload
                          </label>
                          {formData.photo &&
                        <p className="mt-2 font-body text-xs text-turf">
                              {formData.photo.name}
                            </p>
                        }
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={(e) =>
                          updateField('agreeTerms', e.target.checked)
                          }
                          className="mt-1 w-4 h-4 text-pitch focus:ring-pitch" />
                        
                          <span className="font-body text-sm text-ink/70 leading-relaxed">
                            I agree to GFAC's terms and consent to my child's
                            photo/video being used in academy promotional
                            material.{' '}
                            <a
                            href="#"
                            className="text-pitch hover:text-floodlight">
                            
                              Terms & Privacy
                            </a>
                          </span>
                        </label>
                        {errors.agreeTerms &&
                      <p className="mt-2 text-sm text-whistle font-body">
                            {errors.agreeTerms}
                          </p>
                      }
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  {currentStep > 1 ?
                  <button
                    onClick={prevStep}
                    className="flex items-center gap-2 font-body font-semibold text-pitch hover:text-floodlight transition-colors">
                    
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </button> :

                  <div />
                  }

                  {currentStep < totalSteps ?
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-pitch text-white px-6 py-3 font-body font-bold hover:bg-turf transition-colors ml-auto">
                    
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button> :

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-floodlight text-ink px-8 py-3 font-body font-bold hover:bg-pitch hover:text-white transition-colors ml-auto disabled:opacity-60 disabled:cursor-not-allowed">
                    
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  }
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-body font-bold text-pitch mb-4">
                  Quick Facts
                </h4>
                <ul className="space-y-3 font-body text-sm text-ink/70">
                  <li>• Foundation (Ages 6-9)</li>
                  <li>• Development (Ages 10-12)</li>
                  <li>• Performance (Ages 13-15)</li>
                  <li>• Elite & Competitive (Ages 16+)</li>
                  <li className="pt-3 border-t border-gray-200 text-xs">
                    Fee details shared during call
                  </li>
                </ul>
              </div>

              {/* Testimonial */}
              <TestimonialCard
                quote="The trial session convinced us. The coaches were professional, the training was structured, and our son loved it."
                author="Priya Shrestha"
                role="Parent"
                index={0} />
              

              {/* WhatsApp Alternative */}
              <div className="bg-pitch text-white p-6">
                <h4 className="font-body font-bold mb-3">Prefer to Chat?</h4>
                <p className="font-body text-sm text-white/80 mb-4">
                  Message us on WhatsApp for faster response
                </p>
                <a
                  href="https://wa.me/9779841234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 font-body font-bold hover:bg-[#20BA5A] transition-colors w-full">
                  
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}