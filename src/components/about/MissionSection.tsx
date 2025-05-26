// components/about/MissionSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { Target } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video w-full">
              <Image
                src="/assets/about-mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C213C]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <Target className="w-10 h-10 mb-2" />
                <h3 className="text-2xl font-bold">Our Purpose</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-[#C5487E] font-semibold tracking-wider uppercase text-sm">
              OUR MISSION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-6">
              Why We Exist
            </h2>
            <p className="text-gray-600 mb-6">
              The digital landscape is evolving rapidly, but most solutions lack the intelligence to adapt.
            </p>
            <p className="text-gray-600 mb-6 font-semibold">
              We believe AI should be accessible and practical for every business.
            </p>
            <p className="text-gray-600 mb-8">
              We refuse to build static solutions when we can create systems that learn and improve.
            </p>
            
            <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] p-1 rounded-xl shadow-lg">
              <div className="bg-white rounded-lg p-6">
                <p className="text-xl font-bold text-[#5C213C]">
                  "Our mission: To bridge the gap between cutting-edge AI and practical business solutions."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}