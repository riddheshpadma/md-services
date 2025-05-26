// app/contact/page.tsx
"use client";

import ContactHero from "../../../components/contact/ContactHero";
import ContactFormSection from "../../../components/contact/ContactFormSections";
import SocialConnect from "../../../components/contact/SocialConnect";
import ContactInfo from "../../../components/contact/ContactInfo";
import Navbar from "../../../components/ui/Navbar";
import Footer from "../../../components/ui/Footer";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <SocialConnect />
      <ContactInfo />
      <Footer />
    </div>
  );
}