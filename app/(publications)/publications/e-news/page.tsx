"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const ENewsPage = () => {
  const news = [
    {
      title: "UGO Plants 10,000 Indigenous Trees in Local Communities",
      category: "Projects",
      date: "Dec 15, 2023",
      image: "/news1.jpg",
      excerpt: "Recent tree planting initiative reaches milestone in support of national mandate...",
      readTime: "5 min read",
      author: {
        name: "UGO Team",
        image: "/ugo.png"
      }
    },
    {
      title: "Environmental Workshop Series Launches at Schools",
      category: "Education",
      date: "Dec 10, 2023",
      image: "/news2.jpg",
      excerpt: "New educational program aims to raise awareness about environmental conservation...",
      readTime: "4 min read",
      author: {
        name: "Environmental Team",
        image: "/ugo.png"
      }
    },
    // Add more news items
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full bg-green-800 mb-16"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-100 bg-green-800/50 rounded-full backdrop-blur-sm border border-green-700/50">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Latest Updates
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-white mt-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Environmental News
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto mb-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <motion.p 
              className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Stay updated with our latest environmental initiatives, projects, and community impact
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['All', 'Projects', 'Education', 'Events', 'Community'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm text-green-700 bg-green-50 rounded-full hover:bg-green-100 transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-[16/10] md:aspect-auto">
                <Image
                  src="/featured-news.jpg"
                  alt="Featured News"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full mb-4">
                  Featured Story
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  UGO's Impact on Environmental Conservation in 2023
                </h2>
                <p className="text-gray-600 mb-6">
                  A comprehensive look at our achievements in tree planting, community engagement, and environmental education throughout the year.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/ugo.png"
                      alt="Author"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">UGO Team</p>
                      <p className="text-xs text-gray-500">Dec 20, 2023</p>
                    </div>
                  </div>
                  <Link 
                    href="/e-news/featured"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-white rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={article.author.image}
                      alt={article.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-xs text-gray-900">{article.author.name}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 text-sm text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Load More News
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ENewsPage;
