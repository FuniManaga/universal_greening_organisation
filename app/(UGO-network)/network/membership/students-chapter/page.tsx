"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaHandsHelping, FaUserTie, FaCertificate, FaFileAlt, FaBriefcase, FaCompass } from 'react-icons/fa';
import Link from 'next/link';

const MembershipPage: React.FC = () => {
  const benefits = [
    {
      icon: <FaCalendarAlt className="text-[#00703C] text-3xl" />,
      title: "Monthly Newsletter",
      description: "Stay informed with educational updates and opportunities"
    },
    {
      icon: <FaGraduationCap className="text-[#00703C] text-3xl" />,
      title: "Priority Event Access",
      description: "First access to workshops and networking events"
    },
    {
      icon: <FaHandsHelping className="text-[#00703C] text-3xl" />,
      title: "Volunteer Opportunities",
      description: "Gain hands-on experience through priority placements"
    },
    {
      icon: <FaUserTie className="text-[#00703C] text-3xl" />,
      title: "Professional Development",
      description: "Personalized workshops and webinars"
    },
    {
      icon: <FaCertificate className="text-[#00703C] text-3xl" />,
      title: "Certification",
      description: "Official membership certificate"
    },
    {
      icon: <FaFileAlt className="text-[#00703C] text-3xl" />,
      title: "Recommendations",
      description: "Professional written recommendations"
    },
    {
      icon: <FaBriefcase className="text-[#00703C] text-3xl" />,
      title: "Work Experience",
      description: "Integrated learning opportunities"
    },
    {
      icon: <FaCompass className="text-[#00703C] text-3xl" />,
      title: "Career Guidance",
      description: "Field-specific career orientation"
    }
  ];

  const ButtonContainer = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex gap-4"
      >
        <Link href="/network/membership/join">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Join membership program"
            className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium transition-colors"
          >
            Join Now
          </motion.button>
        </Link>
        <Link href="/network/membership/learn-more">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Learn more about membership"
            className="px-8 py-4 border-2 border-white text-white text-lg font-medium hover:bg-white hover:text-[#00703C] transition-colors"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#00703C] to-[#004024] h-[85vh]">
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
                Membership
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Join a community of environmental professionals and make a lasting impact
              </motion.p>
              <ButtonContainer />
            </div>
          </div>
        </div>
      </div>

      {/* Membership Fee Banner */}
      <div className="bg-[#00703C] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <span className="text-2xl font-bold">R350</span>
          <span className="ml-2">per annum</span>
        </div>
      </div>

      {/* Quick Links Bar */}
      <div className="bg-[#00703C]/90 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <span className="font-medium">Quick Links:</span>
            <div className="flex gap-8">
              {["Benefits", "Join", "Students", "Professionals"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              Membership Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access exclusive opportunities and resources to advance your environmental career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#00703C]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#00703C] mb-6">
            Ready to Join?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start your journey towards becoming an environmental leader
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
