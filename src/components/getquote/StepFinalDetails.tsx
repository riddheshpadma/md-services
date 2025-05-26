import { UseFormRegister } from 'react-hook-form';
import { QuoteFormData } from './QuoteForm';

export default function StepFinalDetails({ register }: { register: UseFormRegister<QuoteFormData> }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Final Details</h2>
      
      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
        <textarea
          id="comments"
          {...register('comments')}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
          placeholder="Tell us more about your project goals, specific requirements, or anything else we should know..."
        ></textarea>
      </div>
      
      <div className="mt-6">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="newsletter"
            {...register('newsletter')}
            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1"
          />
          <label htmlFor="newsletter" className="ml-3 text-gray-700">
            <span className="font-medium">Subscribe to our newsletter</span>
            <p className="text-sm text-gray-500 mt-1">Get updates on new services, case studies, and tech insights</p>
          </label>
        </div>
      </div>
    </div>
  );
}
