// components/HeroSection.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative py-28 bg-[#5C213C] text-white px-4 md:px-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat bg-[length:300px_300px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Schedule a Meeting <br className="hidden md:block" />
              <span className="text-pink-200">With Our Team</span>
            </h1>
            <p className="text-pink-100 text-lg">
              Let&apos;s discuss how we can help bring your ideas to life. Choose a
              meeting type that fits your needs.
            </p>
            <div className="flex items-center gap-2 text-pink-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>Schedule Meeting</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/schedule.jpg"
              alt="Meeting Illustration"
              width={500}
              height={400}
              className="w-full max-w-md rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};