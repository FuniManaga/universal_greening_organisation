"use client"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import { useInView } from 'react-intersection-observer';
import WhatWeDo from '@/components/whatwedo'
import { motion } from "framer-motion";
import { CountingNumbers } from "@/components/ui/counting-numbers";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SparklesCore } from "@/components/ui/sparkles";
import Fellowship from '@/components/Fellowship';
import ImpactSection from '@/components/ImpactSection'
import LandingPage from '@/components/landingPage';

// Add this array at the top of your component
const backgroundImages = [
  {
    url: '/f3.jpeg',
    position: '50% 30%'
  },
  {
    url: '/hero4.jpg',
    position: 'center'
  },
  {
    url: '/hero6.jpg',
    position: 'center'
  },
  {
    url: '/hero5.jpg',
    position: 'center'
  },
  {
    url: '/hero7.jpg',
    position: 'center'
  }
];

// Stats section improvements
const stats = [
  {
    number: "10K+",
    label: "Carbon-Sequestering Trees",
    subtext: "Contributing to verified carbon offset",
    icon: "🌳"
  },
  {
    number: "50+",
    label: "Sustainable Communities",
    subtext: "ISO 14001 Environmental Management",
    icon: "🤝"
  },
  {
    number: "50K+",
    label: "Beneficiary Reach",
    subtext: "Independently verified impact",
    icon: "👨‍🎓"
  },
  {
    number: "100+",
    label: "Green Economy Jobs",
    subtext: "Certified sustainable practices",
    icon: "💼"
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nextImageLoaded, setNextImageLoaded] = useState(false);
  
  // Add refs for preloading next image
  const nextImageRef = useRef<HTMLImageElement | null>(null);

  // Modified preload effect
  useEffect(() => {
    if (typeof window === 'undefined') return; // Check if we're in browser environment
    
    const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
    const img = new window.Image(); // Use window.Image instead of Image
    img.src = backgroundImages[nextIndex].url;
    img.onload = () => setNextImageLoaded(true);
    nextImageRef.current = img;
  }, [currentImageIndex]);

  // Modified slideshow effect
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      if (nextImageLoaded) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setNextImageLoaded(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImageLoaded]);

  // Add intersection observer for animations
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="font-sans">
      {/* Other sections... 
      <HeroSection />
      <VideoSection/>
      <WhatWeDo />
      <Fellowship />
      <ImpactSection />
      
      
      
      */}

      <LandingPage />
    </div>
  )
}



