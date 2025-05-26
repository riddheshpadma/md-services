import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bloghero.jpg" // Update this path to your actual image
          alt="Blog background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-100"
        />
      </div>
      
      {/* Gradient overlay - adjusted colors to match existing theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C5487E]/20 to-transparent z-0">
        <div className="absolute inset-0 bg-[url('/assets/hero-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[50vh] px-4 md:px-8 mt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center py-20 text-white"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-8 h-8 text-pink-400" />
            <span className="text-pink-400 font-semibold tracking-wider text-lg">
              MANDALA DIGNITE BLOG
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Insights & <span className="text-pink-400">Innovation</span>
          </h1>
          
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Explore our latest articles on AI, development trends, and business technology solutions
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}