import { ReactNode } from "react";

interface InputFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: ReactNode;
  textarea?: boolean;
  min?: string;
  max?: string;
}

export const InputField = ({
  id,
  name,
  value,
  onChange,
  label,
  type = "text",
  placeholder,
  required,
  icon,
  textarea = false,
  min,
  max,
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        {textarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            min={min}
            max={max}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        )}
      </div>
    </div>
  );
}; 