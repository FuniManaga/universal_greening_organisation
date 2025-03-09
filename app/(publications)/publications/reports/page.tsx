"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload, FaChartBar, FaGlobe } from 'react-icons/fa';

const ReportsPage: React.FC = () => {
  const reports = [
    {
      icon: <FaChartBar className="text-green-500 text-3xl" />,
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of our environmental initiatives and their impact.",
      date: "December 2023",
      type: "Annual Report"
    },
    {
      icon: <FaGlobe className="text-green-500 text-3xl" />,
      title: "Sustainability Assessment",
      description: "Detailed analysis of sustainable practices and future recommendations.",
      date: "October 2023",
      type: "Technical Report"
    },
    {
      icon: <FaFileAlt className="text-green-500 text-3xl" />,
      title: "Community Engagement Study",
      description: "Analysis of community involvement in environmental programs.",
      date: "September 2023",
      type: "Research Report"
    },
    {
      icon: <FaChartBar className="text-green-500 text-3xl" />,
      title: "Green Schools Progress Report",
      description: "Evaluation of the Green Schools Programme implementation.",
      date: "August 2023",
      type: "Progress Report"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-green-600 via-green-700 to-green-900">
        <div className="absolute inset-0">
          <Image
            src="/publications/reports-hero.jpg"
            alt="UGO Reports and Publications"
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
                Reports & Publications
              </h1>
              <p className="text-base md:text-lg text-green-100 max-w-2xl leading-relaxed">
                Access our latest research, impact assessments, and environmental reports
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-full">
                      {report.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {report.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {report.description}
                          </p>
                        </div>
                        <button className="p-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors">
                          <FaDownload className="text-lg" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {report.date}
                        </span>
                        <span className="px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                          {report.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search/Filter Section */}
      <section className="py-12 bg-green-50 dark:bg-green-900/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-auto">
              <input
                type="search"
                placeholder="Search reports..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">All Types</option>
                <option value="annual">Annual Reports</option>
                <option value="technical">Technical Reports</option>
                <option value="research">Research Reports</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">All Years</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportsPage;

