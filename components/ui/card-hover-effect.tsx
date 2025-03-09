"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "./spotlight";
import { TextGenerateEffect } from "./text-generate-effect";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    action: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardStyles = [
    {
      accent: "bg-green-500/10",
      border: "border-green-500/20",
      hover: "hover:border-green-500/40",
      dot: "bg-green-500",
      tag: "text-green-700 bg-green-100/80",
      spotlight: "from-green-500/20 via-green-500/5",
      action: "Register a Tree"
    },
    {
      accent: "bg-green-500/10",
      border: "border-green-500/20",
      hover: "hover:border-green-500/40",
      dot: "bg-green-500",
      tag: "text-green-700 bg-green-100/80",
      spotlight: "from-green-500/20 via-green-500/5",
      action: "Volunteer Now"
    },
    {
      accent: "bg-green-500/10",
      border: "border-green-500/20",
      hover: "hover:border-green-500/40",
      dot: "bg-green-500",
      tag: "text-green-700 bg-green-100/80",
      spotlight: "from-green-500/20 via-green-500/5",
      action: "Donate"
    }
  ];

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className="relative group block w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className={cn(
                "relative h-full rounded-2xl bg-white p-8",
                "border-2",
                cardStyles[idx].border,
                cardStyles[idx].hover,
                "group-hover:shadow-lg group-hover:-translate-y-1",
                "transition-all duration-300",
                "overflow-hidden"
              )}
              animate={{
                scale: hoveredIndex === idx ? 1.02 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <Spotlight
                className="-top-12 left-0"
                fill={cardStyles[idx].spotlight}
              />
              
              <div className="relative z-20">
                {/* Category Tag */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full 
                  ${cardStyles[idx].tag} mb-4`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${cardStyles[idx].dot} mr-2`} />
                  <span className="text-sm font-medium">
                    {idx === 0 ? "Environmental" : idx === 1 ? "Community" : "Support"}
                  </span>
                </div>
                
                {/* Content */}
                <TextGenerateEffect
                  words={item.title}
                  className="text-xl font-bold text-gray-900 mb-2"
                />
                <p className="text-gray-600 text-sm leading-relaxed mb-8 
                  group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-medium group/link">
                    {cardStyles[idx].action}
                    <svg
                      className="w-5 h-5 ml-1 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                  
                  {/* Impact Badge */}
                  <span className={`text-xs ${cardStyles[idx].tag} px-2.5 py-1 rounded-full 
                    font-medium`}>
                    {idx === 0 ? "100K+ trees" : idx === 1 ? "1000+ volunteers" : "Support us"}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};
