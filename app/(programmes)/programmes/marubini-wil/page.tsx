"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaHandshake, FaChartLine, FaUserTie, FaLaptopCode } from 'react-icons/fa';

const MarubiniWILPage: React.FC = () => {
  const programmes = [
    {
      icon: <FaGraduationCap className="text-[#00703C] text-4xl" />,
      title: "Work Integrated Learning",
      description: "Structured learning experiences in professional work environments."
    },
    {
      icon: <FaBriefcase className="text-[#00703C] text-4xl" />,
      title: "Job Placement",
      description: "Direct placement opportunities with our industry partners."
    },
    {
      icon: <FaHandshake className="text-[#00703C] text-4xl" />,
      title: "Mentorship",
      description: "Professional guidance from industry experts and leaders."
    },
    {
      icon: <FaLaptopCode className="text-[#00703C] text-4xl" />,
      title: "Skills Development",
      description: "Practical training in industry-relevant skills and technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - GreenCape Style */}
      <div className="relative h-[85vh]">
        <Image
          src="/ug1.jpeg"
          alt="Marubini WIL Programme"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-green-200 text-lg font-medium mb-4"
              >
                Universal Greening Organisation
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Marubini Mugivhi WIL & Placement Programme
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Bridging the gap between education and industry through practical experience
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium rounded-none transition-colors">
                  Apply Now
                </button>
                <button className="px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-none hover:bg-white hover:text-[#00703C] transition-colors">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Bar - GreenCape Style */}
      <div className="bg-[#00703C] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <span className="font-medium">Quick Links:</span>
            <div className="flex gap-8">
              {["Programme Overview", "Components", "Apply", "Partners"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section - GreenCape Style */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00703C] mb-6">Programme Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our Work Integrated Learning Programme provides students with hands-on experience 
                in their chosen field, bridging the gap between academic knowledge and practical 
                workplace skills.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Professional Development", "Industry Experience", "Career Growth"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#00703C]/10 text-[#00703C] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/ugo7.jpeg"
                alt="Students in professional environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programme Components - GreenCape Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              Programme Components
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive development through practical experience and professional guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programmes.map((programme, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{programme.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#00703C]">
                  {programme.title}
                </h3>
                <p className="text-gray-600">
                  {programme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - GreenCape Style */}
      <section className="py-16 bg-[#00703C] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Students Placed" },
              { number: "50+", label: "Partner Companies" },
              { number: "90%", label: "Employment Rate" },
              { number: "12", label: "Industry Sectors" }
            ].map((stat, index) => (
              <div key={index} className="text-center border border-white/20 p-8">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - GreenCape Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#00703C] mb-6">
            Start Your Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Take the first step towards your professional development
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default MarubiniWILPage;

