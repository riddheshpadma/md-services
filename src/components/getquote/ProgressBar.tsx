export default function ProgressBar({ progress }: { progress: number }) {
    return (
      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }