import QuoteHero from '../../../components/getquote/QuoteHero';
import QuoteForm from '../../../components/getquote/QuoteForm';

export default function GetAQuote() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#e4e8f0]">
      <QuoteHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
           
            
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}