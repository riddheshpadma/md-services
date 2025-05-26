// components/about/HeroSection.tsx
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about.jpg" // Update this path to your actual image
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-90"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C5487E]/20 to-transparent z-0">
        <div className="absolute inset-0 bg-[url('/assets/hero-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 md:px-8">
        <div className="container mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <BrainCircuit className="w-8 h-8 text-white" />
            <span className="text-white font-semibold tracking-wider">
              AI-POWERED DEVELOPMENT
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Where <span className="text-[#5C213C]">Innovation</span> Meets <br />
            <span className="text-[#5C213C]">Intelligence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-pink-100 max-w-3xl mx-auto mb-10"
          >
            We combine cutting-edge software development with AI integration to create solutions that learn and adapt.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <button className="bg-white text-[#5C213C] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Explore Our Service
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105">
              Meet Our Team
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F6F3F5] to-transparent z-10"></div> */}
    </section>
  );
}