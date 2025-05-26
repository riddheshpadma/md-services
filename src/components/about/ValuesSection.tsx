// components/about/ValuesSection.tsx
import { motion } from "framer-motion";
import { Users, BrainCircuit, Globe, Rocket } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our priority"
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI-First",
      description: "Intelligence built into everything"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Integrity",
      description: "Honest and transparent"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Always pushing boundaries"
    }
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C5487E] font-semibold tracking-wider uppercase text-sm">
            OUR VALUES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
            What Guides Us
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            The principles that shape every decision we make
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5C213C] to-[#C5487E] rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-pink-50 rounded-xl p-8 h-full border border-pink-100 group-hover:border-transparent transition-all text-center">
                <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}