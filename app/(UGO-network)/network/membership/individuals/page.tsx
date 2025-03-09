"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUsers, FaStar, FaCrown, FaHandshake } from 'react-icons/fa';

const MembershipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#00703C] to-[#004024] h-[50vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-green-200 text-lg font-medium mb-4"
              >
                UGO Network
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Membership Tiers
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Join our community of change-makers and environmental innovators
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Bar */}
      <div className="bg-[#00703C] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <span className="font-medium">Quick Links:</span>
            <div className="flex gap-8">
              {["Affiliate", "Associate", "Full Member", "Change Maker"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Membership Tiers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Affiliate Member Card */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-center mb-6">
                <FaUsers className="text-[#00703C] text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Affiliate Member
                </h2>
                <p className="text-[#00703C] text-xl font-semibold">
                  R500 per annum
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'Monthly educational Newsletter',
                  'Priority access to Events',
                  'Priority on Job and volunteer opportunities',
                  'Personalized Workshops and webinars',
                  'Personalized mentorship',
                  'Membership certificate',
                  'Written Recommendation'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00703C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-auto">
                <Link 
                  href="https://forms.gle/AffiliateFormLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#00703C] hover:bg-[#005c32] 
                    text-white font-medium rounded-none transition-colors"
                >
                  Apply as Affiliate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Associate Member Card */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-center mb-6">
                <FaStar className="text-[#00703C] text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Associate Member
                </h2>
                <p className="text-[#00703C] text-xl font-semibold">
                  R1000 per annum
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'All Affiliate benefits',
                  'Quarterly strategy sessions',
                  'Access to networking events',
                  'Project collaboration opportunities',
                  'Professional development support',
                  'Enhanced visibility in network',
                  'Leadership opportunities'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00703C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-auto">
                <Link 
                  href="https://forms.gle/AssociateFormLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#00703C] hover:bg-[#005c32] 
                    text-white font-medium rounded-none transition-colors"
                >
                  Apply as Associate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Full Member Card */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-center mb-6">
                <FaCrown className="text-[#00703C] text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Full Member
                </h2>
                <p className="text-[#00703C] text-xl font-semibold">
                  R2000 per annum
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'All Associate benefits',
                  'Voting rights in network',
                  'Committee participation',
                  'Research collaboration',
                  'Speaking opportunities',
                  'Publication features',
                  'Advanced mentorship'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00703C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-auto">
                <Link 
                  href="https://forms.gle/FullMemberFormLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#00703C] hover:bg-[#005c32] 
                    text-white font-medium rounded-none transition-colors"
                >
                  Apply as Full Member
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Change Maker Card */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-center mb-6">
                <FaHandshake className="text-[#00703C] text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Change Maker
                </h2>
                <p className="text-[#00703C] text-xl font-semibold">
                  R5000 per annum
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'All Full Member benefits',
                  'Board participation eligibility',
                  'Strategic planning input',
                  'International networking',
                  'Project leadership roles',
                  'High-level partnerships',
                  'Executive mentorship'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00703C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-auto">
                <Link 
                  href="https://forms.gle/ChangeMakerFormLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#00703C] hover:bg-[#005c32] 
                    text-white font-medium rounded-none transition-colors"
                >
                  Apply as Change Maker
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#00703C] mb-6">
            Need More Information?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our membership team for detailed information about benefits and application process
          </p>
          <a 
            href="mailto:membership@example.com" 
            className="text-[#00703C] hover:text-[#005c32] font-medium"
          >
            membership@example.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;

