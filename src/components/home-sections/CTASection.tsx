import React from 'react';
import Link from 'next/link';
import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const ScheduleMeetCTA = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-28 bg-gradient-to-r from-[#5C213C] to-[#C5487E] text-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex justify-center mb-8"
        >
          <BrainCircuit className="w-16 h-16 text-pink-200" />
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Build <br className="hidden md:block" /> Intelligent Solutions?
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-pink-100 max-w-3xl mx-auto mb-10"
        >
          Let&apos;s discuss how AI can transform your business operations and give you a competitive edge.
        </motion.p>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href='/schedule'>
            <button
              className="relative bg-white hover:bg-pink-100 text-[#5C213C] px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl overflow-hidden group"
            >
              <span className="relative z-10">Schedule a Meeting Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 -rotate-12 scale-150"></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScheduleMeetCTA;