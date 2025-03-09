"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const VideosPage = () => {
  const videos = [
    {
      title: "UGO-IUCN 2024 Arbour celebration",
      thumbnail: "https://youtu.be/8h9HyUITHSw?si=ILf9xTooc-VcM7Wo",
      duration: "3:45",
      category: "Projects",
      description: "Watch our team plant indigenous trees across communities",
      date: "Dec 2023"
    },
    {
      title: "UGO FELLOWSHIP 2024 COHORT",
      thumbnail: "https://youtu.be/PFbvvUYLlPE?si=ccNpo7vRANj2yWV2",
      duration: "5:20",
      category: "Education",
      description: "Community workshop on environmental conservation",
      date: "Nov 2023"
    },
    // Add more videos as needed
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
                Media Gallery
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-white mt-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our Videos
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
              Explore our environmental initiatives and community impact through video content
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['All', 'Projects', 'Education', 'Events', 'Interviews'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm text-green-700 bg-green-50 rounded-full hover:bg-green-100 transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-green-500/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 text-xs text-white bg-black/70 rounded-md">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full mb-2">
                  {video.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {video.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {video.date}
                  </span>
                  <button className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
                    Watch Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 text-sm text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Load More Videos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;

