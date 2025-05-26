// components/sections/TechnologiesSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Cpu, Database, Cloud, Smartphone } from "lucide-react";

const techCategories = [
  {
    name: "Frontend",
    icon: <Code className="w-6 h-6" />,
    technologies: [
      { name: "React", icon: "/images/tech/react.png" },
      { name: "Next.js", icon: "/images/tech/next.png" },
      { name: "TypeScript", icon: "/images/tech/typescript.png" },
      { name: "Tailwind CSS", icon: "/images/tech/tailwind.png" },
    ],
  },
  {
    name: "Backend",
    icon: <Cpu className="w-6 h-6" />,
    technologies: [
      { name: "Node.js", icon: "/images/tech/nodejs.png" },
      { name: "Express", icon: "/images/tech/express.png" },
      { name: "Python", icon: "/images/tech/python.png" },
      { name: "Java", icon: "/images/tech/java.png" },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    technologies: [
      { name: "MongoDB", icon: "/images/tech/mongodb.png" },
      { name: "PostgreSQL", icon: "/images/tech/postgresql.png" },
      { name: "Firebase", icon: "/images/tech/firebase.png" },
      { name: "Redis", icon: "/images/tech/redis.png" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    technologies: [
      { name: "AWS", icon: "/images/tech/aws.png" },
      { name: "Docker", icon: "/images/tech/docker.png" },
      { name: "Kubernetes", icon: "/images/tech/kubernetes.png" },
      { name: "Terraform", icon: "/images/tech/terraform.png" },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: [
      { name: "React Native", icon: "/images/tech/react.png" },
      { name: "Flutter", icon: "/images/tech/flutter.png" },
      { name: "Swift", icon: "/images/tech/swift.png" },
      { name: "Kotlin", icon: "/images/tech/kotlin.png" },
    ],
  },
];

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-white">
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
            Our Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C213C] mt-4 mb-6">
            Built With Modern Technologies
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We leverage cutting-edge tools to deliver high-performance, scalable solutions.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {techCategories.map((category, index) => (
            <TechCategoryCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-[#5C213C] mb-8 text-center">
            Our Featured Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techCategories.flatMap(category => category.technologies)
              .filter((_, index) => index < 12)
              .map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <div className="w-16 h-16 relative mb-3">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-[#5C213C] text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#5C213C] to-[#C5487E] rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Specific Technology?
            </h3>
            <p className="text-pink-100 mb-6">
              We're constantly expanding our tech stack. Let us know if you need expertise in a particular technology.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#5C213C] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Ask About Our Capabilities
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechCategoryCard({ category, index }: { category: typeof techCategories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#5C213C] flex items-center justify-center text-white">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold text-[#5C213C]">{category.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {category.technologies.map((tech, techIndex) => (
            <motion.div
              key={techIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: techIndex * 0.05 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-pink-50 transition-colors"
            >
              <div className="w-8 h-8 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}