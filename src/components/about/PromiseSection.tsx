// components/about/PromiseSection.tsx
import { motion } from "framer-motion";
import { Handshake, Users, Globe } from "lucide-react";

export default function PromiseSection() {
  const promises = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "To Our Clients",
      description: "We promise AI solutions that deliver measurable business impact, not just technical novelty."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "To Our Team",
      description: "We provide continuous AI training and cutting-edge tools to stay at the forefront of innovation."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "To Our Community",
      description: "We're committed to ethical AI development that benefits society while minimizing risks."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C5487E] font-semibold tracking-wider uppercase text-sm">
            OUR PROMISE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-6">
            Commitment to Excellence
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            The guarantees we make to everyone we work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5C213C] to-[#C5487E] rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-white rounded-xl p-8 h-full border border-pink-100 group-hover:border-transparent transition-all shadow-lg hover:shadow-xl">
                <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4">
                  {promise.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-4">
                  {promise.title}
                </h3>
                <p className="text-gray-600">{promise.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}