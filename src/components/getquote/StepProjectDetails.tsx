import { UseFormRegister } from 'react-hook-form';
import { QuoteFormData } from './QuoteForm';

export default function StepProjectDetails({ register }: { register: UseFormRegister<QuoteFormData> }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Project Details</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
          <select
            id="budget"
            {...register('budget', { required: true })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
          >
            <option value="">Select your budget range</option>
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000 - $50,000">$10,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000 - $250,000">$100,000 - $250,000</option>
            <option value="Over $250,000">Over $250,000</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Project Timeline</label>
          <select
            id="timeline"
            {...register('timeline')}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all"
          >
            <option value="">Select your preferred timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>
    </div>
  );
}