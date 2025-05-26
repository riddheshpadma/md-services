// components/SectionHeader.tsx
"use client";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  subtitle,
  title,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span className="text-[#5C213C] font-semibold">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl mx-auto text-gray-600">{description}</p>
      )}
    </div>
  );
};