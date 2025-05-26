// components/MeetingTypeCard.tsx
"use client";

import { Clock, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface MeetingTypeCardProps {
  icon: ReactNode;
  title: string;
  duration: string;
  description: string;
  onClick: () => void;
}

export const MeetingTypeCard = ({
  icon,
  title,
  duration,
  description,
  onClick,
}: MeetingTypeCardProps) => {
  return (
    <div
      className="bg-pink-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100 group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-[#5C213C] w-12 h-12 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-[#7a2b52] transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#5C213C] mb-2">{title}</h3>
      <div className="flex items-center gap-2 text-[#5C213C] mb-4">
        <Clock className="w-5 h-5" />
        <span className="font-medium">{duration}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="bg-[#5C213C] hover:bg-[#7a2b52] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all text-sm">
        Select <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};