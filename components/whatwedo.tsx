"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Leaf, Users, GraduationCap, Handshake, Trophy, Building2, TreePine } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-12 h-12 text-[#00703C]" />,
    title: "Tree Planting",
    description: "Leading reforestation initiatives to combat climate change and restore ecosystems.",
    link: "/services/tree-planting",
    stat: "100K+ Trees",
    hoverEffect: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  },
  {
    icon: <Users className="w-12 h-12 text-[#00703C]" />,
    title: "Community Development",
    description: "Building sustainable infrastructure and empowering local communities.",
    link: "/services/community",
    stat: "50+ Communities",
    hoverEffect: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-[#00703C]" />,
    title: "Environmental Education",
    description: "Providing educational programs to foster environmental awareness.",
    link: "/services/education",
    stat: "50+ Programs",
    hoverEffect: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  },
  {
    icon: <Handshake className="w-12 h-12 text-[#00703C]" />,
    title: "Partnerships",
    description: "Collaborating with organizations to maximize environmental impact.",
    link: "/services/partnerships",
    stat: "25+ Partners",
    hoverEffect: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  }
].map(feature => ({
  ...feature,
  hoverEffect: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}));

const whatWeDoContent = [
  {
    title: "Environmental Conservation",
    description: "We lead comprehensive environmental conservation initiatives across South Africa, focusing on biodiversity protection and ecosystem restoration. Our work includes large-scale tree planting programs, habitat restoration, and the implementation of sustainable land management practices. Through these efforts, we're actively combating climate change while preserving our natural heritage for future generations. Our projects demonstrate the vital connection between environmental health and community wellbeing.",
  },
  {
    title: "Community Development",
    description: "At the heart of our mission is the empowerment of local communities through sustainable development initiatives. We work closely with communities to implement projects that improve livelihoods while promoting environmental stewardship. Our approach combines traditional knowledge with modern conservation techniques, ensuring that communities are active participants in environmental protection. Through skills training and capacity building, we're creating lasting positive change.",
  },
  {
    title: "Environmental Education",
    description: "Education is key to creating lasting environmental change. We develop and deliver comprehensive environmental education programs that raise awareness about climate change, biodiversity conservation, and sustainable practices. Our recent Arbour Walk from the University to Thavhani Mall, which engaged over 500 participants, exemplifies our approach to combining practical action with educational outreach. These initiatives help build a more environmentally conscious society.",
  },
  {
    title: "Research & Innovation",
    description: "Through our partnerships with leading institutions like UNEP, SANBI, and the University of Venda, we're at the forefront of environmental research and innovation. Our fellowship program, sending students to Botswana in 2024, demonstrates our commitment to nurturing future environmental leaders. We collaborate with WOCAT and the University of Bern to implement proven conservation approaches, ensuring our work is grounded in scientific best practices.",
  }
];

const highlights = [
  {
    icon: <Trophy className="w-12 h-12 text-[#00703C]" />,
    title: "UNEP Accreditation",
    description: "First black-owned NGO in South Africa to receive United Nations Environment Programme accreditation",
  },
  {
    icon: <Building2 className="w-12 h-12 text-[#00703C]" />,
    title: "SANBI Partnership",
    description: "Recently signed Memorandum of Agreement with the South African National Biodiversity Institute",
  },
  {
    icon: <Users className="w-12 h-12 text-[#00703C]" />,
    title: "University Collaboration",
    description: "Strategic partnership with University of Venda, supporting student fellowships in Botswana for 2024",
  },
  {
    icon: <TreePine className="w-12 h-12 text-[#00703C]" />,
    title: "Community Impact",
    description: "Led Arbour Walk from University to Thavhani Mall, engaging over 500 people in climate awareness and tree planting",
  }
];

const partners = [
  {
    name: "UNEP",
    logo: "/logos/unep.png",
    description: "United Nations Environment Programme"
  },
  {
    name: "SANBI",
    logo: "/logos/sanbi.png",
    description: "South African National Biodiversity Institute"
  },
  {
    name: "University of Venda",
    logo: "/logos/univen.png",
    description: "Academic Partnership"
  },
  {
    name: "WOCAT",
    logo: "/logos/wocat.png",
    description: "World Overview of Conservation Approaches and Technologies"
  },
  {
    name: "University of Bern",
    logo: "/logos/bern.png",
    description: "Research Collaboration"
  },
  {
    name: "UNCBD",
    logo: "/logos/uncbd.png",
    description: "UN Convention on Biological Diversity"
  },
  {
    name: "UNCCD",
    logo: "/logos/unccd.png",
    description: "UN Convention to Combat Desertification"
  }
];

