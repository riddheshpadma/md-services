import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { QuoteFormData } from './QuoteForm';

const challenges = [
  {
    id: 'efficiency',
    value: 'Efficiency and Productivity',
    title: 'Efficiency Issues',
    description: 'Processes are slow or cumbersome'
  },
  {
    id: 'customization',
    value: 'Customization and Flexibility',
    title: 'Lack of Flexibility',
    description: 'Solutions don\'t adapt to your needs'
  },
  {
    id: 'userExperience',
    value: 'User Experience',
    title: 'Poor UX',
    description: 'Users struggle with your software'
  },
  {
    id: 'scalability',
    value: 'Scalability',
    title: 'Scalability',
    description: 'System can\'t handle growth'
  },
  {
    id: 'security',
    value: 'Data Security',
    title: 'Security Concerns',
    description: 'Worries about data protection'
  },
  {
    id: 'cost',
    value: 'Cost-Effectiveness',
    title: 'High Costs',
    description: 'Development is too expensive'
  },
  {
    id: 'speed',
    value: 'Speed to Market',
    title: 'Slow Development',
    description: 'Can\'t launch products fast enough'
  },
  {
    id: 'integration',
    value: 'System Integration',
    title: 'Integration Issues',
    description: 'Systems don\'t work together'
  }
];

export default function StepChallenges({ register, watch }: { register: UseFormRegister<QuoteFormData>, watch: UseFormWatch<QuoteFormData> }) {
  const selectedChallenges = watch('challenges') || [];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">Current Challenges</h2>
      
      <p className="text-gray-600 mb-6">What challenges are you facing? (Select all that apply) *</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {challenges.map(challenge => (
          <div 
            key={challenge.id}
            className={`flex items-start p-4 border rounded-lg transition-all ${
              selectedChallenges.includes(challenge.value)
                ? 'border-indigo-300 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-300'
            }`}
          >
            <input
              type="checkbox"
              id={challenge.id}
              value={challenge.value}
              {...register('challenges', { required: true })}
              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1"
            />
            <label htmlFor={challenge.id} className="ml-3 text-gray-700">
              <span className="font-medium">{challenge.title}</span>
              <p className="text-sm text-gray-500 mt-1">{challenge.description}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}