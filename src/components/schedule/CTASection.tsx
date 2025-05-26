// components/CTASection.tsx
"use client";

interface CTASectionProps {
  onScheduleClick: () => void;
}

export const CTASection = ({ onScheduleClick }: CTASectionProps) => {
  return (
    <section className="relative py-16 bg-[#5C213C] text-white px-4 md:px-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat bg-[length:300px_300px]"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Ideas?
        </h2>
        <p className="max-w-2xl mx-auto text-pink-100 mb-8">
          Schedule a meeting with our team and let&apos;s start building something
          amazing together.
        </p>
        <button
          onClick={onScheduleClick}
          className="bg-white hover:bg-pink-100 text-[#5C213C] px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
        >
          Schedule a Meeting Now
        </button>
      </div>
    </section>
  );
};