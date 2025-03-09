"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const OurVisionPage: React.FC = () => {
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
            src="/hero3.jpg"
            alt="Vision Background"
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
                Looking Forward
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              >
                Our Vision for a{' '}
                <span className="text-[#4ADE80]">Sustainable</span> Future
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              >
                Building a sustainable future through environmental conservation, community 
                empowerment, and regional collaboration across Southern Africa.
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

      {/* Rest of the content */}
      <div className="bg-white py-16">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vision Sections */}
          <div className="space-y-24">
            {/* Vision 2030 Section */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold text-[#00703C]">Vision 2030</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision extends across all 16 countries of the Southern African Development Community (SADC), aiming to create a network of environmental stewardship and sustainable development initiatives throughout the region.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through strategic partnerships, community engagement, and innovative programs, we're working to build a more sustainable and environmentally conscious Southern Africa. Our approach focuses on three key pillars:
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold text-[#00703C] mb-2">Environmental Conservation</h3>
                    <p className="text-gray-600">Protecting biodiversity, restoring ecosystems, and promoting sustainable resource management across the region.</p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold text-[#00703C] mb-2">Community Empowerment</h3>
                    <p className="text-gray-600">Building capacity in local communities through education, training, and sustainable livelihood programs.</p>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold text-[#00703C] mb-2">Regional Collaboration</h3>
                    <p className="text-gray-600">Fostering partnerships across borders to address shared environmental challenges and opportunities.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src="/f5.jpeg"
                  alt="SADC Region Map"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Implementation Section */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold text-[#00703C]">Implementation</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision is brought to life through carefully designed programs and initiatives that create lasting impact. We focus on sustainable implementation through:
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Local partnerships that ensure our initiatives are culturally appropriate and community-driven. We work closely with traditional leaders, local governments, and community organizations to develop and implement our programs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Innovation and technology play a crucial role in our implementation strategy. We leverage digital tools for monitoring, reporting, and engaging with communities across the region.
                </p>
                <motion.div variants={itemVariants} className="bg-gray-50 p-6">
                  <blockquote className="text-lg font-medium text-gray-900 italic">
                    "Our vision is not just about environmental conservation – it's about creating a sustainable future where communities thrive in harmony with nature."
                  </blockquote>
                </motion.div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src="/ph-omara.jpeg"
                  alt="Implementation"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default OurVisionPage;
