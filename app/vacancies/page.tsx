"use client"
import React from 'react';
import { motion } from 'framer-motion';

const VacanciesPage: React.FC = () => {
  const benefits = [
    {
      title: "Impact",
      description: "Work on meaningful projects that make a real difference in environmental conservation."
    },
    {
      title: "Growth",
      description: "Opportunities for professional development and learning."
    },
    {
      title: "Innovation",
      description: "Be part of cutting-edge environmental solutions and research."
    },
    {
      title: "Community",
      description: "Join a passionate team dedicated to environmental sustainability."
    }
  ];

  const applicationSteps = [
    'Review our current openings',
    'Submit your application with CV and cover letter',
    'Initial screening and assessment',
    'Interviews with the team',
    'Final selection and offer'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#00703C] to-[#004024] h-[60vh]">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-green-200 text-lg font-medium mb-4"
              >
                Join Our Team
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Career Opportunities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Join our team and make a difference in environmental sustainability
              </motion.p>
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
              {["Current Openings", "Benefits", "How to Apply", "Contact"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Current Openings */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-[#00703C] flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Current Openings
          </h2>
          
          <div className="bg-white p-8 border border-gray-100">
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">There are currently no open positions available.</p>
              <p className="text-sm text-gray-500">
                Please check back later or send us your CV for future opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-[#00703C] flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Why Join Us?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 border border-gray-100 hover:border-green-100 transition-colors"
              >
                <h3 className="text-xl font-semibold text-[#00703C] mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-[#00703C] flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Application Process
          </h2>
          
          <div className="space-y-4">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 border border-gray-100"
              >
                <div className="w-8 h-8 flex items-center justify-center border-2 border-[#00703C] text-[#00703C] font-medium">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 p-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#00703C]">Don't see a suitable position?</h2>
          <p className="text-gray-600 mb-8">
            Send us your CV for future opportunities. We're always looking for talented individuals.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium hover:bg-[#005c32] transition-colors">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default VacanciesPage;

