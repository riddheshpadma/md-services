"use client";

import React from "react";
import { motion } from "framer-motion";

export const ResultsSection = () => {
  return (
    <section className="py-20 bg-[#5C213C] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Measurable AI-Driven Results
          </h2>
          <p className="max-w-3xl mx-auto text-pink-100 text-lg">
            Our clients typically see significant improvements within the first 3 months
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "40-70%", label: "Increase in operational efficiency" },
            { value: "3-5x", label: "Faster decision making" },
            { value: "25-50%", label: "Reduction in manual processes" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm text-center"
            >
              <h3 className="text-4xl font-bold mb-3 text-white">{item.value}</h3>
              <p className="text-pink-100">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};