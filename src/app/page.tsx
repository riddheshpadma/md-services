// app/page.tsx
"use client";

import HeroSection from "@/components/home-sections/HeroSection";
import ServicesSection from "@/components/home-sections/ServicesSection";
import AboutSection from "@/components/home-sections/AboutSection";
import TechnologiesSection from "@/components/home-sections/TechnologiesSection";
// import TestimonialsSection from "@/components/home-sections/TestimonialsSection";
import CTASection from "@/components/home-sections/CTASection";
import Chatbot from "@/components/AIChatbot";

const Landing = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TechnologiesSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
      <Chatbot />
    </div>
  );
};

export default Landing;