// components/about/ProcessSection.tsx
import { motion } from "framer-motion";
import { BrainCircuit, Code, Sparkles, BarChart2, Zap } from "lucide-react";
import Image from "next/image";

export default function ProcessSection() {
  const processSteps = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Intelligent Discovery",
      description: "AI-powered analysis of your business needs and automation opportunities"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Smart Prototyping",
      description: "AI-generated prototypes with predictive user behavior modeling"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Adaptive Development",
      description: "Continuous AI-assisted coding with real-time optimization"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Predictive Deployment",
      description: "AI-driven testing and performance forecasting"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50 px-4 md:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#5C213C] to-transparent opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C5487E] font-semibold tracking-wider uppercase text-sm">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
            AI-Integrated Development Workflow
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our unique approach combines human expertise with artificial intelligence
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#5C213C] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square w-full border-4 border-white">
              <Image
                src="/assets/ai-process.jpg"
                alt="AI Development Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C213C]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <Zap className="w-10 h-10 mb-2" />
                <h3 className="text-2xl font-bold">AI-Powered Workflow</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}