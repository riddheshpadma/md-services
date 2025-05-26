// components/about/DifferentiatorSection.tsx
import { motion } from "framer-motion";
import { Sparkles, Rocket, ShieldCheck } from "lucide-react";
// import Image from "next/image";

export default function DifferentiatorSection() {
  const aiAdvantages = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Enhanced Development",
      description: "We integrate AI throughout our development process for smarter solutions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Future-Ready Systems",
      description: "Solutions that evolve with built-in learning capabilities"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Intelligent Automation",
      description: "Reduce manual work with AI-powered process automation"
    }
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8 relative">
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
            OUR COMPETITIVE EDGE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
            Beyond Traditional Development
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            What makes our AI-powered approach fundamentally different
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aiAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5C213C] to-[#C5487E] rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-pink-50 rounded-xl p-8 h-full border border-pink-100 group-hover:border-transparent transition-all">
                <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}