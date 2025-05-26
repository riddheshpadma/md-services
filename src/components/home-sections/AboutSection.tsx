// components/sections/AboutSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Award, Users, BarChart2 } from "lucide-react";

const stats = [
  { value: "1+", label: "Projects Delivered", icon: <Check className="w-6 h-6" /> },
  { value: "1+", label: "Years of Innovation", icon: <Award className="w-6 h-6" /> },
  { value: "95%", label: "Client Satisfaction", icon: <Users className="w-6 h-6" /> },
  { value: "15+", label: "Technologies Mastered", icon: <BarChart2 className="w-6 h-6" /> },
];

const teamMembers = [
  { name: "Ravi Sharma", role: "CEO & Co-Founder", image: "/assets/team/ravi.jpg" },
  { name: "Priya Patel", role: "CTO", image: "/assets/team/priya.jpg" },
  { name: "Amit Desai", role: "Lead Designer", image: "/assets/team/amit.jpg" },
  { name: "Neha Gupta", role: "Senior Developer", image: "/assets/team/neha.jpg" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-[#C5487E] uppercase">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C213C] mt-4 mb-6">
            Building the Future Since 2023
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            A passionate startup transforming ideas into impactful digital solutions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/about-home.jpg"
                alt="Mandala Dignite team collaborating"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#5C213C]/10 flex items-center justify-center">
                  <Award className="text-[#5C213C] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#5C213C]">Startup Star</h4>
                  <p className="text-gray-600 text-sm">Empowered by dreams</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-[#5C213C]">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600">
              At <span className="font-bold text-[#5C213C]">Mandala Dignite</span>, we’re driven to empower businesses with cutting-edge technology. Our small but dynamic team of innovators is committed to delivering solutions that spark growth and success.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-pink-50 rounded-lg p-4 flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#5C213C] flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#5C213C]">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team Preview */}
            {/* <div className="mt-8">
              <h4 className="text-xl font-bold text-[#5C213C] mb-4">Meet Our Founders</h4>
              <div className="flex -space-x-2">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </motion.div>
                ))}
                <Link href="/team">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-12 h-12 rounded-full bg-[#5C213C] text-white flex items-center justify-center text-xs font-bold cursor-pointer"
                  >
                    +3
                  </motion.div>
                </Link>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Discover Our Journey
                </motion.button>
              </Link>
              <Link href="/careers">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border-2 border-[#5C213C] text-[#5C213C] hover:bg-[#5C213C] hover:text-white px-6 py-3 rounded-full font-medium transition-all"
                >
                  Join Our Mission
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}