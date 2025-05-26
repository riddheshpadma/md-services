"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServicesHeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaText?: string;
}

export const ServicesHero = ({
  imageUrl,
  title,
  subtitle,
  ctaText = "Explore Our Services",
}: ServicesHeroProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Main Hero Container */}
      <div className="relative h-[70vh] min-h-[600px] w-full">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt="Services Hero Background"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center relative z-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
            
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#5C213C]/20 to-transparent z-10"></div>
    </section>
  );
};