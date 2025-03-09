"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaRecycle, FaSeedling, FaSolarPanel, FaUsers, FaChalkboardTeacher, FaTree, FaLeaf } from 'react-icons/fa';

const GreenSchoolsPage: React.FC = () => {
  const initiatives = [
    {
      icon: <FaChalkboardTeacher className="text-[#00703C] text-4xl" />,
      title: "Environmental Education",
      description: "Comprehensive curriculum integrating environmental awareness and sustainability principles."
    },
    {
      icon: <FaRecycle className="text-[#00703C] text-4xl" />,
      title: "Waste Management",
      description: "Implementation of recycling programs and waste reduction strategies in schools."
    },
    {
      icon: <FaSolarPanel className="text-[#00703C] text-4xl" />,
      title: "Energy Conservation",
      description: "Promoting renewable energy use and energy-efficient practices in educational institutions."
    },
    {
      icon: <FaTree className="text-[#00703C] text-4xl" />,
      title: "Biodiversity Projects",
      description: "School gardens and conservation projects to promote biodiversity awareness."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - GreenCape Style */}
      <div className="relative h-[85vh]">
        <Image
          src="/ugo2.jpeg"
          alt="Green Schools Programme"
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
                Green Schools Programme
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Transforming education through environmental stewardship and sustainable practices
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium rounded-none transition-colors">
                  Get Started
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
              {["Programme Overview", "Initiatives", "Impact", "Join Us"].map((link) => (
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
                The Green Schools Programme is a comprehensive initiative designed to transform 
                educational institutions into sustainable environments. We work with schools to 
                implement eco-friendly practices, develop environmental curricula, and create 
                awareness about sustainability among students and staff.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Environmental Education", "Sustainable Practices", "Student Engagement"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#00703C]/10 text-[#00703C] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/kids.jpeg"
                alt="Green School Activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives - GreenCape Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              Programme Components
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our holistic approach encompasses various aspects of environmental education 
              and sustainable practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{initiative.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#00703C]">
                  {initiative.title}
                </h3>
                <p className="text-gray-600">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - GreenCape Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#00703C] mb-6">
            Join the Green Schools Movement
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Make your school a part of this transformative journey towards sustainability. 
            Together, we can create a greener future for the next generation.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Register Your School
          </button>
        </div>
      </section>
    </div>
  );
};

export default GreenSchoolsPage;

