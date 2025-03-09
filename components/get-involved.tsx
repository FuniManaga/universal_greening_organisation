"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverEffect } from "./ui/card-hover-effect";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const GetInvolvedPage = () => {
  const opportunities = [
    {
      title: "Plant Trees",
      category: "Environmental",
      description: "Join our tree planting initiatives across communities. For just R100, you can plant a tree and help combat climate change.",
      impact: "100,000+ trees planted",
      action: "Plant a Tree",
      link: "https://ugo-trees.vercel.app",
      image: "/images/planting.jpg"
    },
    {
      title: "Volunteer",
      category: "Community",
      description: "Participate in our environmental programs and community outreach initiatives.",
      impact: "1000+ active volunteers",
      action: "Join Us",
      link: "/volunteer",
      image: "/images/volunteer.jpg"
    },
    {
      title: "Donate",
      category: "Support",
      description: "Support our mission with a donation. Every contribution helps us create lasting environmental impact.",
      impact: "Making a difference",
      action: "Donate Now",
      link: "https://www.payfast.co.za/donate/go/universalgreeningorganization",
      image: "/images/donate.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section with Aceternity Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full bg-gradient-to-b from-white to-gray-50"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-800 
                bg-green-100/80 rounded-full backdrop-blur-sm border border-green-200">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Join Our Mission
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get Involved
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Make a difference by supporting our environmental initiatives and community projects
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Ways to Get Involved - Using Aceternity Card Hover Effect */}
      <div className="max-w-7xl mx-auto px-4 py-24 bg-white">
        <div className="text-center mb-16">
          <span className="text-green-600 font-medium text-sm tracking-wider uppercase">
            Take Action
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Ways to Get Involved</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-green-500/30"></div>
            <div className="w-2 h-0.5 bg-green-500/30"></div>
            <div className="w-2 h-0.5 bg-green-500/30"></div>
          </div>
        </div>
        
        <HoverEffect items={opportunities.map(opp => ({
          title: opp.title,
          description: opp.description,
          link: opp.link,
          image: opp.image,
          action: opp.action
        }))} />
      </div>

      {/* Newsletter Signup with Background Gradient */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <BackgroundGradient className="rounded-3xl p-12 bg-white/90">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-green-600 font-medium text-sm tracking-wider uppercase">
              Stay Connected
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Subscribe to our newsletter for updates on our latest projects and upcoming events.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                  bg-white text-gray-900 placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 
                  transition-colors duration-300 font-medium shadow-lg shadow-green-500/25
                  hover:shadow-xl hover:shadow-green-500/30"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default GetInvolvedPage;