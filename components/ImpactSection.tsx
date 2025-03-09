"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const impactStats = [
  {
    number: "10K+",
    label: "Trees Planted",
    description: "Native species contributing to carbon sequestration"
  },
  {
    number: "50+",
    label: "Communities",
    description: "Sustainable development projects implemented"
  },
  {
    number: "100+",
    label: "Green Jobs",
    description: "Local employment opportunities created"
  }
];

interface ImpactArea {
  title: string;
  description: string;
  image: string;
  imageCaption?: string;
  badge?: string;
}

const impactAreas: ImpactArea[] = [
  {
    title: "Environmental Conservation",
    description: "Our environmental conservation initiatives focus on protecting South Africa's unique biodiversity through sustainable practices and community engagement. We work to preserve critical ecosystems, restore degraded lands, and implement nature-based solutions that benefit both wildlife and local communities. Through our tree-planting programs and habitat restoration projects, we're creating green corridors that support biodiversity while combating climate change.",
    image: "/hero3.jpg",
    imageCaption: "Conservation efforts in Western Cape",
    badge: "Active Project"
  },
  {
    title: "Community Development",
    description: "At the heart of our work is a commitment to empowering local communities. We believe that sustainable development must benefit the people who depend on natural resources for their livelihoods. Our programs provide training in sustainable resource management, create green job opportunities, and support community-led conservation initiatives. By building local capacity and fostering environmental stewardship, we ensure long-term positive impact.",
    image: "/community.jpeg"
  },
  {
    title: "Sustainable Agriculture",
    description: "Our sustainable agriculture programs promote food security while protecting the environment. We work with local farmers to implement organic farming practices, establish community gardens, and develop efficient irrigation systems. Through training in climate-smart agriculture techniques, we help communities build resilience to environmental challenges while improving their agricultural productivity and economic opportunities.",
    image: "/ph-omara.jpeg"
  }
];

const ImpactSection = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages(prev => [...prev, imageSrc]);
  };

  return (
    <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 
              rounded-full bg-emerald-50 text-emerald-700 text-sm mb-6
              border border-emerald-100"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Our Impact
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold 
              mb-6 text-gray-900 tracking-tight leading-[1.1]"
          >
            Making a Measurable Difference
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed
              max-w-2xl mx-auto"
          >
            Through dedicated efforts and community partnerships, we're creating lasting 
            positive change across South Africa.
          </motion.p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 
          mb-24 sm:mb-32">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 
                shadow-lg transition-all duration-300">
                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-4">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-lg font-semibold text-gray-900 mb-3">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Areas with Enhanced Images */}
        <div className="space-y-24 sm:space-y-32">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Enhanced Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden 
                  shadow-xl bg-emerald-50">
                  {/* Loading Skeleton */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-emerald-100/50 
                    animate-pulse" 
                    style={{ 
                      opacity: loadedImages.includes(area.image) ? 0 : 1,
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  />
                  
                  {/* Main Image */}
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    priority={index === 0}
                    className={`
                      object-cover
                      transition-all duration-700
                      ${loadedImages.includes(area.image) 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                      }
                    `}
                    onLoadingComplete={() => handleImageLoad(area.image)}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b 
                    from-transparent via-transparent to-black/10" />

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 
                    bg-gradient-to-t from-black/20 to-transparent">
                    <p className="text-sm text-white/90 font-medium mix-blend-plus-lighter">
                      {area.imageCaption || area.title}
                    </p>
                  </div>

                  {/* Optional Image Badge */}
                  {area.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 
                      rounded-full bg-white/90 backdrop-blur-sm
                      text-xs font-medium text-emerald-800
                      shadow-lg">
                      {area.badge}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 
                    rounded-full bg-emerald-50 text-emerald-700 text-sm
                    border border-emerald-100">
                    Impact Area {index + 1}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold 
                    text-gray-900">
                    {area.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 sm:mt-32 max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h4 className="text-xl sm:text-2xl font-bold text-emerald-800 mb-4">
              Our Impact in Numbers
            </h4>
            <p className="text-emerald-700">
              Together with our partners, we've made significant strides in 
              environmental conservation and community development across South Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
