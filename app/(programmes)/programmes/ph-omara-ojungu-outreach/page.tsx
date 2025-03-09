"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaSeedling, FaGraduationCap } from 'react-icons/fa';

const PhoMaraOjunguPage: React.FC = () => {
  const initiatives = [
    {
      icon: <FaHandHoldingHeart className="text-[#00703C] text-4xl" />,
      title: "Community Support",
      description: "Providing essential resources and support to vulnerable communities."
    },
    {
      icon: <FaSeedling className="text-[#00703C] text-4xl" />,
      title: "Sustainable Agriculture",
      description: "Teaching sustainable farming practices for food security."
    },
    {
      icon: <FaGraduationCap className="text-[#00703C] text-4xl" />,
      title: "Education Access",
      description: "Improving access to quality education for rural communities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - GreenCape Style */}
      <div className="relative h-[85vh]">
        <Image
          src="/e1.jpeg"
          alt="Ph OMara Ojungu Community Outreach"
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
                Ph Omara Ojungu Outreach
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Empowering communities through sustainable development and environmental conservation
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium rounded-none transition-colors">
                  Support Our Work
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
              {["Our Mission", "Initiatives", "Impact", "Get Involved"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section - GreenCape Style */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00703C] mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The Ph Omara Ojungu Outreach Programme aims to transform rural communities through 
                sustainable development initiatives, environmental conservation, and community empowerment.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Community Development", "Environmental Conservation", "Sustainable Agriculture"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#00703C]/10 text-[#00703C] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative h-[200px] overflow-hidden">
                  <Image
                    src={`/outreach/activity-${index}.jpg`}
                    alt={`Community activity ${index}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics - GreenCape Style */}
      <section className="py-16 bg-[#00703C] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Community Members" },
              { number: "50+", label: "Projects" },
              { number: "20", label: "Communities" },
              { number: "5000+", label: "Trees Planted" }
            ].map((stat, index) => (
              <div key={index} className="text-center border border-white/20 p-8">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section - GreenCape Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              Our Initiatives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive community development through sustainable practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
            Join Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Help us create sustainable change in communities.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Support Our Work
          </button>
        </div>
      </section>
    </div>
  );
};

export default PhoMaraOjunguPage;



