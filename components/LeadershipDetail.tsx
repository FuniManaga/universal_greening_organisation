"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

interface LeadershipDetailProps {
  member: {
    name: string;
    position: string;
    image: string;
    bio: string;
    achievements?: string[];
    expertise?: string[];
    quote?: string;
    education?: {
      degree?: string;
      institution?: string;
      period?: string;
      year?: string;
      certification?: string;
      status?: string;
      researchFocus?: string;
    }[];
    experience: {
      years?: string | number;
      sectors?: string[];
      currentRoles?: string[];
      current_role?: {
        title: string;
        organization: string;
        focus: string;
        start: string;
      };
      career_history?: any[];
      projectsLed?: number;
      teamSize?: number;
      highlights?: string[];
    };
    socialMedia?: {
      linkedin?: string;
      twitter?: string;
    };
  };
}

const LeadershipDetail: React.FC<LeadershipDetailProps> = ({ member }) => {
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
    <>
      {/* Hero Section with Background */}
      <div className="relative bg-[#00703C] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/f2.jpeg"
            alt="Leadership Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{member.name}</h1>
                <p className="text-xl text-white/80">{member.position}</p>
              </div>

              {member.quote && (
                <blockquote className="text-lg italic text-white/90 border-l-4 border-white/20 pl-4">
                  "{member.quote}"
                </blockquote>
              )}

              <p className="text-white/80 leading-relaxed">{member.bio}</p>

              {/* Social Links */}
              {member.socialMedia && (
                <div className="flex gap-4">
                  {member.socialMedia.linkedin && (
                    <a
                      href={member.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {member.socialMedia.twitter && (
                    <a
                      href={member.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      <FaTwitter size={24} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              variants={itemVariants} 
              className="relative aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden shadow-2xl 
                ring-1 ring-black/5 transform lg:hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00703C]/20 to-transparent z-10"/>
              
              {/* Main Image */}
              <Image
                src={member.image || '/default-profile.jpg'} // Fallback image
                alt={member.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={95}
              />

              {/* Optional: Image Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </motion.div>

            {/* Optional: Image Caption */}
            <motion.div 
              variants={itemVariants}
              className="mt-4 text-center text-sm text-white/60 hidden lg:block"
            >
              {member.position} at Universal Greening Organisation
            </motion.div>
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Experience */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#00703C] mb-4">Experience</h2>
              {member.experience.current_role && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Current Role</h3>
                  <p className="text-gray-600">{member.experience.current_role.title}</p>
                  <p className="text-gray-600">{member.experience.current_role.organization}</p>
                  <p className="text-sm text-gray-500">Since {member.experience.current_role.start}</p>
                </div>
              )}
              {member.experience.highlights && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Highlights</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {member.experience.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Expertise */}
            {member.expertise && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#00703C] mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#00703C]/10 text-[#00703C] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            {member.education && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#00703C] mb-4">Education</h2>
                <div className="space-y-4">
                  {member.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-[#00703C]/20 pl-4">
                      {edu.degree && <p className="font-semibold text-gray-900">{edu.degree}</p>}
                      {edu.institution && <p className="text-gray-600">{edu.institution}</p>}
                      {edu.year && <p className="text-sm text-gray-500">{edu.year}</p>}
                      {edu.researchFocus && (
                        <p className="text-sm text-gray-600 mt-2">
                          Research Focus: {edu.researchFocus}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {member.achievements && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#00703C] mb-4">Key Achievements</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {member.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default LeadershipDetail;
