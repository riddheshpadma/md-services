import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { QuoteFormData } from './QuoteForm';

const services = [
  {
    id: 'customSoftware',
    value: 'Custom Software Development',
    title: 'Custom Software',
    description: 'Tailored solutions for your unique business needs'
  },
  {
    id: 'webMobile',
    value: 'Web and Mobile App Development',
    title: 'Web & Mobile Apps',
    description: 'Cross-platform applications for all devices'
  },
  {
    id: 'cloudSolutions',
    value: 'Cloud Solutions',
    title: 'Cloud Solutions',
    description: 'Scalable infrastructure for your applications'
  },
  {
    id: 'uiux',
    value: 'UI/UX Design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user experiences'
  },
  {
    id: 'qaTesting',
    value: 'Quality Assurance and Testing',
    title: 'QA & Testing',
    description: 'Ensure flawless performance'
  },
  {
    id: 'maintenance',
    value: 'Maintenance and Support',
    title: 'Maintenance',
    description: 'Ongoing support and updates'
  }
];

export default function StepServices({ register, watch }: { register: UseFormRegister<QuoteFormData>, watch: UseFormWatch<QuoteFormData> }) {
  const selectedServices = watch('services') || [];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Development Services</h2>
      
      <p className="text-gray-600 mb-6">Which services are you interested in? (Select all that apply) *</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map(service => (
          <div 
            key={service.id}
            className={`flex items-start p-4 border rounded-lg transition-all ${
              selectedServices.includes(service.value) 
                ? 'border-indigo-300 bg-indigo-50' 
                : 'border-gray-200 hover:border-indigo-300'
            }`}
          >
            <input
              type="checkbox"
              id={service.id}
              value={service.value}
              {...register('services', { required: true })}
              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1"
            />
            <label htmlFor={service.id} className="ml-3 text-gray-700">
              <span className="font-medium">{service.title}</span>
              <p className="text-sm text-gray-500 mt-1">{service.description}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}