"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const OurStoryPage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <div className="bg-white pt-24 pb-16">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm 
            bg-[#00703C] text-white text-sm mb-6">
            About Us
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            Our Story
          </h1>
          
          <p className="text-lg text-gray-600">
            Building a sustainable future through environmental leadership and community action.
          </p>
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-24">
          {/* Foundation Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-[#00703C]">Our Foundation</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="text-[#00703C] font-semibold">UGO</span> was founded by Mr Talifhani Tshitwamulomoni at the University of Venda's School of Environmental Sciences. What began as a simple tree-planting initiative has evolved into a dynamic force for environmental change globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began with a vision to create meaningful environmental impact through grassroots initiatives. Starting with local community engagement and educational programs, we've grown into an organization that bridges the gap between environmental science and community action.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through partnerships with academic institutions, local governments, and community leaders, we've established a strong foundation for sustainable environmental practices and education.
              </p>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/story1.jpg"
                alt="UGO Foundation"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Evolution Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold text-[#00703C]">Our Evolution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our early days, UGO has evolved into a driving force in environmental conservation. Our journey has taken us to schools, communities, and many areas across South Africa, where we actively promote environmental awareness, sustainable practices, and collaborative solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We've expanded our initiatives to include comprehensive environmental education programs, community-based conservation projects, and innovative sustainability solutions. Our approach combines traditional knowledge with modern environmental science, creating lasting impact in communities we serve.
              </p>
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 gap-6 pt-4"
              >
                <motion.div variants={itemVariants} className="bg-gray-50 p-4">
                  <div className="text-2xl font-bold text-[#00703C]">100K+</div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-gray-50 p-4">
                  <div className="text-2xl font-bold text-[#00703C]">50+</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="relative aspect-[4/3] overflow-hidden lg:order-1"
            >
              <Image
                src="/story2.JPG"
                alt="UGO Evolution"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-[#00703C]">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, UGO continues to grow as a platform for positive environmental action. By combining education, research, and hands-on conservation work, we strive to inspire a deeper respect for nature and a commitment to protecting our planet for future generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision extends beyond immediate environmental impact. We're building a movement that empowers communities to become stewards of their environment, fostering a sustainable relationship between people and nature that will endure for generations to come.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through innovative programs, research initiatives, and community partnerships, we're working to create a future where environmental consciousness is not just an ideal but a way of life.
              </p>
              <motion.div variants={itemVariants} className="bg-gray-50 p-6">
                <blockquote className="text-lg font-medium text-gray-900 italic">
                  "Our story is one of passion, resilience, and a collective vision for a greener, healthier South Africa. Together, we're building a legacy of environmental stewardship that will benefit generations to come."
                </blockquote>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/story3.JPG"
                alt="UGO Vision"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurStoryPage;
