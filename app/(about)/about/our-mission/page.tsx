"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const OurMissionPage: React.FC = () => {
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
      {/* Enhanced Hero Section */}
      <div className="relative bg-[#00703C] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/mission.JPG"
            alt="Mission Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                variants={itemVariants} 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm 
                  bg-white/10 text-white text-sm mb-6 backdrop-blur-sm"
              >
                Our Purpose
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              >
                Driving{' '}
                <span className="text-[#4ADE80]">Environmental</span> Change
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              >
                To drive sustainable environmental change in South Africa through community 
                empowerment and hands-on conservation initiatives.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 fill-white"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48h1440V0c-211.52 35.79-421.588 48-630.203 48C601.181 48 391.113 35.79 0 0v48z"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-24">
            {/* Mission Statement Section */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold text-[#00703C]">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To drive sustainable environmental change in South Africa through community empowerment, 
                  and hands-on conservation initiatives. We are committed to protecting and preserving 
                  existing ecosystems, preventing environmental degradation, and promoting biodiversity 
                  conservation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through community education and active engagement, we work to create sustainable 
                  solutions for current and future generations. By educating and collaborating with 
                  communities and stakeholders, UGO aims to build a greener, healthier future for all.
                </p>
              </motion.div>
            </motion.div>

            {/* SDG Alignment Section */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#00703C] mb-4">SDG Alignment</h2>
                <p className="text-lg text-gray-600">
                  We align our work with several United Nations Sustainable Development Goals (SDGs), 
                  focusing on key areas where we can make the most significant impact:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* SDG 13 */}
                <motion.div variants={itemVariants} className="bg-gray-50 p-6 space-y-4">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-[#3F7E44] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#00703C]">SDG 13: Climate Action</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Meaning</h4>
                      <p className="text-gray-600">
                        This goal calls for urgent action to combat climate change and its impacts. 
                        It emphasizes the need for climate resilience, disaster preparedness, and 
                        reducing greenhouse gas emissions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">UGO's Contribution</h4>
                      <p className="text-gray-600">
                        UGO's climate resilience programs, tree planting initiatives, and educational 
                        outreach aim to reduce carbon footprints and raise awareness about climate 
                        adaptation and mitigation.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* SDG 14 */}
                <motion.div variants={itemVariants} className="bg-gray-50 p-6 space-y-4">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-[#0A97D9] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#00703C]">SDG 14: Life Below Water</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Meaning</h4>
                      <p className="text-gray-600">
                        This goal focuses on conserving and sustainably using the oceans, seas, and 
                        marine resources for sustainable development.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">UGO's Contribution</h4>
                      <p className="text-gray-600">
                        Through coastal cleanup initiatives, marine conservation programs, and reducing 
                        plastic pollution, UGO works to protect marine ecosystems and promote sustainable 
                        coastal development.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* SDG 15 */}
                <motion.div variants={itemVariants} className="bg-gray-50 p-6 space-y-4">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-[#56C02B] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#00703C]">SDG 15: Life on Land</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Meaning</h4>
                      <p className="text-gray-600">
                        This goal focuses on protecting, restoring, and promoting the sustainable use 
                        of terrestrial ecosystems, managing forests, combating desertification, and 
                        halting biodiversity loss.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">UGO's Contribution</h4>
                      <p className="text-gray-600">
                        Through biodiversity management, reforestation projects, and community 
                        conservation programs, UGO works to preserve natural habitats, protect species, 
                        and promote sustainable land use practices.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default OurMissionPage;
