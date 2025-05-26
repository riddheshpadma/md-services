// components/sections/ProcessSection.tsx
import { motion } from "framer-motion";
import { 
  Search, 
  Palette, 
  Code, 
  TestTube2, 
  Rocket 
} from "lucide-react";

const processSteps = [
  {
    title: "Discovery",
    description: "We analyze your requirements and define project scope.",
    icon: <Search className="w-6 h-6" />,
    color: "from-[#5C213C] to-[#7E2D56]"
  },
  {
    title: "Design",
    description: "Creating wireframes and prototypes for your approval.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-[#7E2D56] to-[#A03A70]"
  },
  {
    title: "Development",
    description: "Agile implementation with regular progress updates.",
    icon: <Code className="w-6 h-6" />,
    color: "from-[#A03A70] to-[#C5487E]"
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance and user testing.",
    icon: <TestTube2 className="w-6 h-6" />,
    color: "from-[#C5487E] to-[#D56B9A]"
  },
  {
    title: "Deployment",
    description: "Smooth launch and post-launch support.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-[#D56B9A] to-[#E58FB6]"
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-[#C5487E] uppercase">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C213C] mt-4 mb-6">
            Seamless Development Journey
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our proven process ensures quality at every stage of your project.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#5C213C] to-[#E58FB6] transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      <div className={`lg:w-1/2 ${isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'} text-center`}>
        <div className="lg:hidden mb-6 flex justify-center">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
            {step.icon}
          </div>
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="inline-block"
        >
          <div className={`p-1 rounded-xl bg-gradient-to-r ${step.color} inline-block shadow-lg`}>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#5C213C] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="hidden lg:flex w-1/2 justify-center">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-xl relative z-10`}>
          {step.icon}
         
        </div>
      </div>
      
      <div className={`lg:w-1/2 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
        {/* Empty for layout balancing */}
      </div>
    </motion.div>
  );
}