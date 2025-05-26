// components/ProcessStep.tsx
"use client";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

export const ProcessStep = ({ step, title, description }: ProcessStepProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md border border-pink-100 hover:shadow-lg transition-all">
      <div className="bg-[#5C213C] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
        {step}
      </div>
      <h3 className="text-xl font-bold text-[#5C213C] mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};