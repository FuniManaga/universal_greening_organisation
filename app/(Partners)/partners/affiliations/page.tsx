"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AffiliationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#00703C] to-[#004024] h-[60vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-green-200 text-lg font-medium mb-4"
              >
                Our Network
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Accreditation & Recognition
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Our commitment to excellence is validated through accreditations from leading international organizations
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
              {["Current Accreditations", "International Bodies", "Contact"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Current Accreditations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00703C] flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Current Accreditations
          </h2>
          
          <div className="grid gap-8">
            {/* WOCAT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-6 border border-gray-100 rounded-xl hover:border-green-100 transition-colors duration-300"
            >
              <div className="flex items-center gap-8">
                <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <img 
                    src="/logos/wocat.jpg" 
                    alt="WOCAT Logo" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00703C] transition-colors duration-300">
                  <a href="https://www.wocat.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    WOCAT
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </h3>
              </div>
            </motion.div>

            {/* University of Bern */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-6 border border-gray-100 rounded-xl hover:border-green-100 transition-colors duration-300"
            >
              <div className="flex items-center gap-8">
                <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <img 
                    src="/logos/bern.png" 
                    alt="University of Bern Logo" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00703C] transition-colors duration-300">
                  <a href="https://www.unibe.ch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    University of Bern (Switzerland)
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Bodies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00703C] flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            International Accreditation Bodies
          </h2>
          
          <p className="text-gray-600 mb-12">
            UGO works closely with various UN bodies and conventions to gain accreditations and strengthen its global presence:
          </p>
          
          <div className="grid gap-8">
            {[
              {
                name: "United Nations Convention on Biological Diversity (UNCBD)",
                logo: "/logos/uncbd.png",
                link: "https://www.cbd.int/"
              },
              {
                name: "United Nations Convention to Combat Desertification (UNCCD)",
                logo: "/logos/unccd.png",
                link: "https://www.unccd.int/"
              },
              {
                name: "United Nations Environment Programme (UNEP)",
                logo: "/logos/unep.png",
                link: "https://www.unep.org/"
              }
            ].map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-6 border border-gray-100 rounded-xl hover:border-green-100 transition-colors duration-300"
              >
                <div className="flex items-center gap-8">
                  <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                    <img 
                      src={org.logo}
                      alt={`${org.name} Logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00703C] transition-colors duration-300">
                    <a href={org.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {org.name}
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliationsPage;

