"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from 'lucide-react';

export const ValuePropositionSection = () => {
  return (
    <section className="py-16 bg-[#5C213C] text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#C5487E] rounded-full p-3">
              <Zap className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose AI-Enhanced Solutions?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Traditional software solves problems. AI-enhanced software anticipates them and adapts in real-time, giving you a competitive edge that grows smarter every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              "24/7 Intelligent Automation",
              "Continuous Learning Systems",
              "Future-Proof Technology"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-pink-100">Our AI solutions work around the clock to optimize your business</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};