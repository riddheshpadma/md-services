"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, ShoppingCart, Server, BarChart2, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

export const ServicesSection = () => {
  const aiEnhancedServices: Service[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI-Powered Web Development",
      description: "Custom websites with intelligent features like chatbots, personalization, and predictive analytics",
      highlight: "Transform visitors into customers with smart web experiences"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Mobile Apps",
      description: "iOS & Android applications with machine learning capabilities",
      highlight: "Apps that learn and adapt to user behavior"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "AI-Driven UI/UX Design",
      description: "Interfaces that adapt to user behavior using AI algorithms",
      highlight: "Designs that evolve with your audience"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Intelligent E-commerce",
      description: "Online stores with recommendation engines and automated customer service",
      highlight: "Boost conversions with AI-powered shopping"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "AI Business Solutions",
      description: "Custom software with process automation and data analysis",
      highlight: "Streamline operations with intelligent automation"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Data & Analytics",
      description: "Turn your data into actionable insights with predictive modeling",
      highlight: "See the future of your business data"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C5487E] font-semibold tracking-wider uppercase text-sm">
            OUR AI SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
            Premium AI-Enhanced Services
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We combine cutting-edge AI with exceptional engineering to deliver solutions that outperform conventional software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiEnhancedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5C213C] to-[#C5487E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 h-full border border-gray-100 rounded-xl group-hover:border-transparent transition-all">
                <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] w-14 h-14 rounded-full flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4  transition-colors">
                  {service.description}
                </p>
                <p className="text-sm font-medium text-[#C5487E]  transition-colors">
                  {service.highlight}
                </p>
                {/* <ArrowRight className="mt-4 text-[#5C213C]  transition-colors" /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};