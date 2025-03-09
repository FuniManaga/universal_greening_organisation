"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const OurImpactPage: React.FC = () => {
  // Animation variants remain the same
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
    <>
      {/* Enhanced Hero Section */}
      <div className="relative bg-[#00703C] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero3.jpg"
            alt="Our Impact Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              >
                Making a <span className="text-[#4ADE80]">Difference</span>
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              >
                An environmental advocate organisation founded by graduates from the 
                University of Venda (UNIVEN) under the School of Environmental Sciences.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 fill-white"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
          >
            <path d="M0 48h1440V0c-211.52 35.79-421.588 48-630.203 48C601.181 48 391.113 35.79 0 0v48z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Quote Section */}
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center mb-24"
          >
            <blockquote className="text-xl md:text-2xl text-gray-600 italic">
              "Healthy land is central to the wellbeing of the planet's ecosystems and 
              biodiversity; it feeds us, shelters us and provides the backbone to 
              thriving global economy."
            </blockquote>
            <cite className="block mt-4 text-sm text-gray-500">
              - United Nations Convention to Combat Desertification
            </cite>
          </motion.div>

          {/* SDG Impact Section */}
          <div className="mb-24">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-[#00703C] text-center mb-16"
            >
              Sustainable Development Goals
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* SDG Cards */}
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    </svg>
                  ),
                  title: "Climate Action (SDG 13)",
                  description: "Taking urgent action to combat climate change and its impacts through education and community-based adaptation strategies."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.796-.725 3.51-2.01 4.785A7.093 7.093 0 0 1 14.25 19.5H9.75a7.093 7.093 0 0 1-4.74-2.715A6.75 6.75 0 0 1 3 12c0-3.844 3.184-6.99 7.003-6.99 1.032 0 2.014.225 2.886.63A5.25 5.25 0 0 1 19.5 9.75c0 2.036-1.173 3.91-3 4.785" />
                    </svg>
                  ),
                  title: "Life Below Water (SDG 14)",
                  description: "Conserving and sustainably using aquatic ecosystems while preventing water pollution and protecting marine resources."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75c-1.472 0-2.882-.236-4.242-.683a3.746 3.746 0 0 1-1.508-1.508C5.736 15.118 5.5 13.708 5.5 12c0-1.472.236-2.882.683-4.242a3.746 3.746 0 0 1 1.508-1.508C9.118 5.736 10.528 5.5 12 5.5c1.472 0 2.882.236 4.242.683a3.746 3.746 0 0 1 1.508 1.508c.514 1.36.75 2.77.75 4.242 0 1.472-.236 2.882-.683 4.242a3.746 3.746 0 0 1-1.508 1.508c-1.36.514-2.77.75-4.242.75Z" />
                    </svg>
                  ),
                  title: "Life on Land (SDG 15)",
                  description: "Protecting, restoring and promoting sustainable use of terrestrial ecosystems, combating desertification, and halting biodiversity loss."
                }
              ].map((sdg, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="text-[#00703C] mb-4">{sdg.icon}</div>
                  <h3 className="text-xl font-semibold text-[#00703C] mb-4">{sdg.title}</h3>
                  <p className="text-gray-600">{sdg.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tree Planting Progress Section */}
          <motion.div 
            variants={containerVariants}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-[#00703C] text-center mb-8">
              National Mandate
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 text-center mb-8">
                Supporting President Cyril Ramaphosa's mandate to plant 10 million trees 
                by 2030. Our contribution focuses on indigenous trees across Schools, 
                FET's, Universities, Villages, Parks and wetlands.
              </p>
              
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress to Goal</span>
                  <span>100,000 / 1,000,000</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-[#00703C] rounded-full"
                    style={{ width: '10%' }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  10% towards our 2030 goal of 1 million trees
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fellowship Program Section */}
          <motion.div 
            variants={containerVariants}
            className="mb-24 bg-gray-50 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Image */}
              <div className="relative h-[400px] lg:h-full">
                <Image
                  src="/fellowship.jpeg"
                  alt="UGO Fellowship Program"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <motion.span
                      variants={itemVariants} 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm 
                        bg-[#00703C]/10 text-[#00703C] text-sm"
                    >
                      UGO Fellowship 2024
                    </motion.span>
                    <motion.h2 
                      variants={itemVariants}
                      className="text-3xl font-bold text-[#00703C]"
                    >
                      Transforming Lives Through Leadership
                    </motion.h2>
                    <motion.p 
                      variants={itemVariants}
                      className="text-lg text-gray-600"
                    >
                      Empowering the next generation of environmental leaders through immersive 
                      learning and hands-on experience.
                    </motion.p>
                  </div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#00703C]">
                      Empowering Future Environmental Leaders
                    </h3>
                    <p className="text-gray-600">
                      The UGO Fellowship 2024 cohort brings together 12 exceptional students from 
                      disadvantaged backgrounds, providing them with a transformative 90-day 
                      experience in sustainability leadership and global citizenship.
                    </p>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {[
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                          </svg>
                        ),
                        title: "Intensive Leadership Training",
                        description: "Comprehensive modules covering environmental leadership and project management"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                          </svg>
                        ),
                        title: "Global Experience",
                        description: "First-time international travel and cross-border exchange programs"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                          </svg>
                        ),
                        title: "Practical Projects",
                        description: "Hands-on experience with real-world sustainability initiatives"
                      },
                      {
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        ),
                        title: "Mentorship",
                        description: "One-on-one guidance from industry experts and environmental leaders"
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="space-y-2"
                      >
                        <div className="text-[#00703C]">{feature.icon}</div>
                        <h4 className="font-semibold text-[#00703C]">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arbor Week Walk Section */}
          <motion.div 
            variants={containerVariants}
            className="mb-24 bg-gradient-to-b from-[#00703C]/10 to-transparent rounded-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.span
                  variants={itemVariants} 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm 
                    bg-[#00703C]/10 text-[#00703C] text-sm mb-4"
                >
                  Annual Event
                </motion.span>
                <motion.h2 
                  variants={itemVariants}
                  className="text-3xl font-bold text-[#00703C] mb-4"
                >
                  UGO/IUCN Arbor Week Walk
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg text-gray-600"
                >
                  Celebrating environmental conservation and community engagement through our annual tree-planting initiative
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                    ),
                    title: "Community Participation",
                    description: "Bringing together students, staff, and community members in a collaborative environmental initiative"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    ),
                    title: "Environmental Education",
                    description: "Raising awareness about indigenous trees and their importance in ecosystem conservation"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                      </svg>
                    ),
                    title: "Climate Action",
                    description: "Contributing to carbon sequestration and promoting sustainable environmental practices"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="text-[#00703C] mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-[#00703C] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Image Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
              >
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/arbor-walk-1.jpg"
                    alt="Tree planting during Arbor Week"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/arbor-walk-2.jpg"
                    alt="Community participation in Arbor Week"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                variants={itemVariants}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-600 mb-6">
                  Join us in our annual celebration of trees and environmental conservation. 
                  Together, we can make a lasting impact on our environment and communities.
                </p>
                <button className="bg-[#00703C] text-white px-6 py-3 rounded-lg hover:bg-[#00703C]/90 transition-colors">
                  Learn More About Our Events
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default OurImpactPage;

