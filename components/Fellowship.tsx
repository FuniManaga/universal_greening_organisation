"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Fellowship = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm 
            bg-[#00703C] text-white text-sm mb-6">
            UGO Fellowship 2024
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Transforming Lives Through Leadership
          </h2>
          
          <p className="text-lg text-gray-600">
            Empowering the next generation of environmental leaders through immersive 
            learning and hands-on experience.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#00703C]">
                Empowering Future Environmental Leaders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The UGO Fellowship 2024 cohort brings together 12 exceptional students from 
                disadvantaged backgrounds, providing them with a transformative 90-day experience 
                in sustainability leadership and global citizenship.
              </p>
            </div>

            {/* Fellowship Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Intensive Leadership Training",
                  description: "Comprehensive modules covering environmental leadership and project management"
                },
                {
                  title: "Global Experience",
                  description: "First-time international travel and cross-border exchange programs"
                },
                {
                  title: "Practical Projects",
                  description: "Hands-on experience with real-world sustainability initiatives"
                },
                {
                  title: "Mentorship",
                  description: "One-on-one guidance from industry experts and environmental leaders"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="relative p-6 bg-gray-50 border-l-4 border-[#00703C] 
                    hover:shadow-md transition-all duration-300">
                    <h4 className="text-base font-bold mb-2 text-[#00703C]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/fellowship.jpeg"
                alt="UGO Fellowship Training"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "12", label: "Fellows" },
                { number: "90", label: "Days" },
                { number: "100%", label: "Hands-on" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 text-center border-l-4 border-[#00703C]"
                >
                  <div className="text-2xl font-bold text-[#00703C]">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fellowship;
