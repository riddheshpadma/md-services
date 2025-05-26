// components/sections/ServicesSection.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Globe, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    title: "AI Solutions",
    description: "Custom AI models to automate and optimize your business processes.",
    icon: Brain,
  },
  {
    title: "Web Development",
    description: "High-performance websites with modern frameworks and technologies.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions.",
    icon: Cloud,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-wider text-[#C5487E] uppercase">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C213C] mt-4 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We deliver end-to-end technology services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <button className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
              Explore All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-8">
        <div className="w-16 h-16 mb-6 rounded-lg bg-[#5C213C] flex items-center justify-center">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#5C213C] mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <Link
          href="/services"
          className="inline-flex items-center text-[#C5487E] font-medium hover:text-[#5C213C] transition-colors"
        >
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}