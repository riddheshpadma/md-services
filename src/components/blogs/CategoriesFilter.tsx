import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All Topics",
  "AI Integration",
  "Web Development",
  "Mobile Apps",
  "Cloud Services",
  "Case Studies"
];

export default function CategoriesFilter() {
  const [activeCategory, setActiveCategory] = useState("All Topics");

  return (
    <section className="py-12 bg-pink-50 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                activeCategory === category
                  ? "bg-[#5C213C] text-white"
                  : "bg-white text-[#5C213C] hover:bg-[#5C213C]/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}