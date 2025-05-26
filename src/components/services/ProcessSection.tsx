"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, Palette, Code, TestTube2, Rocket, Zap } from 'lucide-react';

export const ProcessSection = () => {
  const processSteps = [
    {
      title: "Discovery & AI Analysis",
      description: "We analyze your business needs and identify AI opportunities",
      icon: <Search className="w-6 h-6" />,
      color: "from-[#5C213C] to-[#7E2D56]"
    },
    {
      title: "AI-Powered Design",
      description: "Creating intelligent interfaces with predictive user flows",
      icon: <Palette className="w-6 h-6" />,
      color: "from-[#7E2D56] to-[#A03A70]"
    },
    {
      title: "Smart Development",
      description: "Building with AI frameworks and continuous learning systems",
      icon: <Code className="w-6 h-6" />,
      color: "from-[#A03A70] to-[#C5487E]"
    },
    {
      title: "AI Testing",
      description: "Rigorous quality checks with automated testing algorithms",
      icon: <TestTube2 className="w-6 h-6" />,
      color: "from-[#C5487E] to-[#D56B9A]"
    },
    {
      title: "Launch & Learn",
      description: "Deployment with real-time learning capabilities",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-[#D56B9A] to-[#E58FB6]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#5C213C]" />
            <span className="text-[#5C213C] font-semibold tracking-wider uppercase text-sm">
              OUR INTELLIGENT PROCESS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mb-4">
            How We Build Smarter Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our AI-integrated development workflow ensures efficient, future-ready solutions
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#5C213C] to-[#E58FB6] transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? ' lg:text-right' : ' lg:text-left'} text-center lg:text-left`}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="inline-block"
                  >
                    <div className={`p-1 rounded-xl bg-gradient-to-r ${step.color} shadow-lg inline-block`}>
                      <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-bold text-[#5C213C] mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-1/2 justify-center relative">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-xl z-10`}>
                    {step.icon}
                  </div>
                </div>

                {/* Mobile Dot */}
                <div className="lg:hidden flex justify-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg `}>
                    {step.icon}
                  </div>
                </div>

                {/* Empty div for layout balance */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Advantage */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-[#5C213C] to-[#C5487E] rounded-2xl p-8 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-3">
                <Zap className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">The AI Advantage</h3>
            <p className="text-pink-100 mb-6">
              Unlike traditional development processes, our AI-integrated approach continuously learns and improves, ensuring your solution gets smarter over time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Real-time Adaptability",
                "Predictive Analytics",
                "Continuous Optimization"
              ].map((item, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};