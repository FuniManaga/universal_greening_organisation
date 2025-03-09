"use client";
import React from "react";
import { motion } from "framer-motion";

export function BackgroundBeams() {
  const numberOfBeams = 20;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(numberOfBeams)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(${Math.random() * 360}deg, transparent 0%, rgba(255,165,0,0.2) 50%, transparent 100%)`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

