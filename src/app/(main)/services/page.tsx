"use client";

import React from "react";
import ScheduleMeetCTA from "../../../components/home-sections/CTASection";
import { ValuePropositionSection } from "../../../components/services/ValuePropositionSection";
import { ServicesSection } from "../../../components/services/ServicesSection";
import { ProcessSection } from "../../../components/services/ProcessSection";
import { ResultsSection } from "../../../components/services/ResultsSection";
import { ServicesHero } from "../../../components/services/Hero";
import Navbar from "../../../components/ui/Navbar";
import Footer from "../../../components/ui/Footer";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50">
        <Navbar/>
      <ServicesHero
        imageUrl="/images/services.jpg"
        title="AI-Enhanced Services"
        subtitle="Transform your business with intelligent software solutions"
      />

      <ValuePropositionSection />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <ScheduleMeetCTA />
      <Footer />
    </div>
  );
};

export default page;