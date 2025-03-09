"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingUsd, FaChartLine, FaUserTie, FaTools, FaGraduationCap, FaHandshake, FaLightbulb, FaSeedling } from 'react-icons/fa';

const SMMESCapitalPage: React.FC = () => {
  const fundFeatures = [
    {
      icon: <FaHandHoldingUsd className="text-[#00703C] text-4xl" />,
      title: "Financial Support",
      description: "Access to capital for business growth and development needs."
    },
    {
      icon: <FaUserTie className="text-[#00703C] text-4xl" />,
      title: "Business Mentorship",
      description: "Expert guidance from experienced business professionals."
    },
    {
      icon: <FaTools className="text-[#00703C] text-4xl" />,
      title: "Resource Access",
      description: "Essential tools and resources for business success."
    },
    {
      icon: <FaChartLine className="text-[#00703C] text-4xl" />,
      title: "Growth Planning",
      description: "Strategic support for sustainable business expansion."
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
                SMMES Capital Fund
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Empowering small, medium and micro enterprises with the capital they need to grow
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium rounded-none transition-colors">
                  Apply for Funding
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
              {["About", "Features", "Apply", "Contact"].map((link) => (
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
              <h2 className="text-3xl font-bold text-[#00703C] mb-6">About the Fund</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The SMMES Capital Fund is designed to support and empower small, medium, and micro 
                enterprises by providing essential capital and resources needed for sustainable growth 
                and development. We focus on businesses that demonstrate potential for growth and 
                job creation.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Business Growth", "Job Creation", "Sustainable Development"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#00703C]/10 text-[#00703C] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00703C]/10 to-[#00703C]/5 p-8 h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#00703C]">Key Focus Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaSeedling className="text-[#00703C]" />
                    <span>Sustainable Business Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLightbulb className="text-[#00703C]" />
                    <span>Innovation Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHandshake className="text-[#00703C]" />
                    <span>Business Partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for SMME growth and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fundFeatures.map((feature, index) => (
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

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#00703C] mb-6">
            Grow Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to take your business to the next level? Apply for SMMES Capital funding today.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SMMESCapitalPage;

