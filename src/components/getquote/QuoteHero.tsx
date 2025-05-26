"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function QuoteHero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-r from-[#5C213C] to-[#7a2b52]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/getquote.jpg"
          alt="Get a Quote background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
      </div>
      <div className="absolute left-4 top-4 z-20 flex items-center justify-center">
        <Link href="/">
          <ArrowLeft className="absolute top-4 left-4 text-white hover:cursor-pointer" size={32} />
        </Link>
      </div>

      <div className="absolute inset-0 bg-[url('/assets/hero-pattern.svg')] opacity-10"></div>

      <div className="relative z-10 flex items-center justify-center min-h-[50vh] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center py-20 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get a <span className="text-pink-200">Custom Quote</span>
          </h1>

          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Tell us about your project needs and we&apos;ll craft a tailored solution
            just for you
          </p>
        </motion.div>
      </div>
    </section>
  );
}
