import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export function UGOTimeline() {
  const timelineData = {
    2024: [
      {
        title: "UNEP Accreditation",
        description: "Achieved official accreditation from the United Nations Environment Programme, marking a significant milestone in our global environmental initiatives.",
        icon: "/icons/unep.svg"
      }
    ],
    2023: [
      {
        title: "Community Engagement",
        description: "Expanded our reach to 50+ communities through educational programs and environmental workshops.",
        icon: "/icons/community.svg"
      }
    ],
    2022: [
      {
        title: "Foundation Programs",
        description: "Launched our first environmental education programs in local schools and communities."
      }
    ],
    2021: [
      {
        title: "Digital Transformation",
        description: "Launched online environmental education platform to reach remote communities."
      }
    ],
    2018: [
      {
        title: "Regional Expansion",
        description: "Extended operations to neighboring provinces in South Africa."
      }
    ],
    2017: [
      {
        title: "Community Workshops",
        description: "Established regular environmental awareness workshops."
      }
    ],
    2016: [
      {
        title: "Environmental Projects",
        description: "Launched multiple small-scale environmental conservation projects."
      }
    ],
    2015: [
      {
        title: "Program Development",
        description: "Official launch at the university of Venda presided over by Mr Peter Tseola who was a senior LEDET official from Polokwane Head Office. Hosted the First Green Economy Summit at the University of Venda focused on Different Topics: Prof Letsaelo from LEDET focused on .. Mr Moudy Mudzielwana from Tshikovha Environmental focused on... Mr Agripa Munyai from PETCO focused on  and lasty, DR Tinaro from Univen focused on.."
      }
    ],
    2014: [
      {
        title: "UGO Establishment",
        description: "Inspired by his conversation with Mr Marubini Stephan Mugivhi, Mr Talivhani Tshitwamulomoni founded Universal Greening Organisation on the 29th March, to create enabling environment for University of Venda environmental students to engage in community environmental education and awareness, to get access to mentorship and understand industry development, to convert research papers into grassroots community projects"
      }
    ]
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-neutral-950 dark:via-black dark:to-neutral-950" />
      
      <div className="relative max-w-[1800px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Refined header section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 tracking-wider uppercase">
            Our Progress
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white tracking-tight">
            Our Journey
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Since 2014, we've been committed to creating a sustainable future through innovation and community engagement
          </p>
        </motion.div>

        {/* Timeline Content with enhanced desktop layout */}
        <div className="relative">
          {/* Refined vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />

          {/* Timeline events */}
          {Object.entries(timelineData).map(([year, events], yearIndex) => (
            <motion.div 
              key={year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
              className="relative mb-16 sm:mb-20 last:mb-0"
            >
              {/* Year marker - moved higher on mobile */}
              <div className="absolute left-[15%] sm:left-[15%] transform -translate-x-1/2 -top-10 sm:-top-6 z-10"> {/* Increased negative top margin on mobile */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-neutral-900 shadow-xl 
                    flex items-center justify-center border-2 border-gray-200 dark:border-gray-700
                    backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
                  >
                    <span className="text-lg sm:text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 
                      dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent"
                    >
                      {year}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Events grid - increased top padding on mobile */}
              <div className="grid grid-cols-1 gap-6 sm:gap-8 pt-12 sm:pt-12 px-4 sm:px-0 lg:pl-[17%] lg:pr-[3%]">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative max-w-[1200px]"
                  >
                    <TimelineCard 
                      title={event.title}
                      description={event.description}
                      isFirst={yearIndex === 0 && index === 0}
                      align="right"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Timeline Card Component
function TimelineCard({ 
  title, 
  description, 
  isFirst,
  align
}: { 
  title: string;
  description: string;
  isFirst: boolean;
  align: 'left' | 'right';
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className={`
        group relative bg-white dark:bg-neutral-900
        rounded-2xl p-8 lg:p-12 transition-all duration-300
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
        border border-gray-100 dark:border-neutral-800
        ${isFirst ? 'ring-2 ring-blue-500/20 dark:ring-blue-500/30' : ''}
      `}
    >
      {/* Enhanced connection line */}
      <div className="hidden lg:block absolute top-1/2 left-0 -translate-x-full
        w-20 h-[2px] bg-gradient-to-r from-gray-200 to-gray-300 
        dark:from-gray-700 dark:to-gray-800
        transform -translate-y-1/2"
      />

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
          {title}
        </h3>

        <div className="h-[2px] w-16 bg-blue-500/30 dark:bg-blue-500/20 
          group-hover:w-full transition-all duration-500" 
        />

        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
