import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#5C213C] to-[#7a2b52] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 rounded-full p-4">
              <Mail className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Insights
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, tips, and industry news
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full text-[#5C213C] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#5C213C] px-6 py-3 rounded-full font-bold hover:bg-pink-100 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-pink-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}