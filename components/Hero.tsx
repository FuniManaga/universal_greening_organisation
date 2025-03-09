"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

const StatCard = ({ number, label, index }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/90 to-black/60 backdrop-blur-md border border-gray-800/60 overflow-hidden group"
  >
    <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative text-4xl font-extrabold text-emerald-400 mb-2">{number}</div>
    <div className="relative text-sm text-gray-200 uppercase tracking-wide font-medium">{label}</div>
  </motion.div>
);

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        await video.play();
      } catch (err) {
        console.error("Video autoplay failed:", err);
        video.style.backgroundImage = `url(${video.poster})`;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
          observer.unobserve(video);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    const handleVisibility = () => {
      document.hidden ? video.pause() : playVideo();
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.unobserve(video);
      document.removeEventListener("visibilitychange", handleVisibility);
      video.pause();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-80"
          poster="/video-poster.jpg"
        >
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-block text-emerald-400 text-sm md:text-base tracking-widest uppercase mb-6 bg-emerald-900/30 px-4 py-2 rounded-full"
          >
            Universal Greening Initiative
          </motion.span>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Green Future Now
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 font-light">
            Building a sustainable tomorrow through innovation and community action.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link href="https://www.payfast.co.za/donate/go/universalgreeningorganization">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Support Us
              </Button>
            </Link>
            <Link href="/about/our-story">
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Our Mission
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "100K+", label: "Trees Planted" },
              { number: "50+", label: "Communities" },
              { number: "100+", label: "Green Jobs" },
            ].map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-emerald-400 text-2xl"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;