export default function SuccessMessage() {
    return (
      <div className="text-center py-12">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-3 text-2xl font-bold text-gray-800">Thank You!</h2>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          Your quote request has been submitted successfully. Our team will review your information and contact you within 24 hours to discuss next steps.
        </p>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            In the meantime, explore our <a href="#" className="text-indigo-600 hover:underline">case studies</a> or learn more about our <a href="#" className="text-indigo-600 hover:underline">development process</a>.
          </p>
        </div>
      </div>
    );
  }