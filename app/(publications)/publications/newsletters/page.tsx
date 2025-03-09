"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaNewspaper, FaCalendarAlt, FaDownload, FaSearch, FaFilter } from 'react-icons/fa';

const NewslettersPage: React.FC = () => {
  const newsletters = [
    {
      title: "Environmental Impact Q1 2024",
      date: "March 2024",
      category: "Quarterly Report",
      description: "Quarterly updates on our environmental initiatives and community impact.",
      imageUrl: "/newsletters/q1-2024.jpg"
    },
    {
      title: "Green Innovation Spotlight",
      date: "February 2024",
      category: "Special Feature",
      description: "Featuring breakthrough environmental technologies and solutions.",
      imageUrl: "/newsletters/innovation-2024.jpg"
    },
    {
      title: "Community Action Report",
      date: "January 2024",
      category: "Community",
      description: "Highlighting our community engagement and local environmental projects.",
      imageUrl: "/newsletters/community-2024.jpg"
    },
    {
      title: "Year in Review 2023",
      date: "December 2023",
      category: "Annual Report",
      description: "Annual summary of achievements and environmental impact.",
      imageUrl: "/newsletters/review-2023.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Improved contrast and readability */}
      <div className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-green-600 via-green-700 to-green-900">
        <div className="absolute inset-0">
          <Image
            src="/publications/newsletters-hero.jpg"
            alt="UGO Newsletters"
            fill
            priority
            className="object-cover mix-blend-overlay opacity-25"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 to-green-950/80">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="inline-block text-green-200 text-sm font-medium tracking-wide">
                Universal Greening Organisation
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                UGO Newsletters
              </h1>
              <p className="text-base md:text-lg text-green-100 max-w-2xl leading-relaxed">
                Stay updated with our latest environmental initiatives and community impact
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 max-w-6xl py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search newsletters..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm focus:ring-2 focus:ring-green-500 dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors duration-300">
                <FaFilter className="mr-2" />
                Filter
              </button>
              <select className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium border-0">
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>By Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletters Grid - Improved card design */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Latest Publications
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Access our collection of newsletters covering environmental initiatives and updates
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsletters.map((newsletter, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-[220px] group">
                  <Image
                    src={newsletter.imageUrl}
                    alt={newsletter.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                    {newsletter.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-green-600 dark:text-green-400 text-sm mb-2">
                    <FaCalendarAlt className="mr-2" />
                    {newsletter.date}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {newsletter.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {newsletter.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition-colors duration-300">
                      <FaDownload className="mr-2" />
                      Download PDF
                    </button>
                    <button className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium">
                      Read Online
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section - Enhanced design */}
      <motion.section
        className="py-16 bg-green-50 dark:bg-green-900/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Stay Updated
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto">
              Subscribe to receive our newsletters directly in your inbox. Get the latest updates on our environmental initiatives.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-green-500 dark:text-white"
              />
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-300 text-sm whitespace-nowrap shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default NewslettersPage;

