// components/contact/ContactHero.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herocontact.jpg" // Update this path to your actual image
          alt="Contact background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-70"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C5487E]/20 to-transparent z-0">
        <div className="absolute inset-0 bg-[url('/assets/hero-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4 md:px-8 mt-6">
        <div className="container mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="text-pink-200 font-semibold tracking-wider text-lg">
              LET&apos;S CONNECT
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Let&apos;s Build Something <br />
            <span className="text-pink-400">Amazing Together</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-pink-100 max-w-3xl mx-auto mb-10"
          >
            Whether you have a project in mind or just want to chat about possibilities, we&apos;d love to hear from you.
          </motion.p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}