import { UseFormRegister } from 'react-hook-form';
import { QuoteFormData } from './QuoteForm';

export default function StepBasicInfo({ register }: { register: UseFormRegister<QuoteFormData> }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Basic Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Information */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
          <input
            id="companyName"
            {...register('companyName', { required: true })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
          <select
            id="industry"
            {...register('industry', { required: true })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
          >
            <option value="">Select your industry</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Education">Education</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Contact Information */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            id="fullName"
            type="text"
            {...register('fullName', { required: true })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { 
              required: true,
              pattern: {
                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                message: "Invalid phone number"
              }
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="+1 (123) 456-7890"
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input
            id="jobTitle"
            type="text"
            {...register('jobTitle')}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="Your position in company"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6">
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
        <textarea
          id="additionalInfo"
          {...register('additionalInfo')}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all min-h-[100px]"
          placeholder="Any additional details about your request..."
        />
      </div>
    </div>
  );
}