"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaFileAlt, FaSeedling, FaHandshake } from 'react-icons/fa';

const SmallGrantsPage: React.FC = () => {
  const grantFeatures = [
    {
      icon: <FaHandHoldingHeart className="text-[#00703C] text-4xl" />,
      title: "Community Impact",
      description: "Supporting projects that create meaningful change in local communities."
    },
    {
      icon: <FaFileAlt className="text-[#00703C] text-4xl" />,
      title: "Simple Process",
      description: "Streamlined application and reporting requirements."
    },
    {
      icon: <FaSeedling className="text-[#00703C] text-4xl" />,
      title: "Quick Start",
      description: "Rapid funding decisions to help projects get started quickly."
    },
    {
      icon: <FaHandshake className="text-[#00703C] text-4xl" />,
      title: "Ongoing Support",
      description: "Guidance and support throughout the project lifecycle."
    }
  ];

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
                Universal Greening Organisation
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Small Grants Program
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Supporting grassroots initiatives and community-driven environmental projects
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium rounded-none transition-colors">
                  Apply for Grant
                </button>
                <button className="px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-none hover:bg-white hover:text-[#00703C] transition-colors">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Bar */}
      <div className="bg-[#00703C] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <span className="font-medium">Quick Links:</span>
            <div className="flex gap-8">
              {["About", "Features", "How to Apply", "Contact"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00703C] mb-6">About the Program</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our Small Grants Program provides funding support to NGOs and community organizations 
                working on environmental conservation, sustainability, and community development projects. 
                Grants range from $1,000 to $10,000 per project.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Community Projects", "Environmental Conservation", "Sustainable Development"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#00703C]/10 text-[#00703C] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00703C]/10 to-[#00703C]/5 p-8 h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#00703C]">Focus Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaSeedling className="text-[#00703C]" />
                    <span>Environmental Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHandHoldingHeart className="text-[#00703C]" />
                    <span>Community Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHandshake className="text-[#00703C]" />
                    <span>Sustainable Initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              Program Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting community initiatives with accessible funding and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {grantFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#00703C]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              How to Apply
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple four-step application process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Review Guidelines",
              "Submit Proposal",
              "Project Review",
              "Grant Award"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#00703C]/10 rounded-none flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00703C] font-bold">{index + 1}</span>
                </div>
                <h3 className="text-gray-900 font-medium">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#00703C] mb-6">
            Apply for a Grant
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Start your application today and bring your community project to life.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Start Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default SmallGrantsPage;

