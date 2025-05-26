interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop - should be behind the modal but above other page content */}
      <div 
        className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" 
        aria-hidden="true"
        onClick={onClose} // Allow clicking backdrop to close
      ></div>
      
      {/* Modal container */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* This invisible spacer helps with vertical alignment */}
        <span 
          className="hidden sm:inline-block sm:align-middle sm:h-screen" 
          aria-hidden="true"
        >
          &#8203;
        </span>

        {/* Modal content - should be above the backdrop */}
        <div 
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 relative z-10" // Added relative and z-10 here
        >
          {/* Close button */}
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal content */}
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
              <div className="mt-2">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};