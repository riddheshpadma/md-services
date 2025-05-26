// app/about/page.tsx
"use client";

import HeroSection from "../../../components/about/HeroSection";
import DifferentiatorSection from "../../../components/about/DifferentiatorSection";
import StatsSection from "../../../components/about/StatsSection";
import MissionSection from "../../../components/about/MissionSection";
import ProcessSection from "../../../components/about/ProcessSection";
import ValuesSection from "../../../components/about/ValuesSection";
import PromiseSection from "../../../components/about/PromiseSection";
import ScheduleMeetCTA from "../../../components/ScheduleMeetCTA";
import Navbar from "../../../components/ui/Navbar";
import Footer from "../../../components/ui/Footer";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50">
      <Navbar />
      <HeroSection />
      <DifferentiatorSection />
      <StatsSection />
      <MissionSection />
      <ProcessSection />
      <ValuesSection />
      <PromiseSection />
      <ScheduleMeetCTA />
      <Footer />
    </div>
  );
}