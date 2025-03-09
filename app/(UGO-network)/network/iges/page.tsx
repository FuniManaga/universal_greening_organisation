"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAfrica, FaHandshake, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

const IGESNetworkPage: React.FC = () => {
  const networkFeatures = [
    {
      icon: <FaGlobeAfrica className="text-[#00703C] text-4xl" />,
      title: "Global Network",
      description: "Connect with environmental stakeholders worldwide."
    },
    {
      icon: <FaHandshake className="text-[#00703C] text-4xl" />,
      title: "Collaboration",
      description: "Foster partnerships for sustainable development initiatives."
    },
    {
      icon: <FaUsers className="text-[#00703C] text-4xl" />,
      title: "Community",
      description: "Join a community of environmental change-makers."
    },
    {
      icon: <FaLightbulb className="text-[#00703C] text-4xl" />,
      title: "Knowledge Sharing",
      description: "Access and share environmental expertise and resources."
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
                IGES Network
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                International Green Environmental Sustainability Network
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium rounded-none transition-colors">
                  Join Network
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
              {["About", "Network Benefits", "Summit History", "Join"].map((link) => (
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
              <h2 className="text-3xl font-bold text-[#00703C] mb-6">About IGES</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The International Green Economy Summit (IGES) is a global conference and platform 
                that brings together thought leaders, policymakers, industry experts, and activists 
                from around the world. The summit focuses on addressing pressing environmental 
                challenges and promoting sustainable development through innovative solutions and 
                international collaboration.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Global Collaboration", "Sustainable Development", "Environmental Innovation"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#00703C]/10 text-[#00703C] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00703C]/10 to-[#00703C]/5 p-8 h-full">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#00703C]">Summit History</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#00703C] pl-4">
                    <h4 className="font-medium text-[#00703C]">1st Green Economy Summit</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Inaugural summit in 2015, supported by LEDET, focusing on implementing 
                      sustainable development through practical plans.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#00703C] pl-4">
                    <h4 className="font-medium text-[#00703C]">Subsequent Summits</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Continued success led to 2nd and 3rd summits, expanding international 
                      collaboration and impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              Network Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a global community dedicated to environmental sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkFeatures.map((feature, index) => (
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
            Join Our Network
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with environmental leaders and organizations worldwide.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};

export default IGESNetworkPage;