const WhatWeDo = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-[#004d28] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#004d28]/50 via-transparent to-[#004d28]/50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Responsive Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full 
              bg-white/10 text-white text-xs sm:text-sm mb-6 sm:mb-8
              border border-white/20 backdrop-blur-sm"
          >
            <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400" />
            Our Impact Areas
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold 
              mb-6 sm:mb-8 text-white tracking-tight leading-[1.1]"
          >
            What We Do
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed
              max-w-2xl mx-auto px-4 sm:px-0"
          >
            We're dedicated to environmental conservation and community development 
            through sustainable initiatives and partnerships.
          </motion.p>
        </div>

        {/* Responsive Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <Link href={feature.link}>
                <div className="relative p-6 sm:p-8 rounded-2xl 
                  bg-gradient-to-br from-white/15 to-white/5
                  hover:from-white/20 hover:to-white/10
                  transition-all duration-300 h-full 
                  border border-white/20 backdrop-blur-sm
                  shadow-xl shadow-emerald-900/20">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center 
                    sm:justify-between gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center justify-center 
                      bg-white/10 p-3 sm:p-4 rounded-xl
                      shadow-lg shadow-emerald-900/10
                      w-12 h-12 sm:w-14 sm:h-14">
                      {feature.icon}
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-xs sm:text-sm font-medium text-white 
                        bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full
                        border border-white/20 shadow-lg shadow-emerald-900/10
                        inline-flex items-center justify-center"
                    >
                      {feature.stat}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white
                    group-hover:text-emerald-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 
                    mb-6 sm:mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="inline-flex items-center text-white font-medium 
                    bg-white/10 hover:bg-white/20 
                    transition-all duration-300 
                    rounded-full px-4 sm:px-6 py-2 sm:py-3
                    text-sm sm:text-base
                    border border-white/20
                    shadow-lg shadow-emerald-900/10
                    group-hover:translate-x-2">
                    Learn more
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 
                      transition-transform duration-300 
                      group-hover:translate-x-1" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Responsive Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4 sm:px-0"
        >
          <Link href="/about">
            <Button 
              className="bg-white text-[#004d28] hover:bg-white/90 font-medium 
                px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-full 
                inline-flex items-center gap-2 sm:gap-3
                transition-all duration-300 hover:scale-[1.02] 
                shadow-2xl shadow-emerald-900/30 hover:shadow-emerald-900/40
                border border-white/10
                w-full sm:w-auto justify-center"
            >
              <span className="font-semibold">Learn More About Our Work</span>
              <motion.svg 
                whileHover={{ x: 5 }}
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" 
                  strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const WhatWeDoSection = () => {
  return (
    <section className="bg-[#005e32] py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#005e32]/50 via-transparent to-[#005e32]/50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 
              rounded-full bg-white/10 text-white text-xs sm:text-sm mb-6 sm:mb-8
              border border-white/20 backdrop-blur-sm"
          >
            What We Do
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 
              text-white tracking-tight leading-[1.1]"
          >
            Our Approach
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed
              px-4 sm:px-0"
          >
            We work at the intersection of environmental conservation and community development, 
            creating sustainable solutions for a better future.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-24 lg:space-y-32">
          {whatWeDoContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group space-y-6 sm:space-y-8 
                hover:translate-x-2 transition-transform duration-300"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px bg-white/20"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] lg:grid-cols-[250px,1fr] 
                gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-white
                    group-hover:text-emerald-300 transition-colors duration-300"
                >
                  {content.title}
                </motion.h3>
                
                <motion.div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    {content.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnershipsSection = () => {
  return (
    <section className="bg-[#004d28] py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-emerald-200 font-medium mb-6"
          >
            Our Network
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Strategic Partnerships
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-emerald-100"
          >
            Building a network of collaboration for sustainable environmental impact
          </motion.p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-24">
          {whatWeDoContent.map((content, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px bg-gray-200"
              />
              
              <div className="grid md:grid-cols-[200px,1fr] gap-8 md:gap-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-xl font-bold text-emerald-200"
                >
                  {content.title}
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <p className="text-emerald-100 leading-relaxed">
                    {content.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
