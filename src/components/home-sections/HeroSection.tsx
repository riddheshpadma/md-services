import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../ui/Navbar";
import Chatbot from "../AIChatbot";

export default function HeroSection() {
  return (
    <section>
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#C5487E]/20 to-transparent "></div>
          <div className="absolute inset-0 bg-[url('/assets/hero-pattern.svg')] opacity-10"></div>
        </div>

        <div className="relative z-10 flex-grow flex items-center px-4 md:px-8 pt-20 ">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 space-y-8"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-[#5C213C] leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5C213C] to-[#C5487E]">
                    Transform Your Business
                  </span>
                  <br />
                  With AI-Powered Solutions
                </h1>

                <p className="text-xl text-gray-600">
                  We build cutting-edge software solutions that drive growth,
                  efficiency, and innovation for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/schedule">
                      <button className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] text-white px-8 py-4 rounded-full flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all">
                        Schedule Free Consultation
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact">
                      <button className="border-2 border-[#5C213C] text-[#5C213C] hover:bg-[#5C213C] hover:text-white px-8 py-4 rounded-full font-medium transition-all">
                        Explore Our Work
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 relative"
              >
                <Image
                  src="/images/hero-illustration.png"
                  alt="Hero Illustration"
                  width={600}
                  height={500}
                  className="w-full max-w-md mx-auto"
                  priority
                />
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 -left-10"
                >
                  <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                    <Image
                      src="/images/tech/react.png"
                      width={40}
                      height={40}
                      alt="React"
                    />
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -top-10 -right-10"
                >
                  <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                    <Image
                      src="/images/tech/python.png"
                      width={40}
                      height={40}
                      alt="Python"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-[#FF7BAC] opacity-20 blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-[#5C213C] opacity-10 blur-xl"></div>

        <Chatbot />
      </div>
    </section>
  );
}