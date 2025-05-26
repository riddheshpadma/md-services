'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProgressBar from './ProgressBar';
import StepBasicInfo from './StepBasicInfo';
import StepServices from './StepServices';
import StepChallenges from './StepChallenges';
import StepProjectDetails from './StepProjectDetails';
import StepContactInfo from './StepContactInfo';
import StepFinalDetails from './StepFinalDetails';
import SuccessMessage from './SuccessMessage';

export type QuoteFormData = {
  companyName: string;
  industry: string;
  fullName: string;
  email: string;
  phone: string;
  jobTitle?: string;
  additionalInfo?: string;
  services: string[];
  challenges: string[];
  budget: string;
  timeline: string;
  contactName: string;
  
  comments: string;
  newsletter: boolean;
};

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<QuoteFormData>({
    defaultValues: {
      newsletter: true
    }
  });

  const onSubmit = (data: QuoteFormData) => {
    console.log(data);
    // Here you would typically send the data to your API
    setIsSubmitted(true);
  };

  const nextStep = () => {
    // Add validation logic here if needed
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <ProgressBar progress={(step / 6) * 100} />
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        {step === 1 && <StepBasicInfo register={register} />}
        {step === 2 && <StepServices register={register} watch={watch} />}
        {step === 3 && <StepChallenges register={register} watch={watch} />}
        {step === 4 && <StepProjectDetails register={register} />}
        {step === 5 && <StepContactInfo register={register} />}
        {step === 6 && <StepFinalDetails register={register} />}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="text-indigo-600 px-6 py-2 rounded-lg font-medium border border-indigo-200 hover:bg-indigo-50 transition-all"
            >
              ← Back
            </button>
          )}
          
          {step < 6 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Next <span className="ml-1">→</span>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Submit Quote Request
            </button>
          )}
        </div>
      </form>
    </div>
  );
}