// components/about/StatsSection.tsx
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { value: "3x", label: "Faster Development", description: "with AI-assisted coding" },
    { value: "100%", label: "AI-Integrated", description: "in all our solutions" },
    { value: "40%", label: "Cost Reduction", description: "through intelligent automation" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#5C213C] to-[#7a2b52] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/20 rounded-full p-4">
            <Zap className="w-8 h-8" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all text-center"
            >
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-xl font-semibold mb-2">{stat.label}</p>
              <p className="text-pink-100">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}