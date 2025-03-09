"use client"
import React, { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { FaLeaf, FaRecycle, FaSeedling, FaSolarPanel, FaHandsHelping, FaChartLine, FaGraduationCap, FaGlobeAfrica } from 'react-icons/fa'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
// Dynamically import components
const Boxes = dynamic(() => import('@/components/ui/background-boxes').then(mod => mod.Boxes), { ssr: false })
const AnimatedTooltip = dynamic(() => import('@/components/ui/animated-tooltip').then(mod => mod.AnimatedTooltip))
const InfiniteMovingCards = dynamic(() => import("@/components/ui/infinite-moving-cards").then(mod => mod.InfiniteMovingCards))
const UGOTimeline = dynamic(() => import('@/components/Timeline').then(mod => mod.UGOTimeline), {
  loading: () => <div>Loading timeline...</div>
})
const UGOFollowingPointer = dynamic(
  () => import('@/components/UGOFollowingPointer').then(mod => mod.UGOFollowingPointer),
  { 
    ssr: false,
    loading: () => <div>Loading programmes...</div>
  }
)
const ChatBot = dynamic(() => import('@/components/chatbot').then(mod => mod.ChatBot), {
  ssr: false
})

const testimonials = [
  {
    quote: "The Earth is what we all have in common. We must protect it together, for our future generations depend on the actions we take today.",
    name: "Wendell Berry",
    title: "Environmental Activist & Poet"
  },
  {
    quote: "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.",
    name: "Mahatma Gandhi",
    title: "Indian Independence Leader"
  },
  {
    quote: "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share.",
    name: "Lady Bird Johnson",
    title: "Former First Lady of the United States"
  },
  {
    quote: "We do not inherit the Earth from our ancestors; we borrow it from our children.",
    name: "Native American Proverb",
    title: "Ancient Wisdom"
  },
  {
    quote: "The greatest threat to our planet is the belief that someone else will save it.",
    name: "Robert Swan",
    title: "Polar Explorer & Environmental Leader"
  },
  {
    quote: "Nature provides a free lunch, but only if we control our appetites.",
    name: "William Ruckelshaus",
    title: "First EPA Administrator"
  },
  {
    quote: "There is no such thing as 'away'. When we throw anything away it must go somewhere.",
    name: "Annie Leonard",
    title: "Environmental Activist"
  },
  {
    quote: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
    name: "Rachel Carson",
    title: "Marine Biologist & Author"
  },
  {
    quote: "Conservation is a state of harmony between men and land.",
    name: "Aldo Leopold",
    title: "Conservationist & Author"
  },
  {
    quote: "Only when the last tree has died and the last river been poisoned and the last fish been caught will we realize we cannot eat money.",
    name: "Cree Indian Proverb",
    title: "Indigenous Wisdom"
  },
  {
    quote: "The Earth will not continue to offer its harvest, except with faithful stewardship. We cannot say we love the land and then take steps to destroy it for use by future generations.",
    name: "John Paul II",
    title: "Former Pope"
  },
  {
    quote: "Like music and art, love of nature is a common language that can transcend political or social boundaries.",
    name: "Jimmy Carter",
    title: "Former U.S. President"
  }
];

const features = [
  { icon: FaLeaf, text: "Eco-friendly Initiatives", description: "Promoting sustainable practices in daily life" },
  { icon: FaRecycle, text: "Sustainable Practices", description: "Implementing circular economy solutions" },
  { icon: FaSeedling, text: "Community Engagement", description: "Empowering local communities through education" },
  { icon: FaSolarPanel, text: "Renewable Energy", description: "Advocating for clean energy adoption" },
  { icon: FaHandsHelping, text: "Partnerships", description: "Collaborating with businesses and governments" },
  { icon: FaChartLine, text: "Impact Tracking", description: "Measuring and reporting our environmental impact" },
];

// Update the words array with new text
const words = [
  {
    text: "Championing ",
    className: "text-[#34D399] dark:text-[#34D399]",
  },
  {
    text: "a",
    className: "text-[#34D399] dark:text-[#34D399]",
  },
  {
    text: "Sustainable",
    className: "text-[#34D399] dark:text-[#34D399]",
  },
  {
    text: "Future",
    className: "text-[#34D399] dark:text-[#34D399]",
  },
  {
    text: "for",
    className: "text-[#34D399] dark:text-[#34D399]",
  },
  {
    text: "Everyone",
    className: "text-[#34D399] dark:text-[#34D399]",
  },
];

const backgroundImages = [
  "/hero1.JPG",
  "/hero2.JPG",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
 
  // Add more images as needed
];

export default function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      {/* Hero section with refined design */}
      <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Images with refined overlay */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
              quality={100}
            />
            {/* Refined overlays for better aesthetics */}
            <div className="absolute inset-0 bg-black/40" /> {/* Subtle darkening */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          </div>
        ))}

        {/* Content container */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto px-6 sm:px-8 py-8 sm:py-10">
          {/* Main heading */}
          <div className="mb-4 sm:mb-6 w-full">
            <TypewriterEffect 
              words={words} 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-center" 
            />
          </div>

          {/* Organization name */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4 sm:mb-6">
            <TextGenerateEffect 
              words="Universal Greening Organisation" 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            />
          </div>

          {/* Mission statement */}
          <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mb-6 sm:mb-8 text-white/90 leading-relaxed font-light">
            The Universal Greening Organisation advocates for sustainability and the Green Economy. We engage learners, students, Professionals, and Business to empower previously disadvantaged communities through impactful work programs and drive toward a more equitable future for all.
          </p>

          {/* CTA buttons with links */}
          <div className="flex flex-row gap-4 mb-8 sm:mb-10">
            <Link href="/donation" className="block">
              <Button
                borderRadius="1.5rem"
                className="bg-white hover:bg-white/90 text-black border-transparent 
                px-6 sm:px-8 py-2 sm:py-2.5 text-sm font-medium transition-all duration-300"
              >
                Donation →
              </Button>
            </Link>
            <Link href="/membership" className="block">
              <Button
                borderRadius="1.5rem"
                className="bg-white/10 hover:bg-white/20 text-white border-white/10 
                px-6 sm:px-8 py-2 sm:py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-300"
              >
                Become a Member
              </Button>
            </Link>
          </div>

          {/* Statistics with adjusted spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
            {[
              { number: "10000+", label: "Trees Planted" },
              { number: "25+", label: "Communities" },
              { number: "5+", label: "Countries" },
              { number: "100K+", label: "Lives Impacted" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center backdrop-blur-sm bg-white/5 rounded-2xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <span className="text-xl sm:text-2xl font-medium text-white mb-1">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Refined blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent opacity-80" />
      </div>

      {/* White section with grid - removed Features section */}
      <div className="w-full bg-white dark:bg-black relative -mt-4 pt-4 z-20 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
        {/* Add radial gradient mask for grid */}
        <div className="absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Content container */}
        <div className="relative z-20">

          {/* Testimonials section */}
          <Suspense fallback={<div>Loading testimonials...</div>}>
            <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </Suspense>

          {/* Timeline section */}
          <Suspense fallback={<div>Loading timeline...</div>}>
            <UGOTimeline />
          </Suspense>

          {/* Following Pointer Demo */}
          <Suspense fallback={<div>Loading programmes...</div>}>
            <div className="w-full max-w-5xl mx-auto my-16 px-4">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Programmes</h2>
                  <UGOFollowingPointer />
                </div>
              </div>
            </div>
          </Suspense>

          {/* Chatbot */}
          <Suspense fallback={null}>
            <ChatBot />
          </Suspense>
        </div>
      </div>
    </div>
  )
}