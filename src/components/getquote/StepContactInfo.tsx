import { UseFormRegister } from 'react-hook-form';
import { QuoteFormData } from './QuoteForm';

export default function StepContactInfo({ register }: { register: UseFormRegister<QuoteFormData> }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Contact Information</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input
            type="text"
            id="contactName"
            {...register('contactName', { required: true })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="First and last name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>
    </div>
  );
}