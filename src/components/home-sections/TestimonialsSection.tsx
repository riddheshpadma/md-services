// components/sections/TestimonialsSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechInnovate",
    content: "Mandala Dignite transformed our business with their AI solution. Their team delivered beyond our expectations with their technical expertise and professional approach.",
    image: "/assets/testimonials/testimonial-1.jpg",
    rating: 5,
    project: "AI-Powered Analytics Platform"
  },
  {
    name: "Michael Chen",
    role: "CTO, DigitalFlow",
    content: "The web application they built for us handles 10x more traffic than our previous solution while being more cost-effective. Truly impressive engineering.",
    image: "/assets/testimonials/testimonial-2.jpg",
    rating: 5,
    project: "Enterprise Web Application"
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager, CloudNine",
    content: "Their agile approach and clear communication made the development process smooth and predictable. We're already planning our next project with them.",
    image: "/assets/testimonials/testimonial-3.jpg",
    rating: 5,
    project: "Mobile Banking Solution"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-[#C5487E] uppercase">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5C213C] mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Don't just take our word for it - hear from businesses we've transformed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/case-studies">
            <button className="inline-flex items-center bg-gradient-to-r from-[#5C213C] to-[#C5487E] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5C213C] to-[#C5487E] rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
      <div className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all h-full border border-gray-100">
        <Quote className="absolute top-6 right-6 text-pink-100 w-8 h-8" />
        
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-600 mb-6 relative z-10">"{testimonial.content}"</p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#5C213C]">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-[#5C213C]">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-[#C5487E] font-medium mt-1">{testimonial.project}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}