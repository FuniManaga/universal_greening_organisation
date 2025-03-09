"use client"
import React from 'react';
import { motion } from 'framer-motion';

const StakeholdersPage: React.FC = () => {
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
                Our Network
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Our Stakeholders
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Working together with key partners and organizations to create lasting environmental impact
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
              {["Partners", "SDG Alignment", "Get Involved"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00703C] flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Partnerships and Collaborations
          </h2>
          
          <div className="grid gap-8">
            {[
              {
                name: "Roots Africa",
                logo: "/logos/roots-africa.png",
                link: "https://www.roots-africa.org"
              },
              {
                name: "University of Venda",
                logo: "/logos/images.png",
                link: "https://www.univen.ac.za"
              },
              {
                name: "Green Log",
                logo: "/logos/green-log.png",
                link: "https://www.greenlog.com"
              },
              {
                name: "IUCN",
                logo: "/logos/images.jpeg",
                link: "https://www.iucn.org"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-6 border border-gray-100 rounded-xl hover:border-green-100 transition-colors duration-300"
              >
                <div className="flex items-center gap-8">
                  <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00703C] transition-colors duration-300">
                    <a href={partner.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {partner.name}
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[#00703C] flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            UN SDG Alignment
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SDG 13 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#00703C]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#00703C]">SDG 13</h3>
                  <p className="text-sm text-[#00703C]/80">Climate Action</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#00703C] rounded-full"></span>
                  <span>Strengthening resilience to climate-related hazards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#00703C] rounded-full"></span>
                  <span>Integrating climate change measures into policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#00703C] rounded-full"></span>
                  <span>Promoting climate change awareness</span>
                </li>
              </ul>
            </motion.div>

            {/* SDG 15 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#00703C]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌳</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#00703C]">SDG 15</h3>
                  <p className="text-sm text-[#00703C]/80">Life on Land</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#00703C] rounded-full"></span>
                  <span>Protecting and restoring terrestrial ecosystems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#00703C] rounded-full"></span>
                  <span>Promoting sustainable forest management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-[#00703C] rounded-full"></span>
                  <span>Combating desertification and biodiversity loss</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#00703C] mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in our mission to create sustainable environmental solutions globally. 
            We're always looking for partners who share our vision.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default StakeholdersPage;
