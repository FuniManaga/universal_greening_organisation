"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaHandsHelping, FaUsers, FaSolarPanel, FaGraduationCap, FaHandHoldingHeart, FaTree, FaRoad, FaHospital, FaHome, FaWater, FaLightbulb, FaCar, FaIndustry, FaUtensils, FaBook, FaBuilding, FaCampground, FaHiking, FaComments, FaUserFriends, FaHeart, FaCrown } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const ShumaniFutureVillagePage: React.FC = () => {
  const phases = [
    {
      title: "Phase 1: Community Ecosystem",
      description: "Social and Environmental Development",
      initiatives: [
        {
          icon: <FaLeaf className="text-green-500 text-3xl" />,
          title: "Environment",
          description: "Green and open spaces management"
        },
        {
          icon: <FaHospital className="text-green-500 text-3xl" />,
          title: "Healthcare",
          description: "Access to basic healthcare"
        },
        {
          icon: <FaWater className="text-green-500 text-3xl" />,
          title: "Water",
          description: "Basic water access"
        },
        {
          icon: <FaRoad className="text-green-500 text-3xl" />,
          title: "Road",
          description: "Basic access"
        },
        {
          icon: <FaHome className="text-green-500 text-3xl" />,
          title: "House",
          description: "Access to basic shelter"
        },
        {
          icon: <FaUtensils className="text-green-500 text-3xl" />,
          title: "Food Security",
          description: "Access to nutritional food"
        },
        {
          icon: <FaBook className="text-green-500 text-3xl" />,
          title: "Education",
          description: "Access to basic learning"
        },
        {
          icon: <FaUserFriends className="text-green-500 text-3xl" />,
          title: "Social Activities",
          description: "Recreation & Sports"
        },
        {
          icon: <FaLightbulb className="text-green-500 text-3xl" />,
          title: "ICT",
          description: "Community Data"
        }
      ]
    },
    {
      title: "Phase 2: Community Culture",
      description: "Human Development and Mind-Set Transformation",
      initiatives: [
        {
          icon: <FaGraduationCap className="text-green-500 text-3xl" />,
          title: "Legacy",
          description: "Building for the Future"
        },
        {
          icon: <FaUsers className="text-green-500 text-3xl" />,
          title: "Self-Reliant",
          description: "Skills of individuals"
        },
        {
          icon: <FaHandsHelping className="text-green-500 text-3xl" />,
          title: "Diligence",
          description: "Commitment and dedication"
        },
        {
          icon: <FaHeart className="text-green-500 text-3xl" />,
          title: "Ubuntu",
          description: "Caring and sharing"
        },
        {
          icon: <FaHandHoldingHeart className="text-green-500 text-3xl" />,
          title: "Trauma",
          description: "Psychological and emotional"
        },
        {
          icon: <FaCrown className="text-green-500 text-3xl" />,
          title: "Traditional Governance",
          description: "Integration with modern systems"
        },
        {
          icon: <FaHiking className="text-green-500 text-3xl" />,
          title: "Workshop",
          description: "Skills development"
        },
        {
          icon: <FaCampground className="text-green-500 text-3xl" />,
          title: "Camping",
          description: "Outdoor activities"
        },
        {
          icon: <FaComments className="text-green-500 text-3xl" />,
          title: "Dialogues",
          description: "Community discussions"
        },
        {
          icon: <FaUsers className="text-green-500 text-3xl" />,
          title: "Conferences",
          description: "Knowledge sharing"
        },
        {
          icon: <FaComments className="text-green-500 text-3xl" />,
          title: "Debates",
          description: "Constructive discussions"
        },
        {
          icon: <FaUserFriends className="text-green-500 text-3xl" />,
          title: "Team Building",
          description: "Community cohesion"
        }
      ]
    },
    {
      title: "Phase 3: Community Economy",
      description: "Business & Projects Development",
      initiatives: [
        {
          icon: <FaSolarPanel className="text-green-500 text-3xl" />,
          title: "Energy",
          description: "Sustainable power solutions"
        },
        {
          icon: <FaHiking className="text-green-500 text-3xl" />,
          title: "Tourism",
          description: "Community-based tourism"
        },
        {
          icon: <FaBuilding className="text-green-500 text-3xl" />,
          title: "Infrastructure",
          description: "Development projects"
        },
        {
          icon: <FaCar className="text-green-500 text-3xl" />,
          title: "Transportation",
          description: "Mobility solutions"
        },
        {
          icon: <FaIndustry className="text-green-500 text-3xl" />,
          title: "Technology",
          description: "Digital innovation"
        },
        {
          icon: <FaLeaf className="text-green-500 text-3xl" />,
          title: "Agriculture",
          description: "Sustainable farming"
        }
      ]
    }
  ];

  const participantsProfile = [
    "SFV Ambassadors",
    "SFV Local Committee",
    "Community Leaders",
    "Community Members",
    "Partners",
    "Civil Servants",
    "Funders"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - GreenCape Style */}
      <div className="relative h-[85vh]">
        <Image
          src="/ugo10.jpeg"
          alt="Shumani Future Village"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Building Sustainable Communities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                Pioneering sustainable development through innovative community-driven solutions
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex gap-4"
              >
                <button className="px-8 py-4 bg-[#00703C] hover:bg-[#005c32] text-white text-lg font-medium rounded-none transition-colors">
                  Learn More
                </button>
                <button className="px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-none hover:bg-white hover:text-[#00703C] transition-colors">
                  Get Involved
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Bar - GreenCape Style */}
      <div className="bg-[#00703C] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <span className="font-medium">Quick Links:</span>
            <div className="flex gap-8">
              {["Our Vision", "Development Phases", "Get Involved", "Contact"].map((link) => (
                <button key={link} className="hover:text-green-200 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section - GreenCape Style */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00703C] mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Shumani Future Village represents a groundbreaking approach to sustainable development, 
                where traditional African wisdom meets modern innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sustainable Living", "Community Development", "Environmental Conservation"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#00703C]/10 text-[#00703C] text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/f4.jpeg"
                alt="Sustainable Village"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Phases - GreenCape Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00703C] mb-4">
              Development Phases
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive strategy for sustainable community development
            </p>
          </div>

          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-[#00703C] mb-8">{phase.title}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {phase.initiatives.map((initiative, index) => (
                  <div 
                    key={index}
                    className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-[#00703C] mb-4">{initiative.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{initiative.title}</h4>
                    <p className="text-gray-600">{initiative.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stakeholders - GreenCape Style */}
      <section className="py-20 bg-[#00703C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Stakeholders</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {participantsProfile.map((participant, index) => (
              <div 
                key={index}
                className="border border-white/20 p-6 text-center hover:bg-white/10 transition-colors"
              >
                <p className="font-medium">{participant}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - GreenCape Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#00703C] mb-6">
            Join Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Be part of this transformative journey towards a sustainable future. 
            Your contribution can help shape a better tomorrow.
          </p>
          <button className="px-8 py-4 bg-[#00703C] text-white text-lg font-medium rounded-none hover:bg-[#005c32] transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShumaniFutureVillagePage;

