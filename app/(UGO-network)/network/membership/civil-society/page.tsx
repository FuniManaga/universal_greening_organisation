"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaUsers, FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';

const CivilSocietyMembershipPage: React.FC = () => {
  const benefits = [
    {
      icon: <FaHandsHelping className="text-green-500 text-3xl" />,
      title: "Collaboration",
      description: "Connect and collaborate with like-minded organizations and initiatives."
    },
    {
      icon: <FaUsers className="text-green-500 text-3xl" />,
      title: "Network Access",
      description: "Join a vibrant network of civil society organizations and change-makers."
    },
    {
      icon: <FaLightbulb className="text-green-500 text-3xl" />,
      title: "Resources",
      description: "Access valuable resources, training, and support for your initiatives."
    },
    {
      icon: <FaHandHoldingHeart className="text-green-500 text-3xl" />,
      title: "Impact",
      description: "Amplify your impact through collective action and shared knowledge."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[450px] bg-gradient-to-br from-green-600 via-green-700 to-green-900">
        <div className="absolute inset-0">
          <Image
            src="/network/civil-society-hero.jpg"
            alt="Civil Society Network"
            fill
            priority
            className="object-cover mix-blend-overlay opacity-30"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/50 to-green-950/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="inline-block text-green-200 text-sm font-medium">
                Universal Greening Organisation
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Civil Society Membership
              </h1>
              <p className="text-base md:text-lg text-green-100 max-w-2xl leading-relaxed">
                Join a network of organizations dedicated to environmental and social change
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <button className="px-5 py-2.5 bg-white text-green-700 hover:bg-green-50 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl mr-3 text-sm">
                  Join Now
                </button>
                <button className="px-5 py-2.5 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-medium transition-colors duration-300 text-sm">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <motion.section 
        className="py-16 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              About Civil Society Membership
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Our Civil Society Membership programme brings together organizations and individuals 
              committed to environmental conservation and sustainable development. Join a community 
              that shares knowledge, resources, and opportunities for collective impact.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                Environmental Action
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                Community Building
              </span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                Sustainable Development
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Membership Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Membership Benefits
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join our network and access exclusive benefits and opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-green-50 dark:bg-green-900/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Join Our Network
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Ready to make a difference? Join our civil society network today.
          </p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-300 text-sm">
            Apply for Membership
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default CivilSocietyMembershipPage;

