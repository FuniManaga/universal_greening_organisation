"use client"
import React from 'react';
import { motion } from "framer-motion";

const WhatWeDoPage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#00703C] text-white py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm 
                bg-white/10 text-white text-sm mb-6 backdrop-blur-sm"
            >
              Our Work
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
            >
              Creating{' '}
              <span className="text-[#4ADE80]">Sustainable</span> Impact
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
            >
              Through innovative programs and community partnerships, we're building a 
              more sustainable and environmentally conscious future.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C]">Our Focus Areas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Through strategic initiatives and community engagement, we focus on key areas 
              that drive sustainable environmental change.
            </p>
          </div>

          <div className="space-y-24 max-w-4xl mx-auto">
            {/* Biodiversity Conservation */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#00703C]/20">01</span>
                <h2 className="text-3xl font-bold text-[#00703C]">Biodiversity Conservation</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work to protect South Africa's rich biodiversity by promoting sustainable land 
                use practices, reforestation, and the preservation of natural habitats. Through 
                community projects, education, and partnerships with conservation groups, we aim 
                to safeguard species and restore ecosystems for a balanced and thriving environment.
              </p>
            </motion.div>

            {/* Climate Action */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#00703C]/20">02</span>
                <h2 className="text-3xl font-bold text-[#00703C]">Climate Action and Resilience</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                UGO is committed to fighting climate change through education, tree-planting 
                initiatives, and programs aimed at reducing carbon emissions. We work with 
                communities to implement climate adaptation strategies that build resilience 
                and foster awareness, helping to prepare for and mitigate the impacts of 
                climate change.
              </p>
            </motion.div>

            {/* Waste Management */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#00703C]/20">03</span>
                <h2 className="text-3xl font-bold text-[#00703C]">Sustainable Waste Management</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We promote sustainable waste practices by engaging with communities, supporting 
                recycling initiatives, and advocating for the implementation of comprehensive 
                waste reduction strategies.
              </p>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Recycling programs and composting initiatives</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Sustainable waste management practices</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Environmental impact minimization strategies</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Pollution control measures for air, water, and soil</p>
                </li>
              </ul>
            </motion.div>

            {/* Sustainable Agriculture */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#00703C]/20">04</span>
                <h2 className="text-3xl font-bold text-[#00703C]">Sustainable Agriculture</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                UGO promotes sustainable agriculture practices that protect natural resources, 
                enhance soil health, and support local food security.
              </p>
              <ul className="space-y-4">
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Working with farmers and communities to implement sustainable practices</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Promoting cost-effective farming methods</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Minimizing environmental impact and chemical use</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Water conservation techniques</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Climate change resilience strategies</p>
                </li>
                <li className="bg-gray-50 p-4 rounded">
                  <p className="text-gray-600">Training programs and demonstration projects</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default WhatWeDoPage;

