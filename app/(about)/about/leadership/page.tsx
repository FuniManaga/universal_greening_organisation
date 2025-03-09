"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { leadershipTeam } from '@/data/leadershipTeam';

const LeadershipPage = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative bg-[#00703C] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/f3.jpeg"
            alt="Leadership Team"
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
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              >
                Our <span className="text-[#4ADE80]">Leadership</span> Team
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              >
                Meet the dedicated individuals driving environmental change and 
                sustainable solutions for future generations.
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
            <path d="M0 48h1440V0c-211.52 35.79-421.588 48-630.203 48C601.181 48 391.113 35.79 0 0v48z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Categories */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Executive', 'Directors', 'Non-Executive'].map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${category === 'All' 
                    ? 'bg-[#00703C] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                
                {/* Member Info Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 
                  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{member.position}</p>
                  
                  <div className="flex items-center gap-4">
                    {member.socialMedia?.linkedin && (
                      <a
                        href={member.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.socialMedia?.twitter && (
                      <a
                        href={member.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                    <Link 
                      href={`/leadership/${index}`}
                      className="ml-auto px-4 py-1.5 bg-white/90 text-gray-900 text-sm font-medium 
                        rounded-full hover:bg-white transition-colors"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 py-16 border-t border-gray-100"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-[#00703C] mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600"
            >
              Together, our leadership team is committed to driving environmental change 
              and creating sustainable solutions for future generations. Through innovation, 
              dedication, and collaboration, we work tirelessly to protect and preserve 
              our natural environment.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadershipPage;

