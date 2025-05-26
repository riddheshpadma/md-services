import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    excerpt: "Learn how to make your React applications faster and more efficient",
    category: "Web Development",
    date: "June 15, 2023",
    readTime: "6 min read",
    image: "/assets/blog-react.jpg"
  },
  {
    id: 4,
    title: "The Rise of Edge Computing",
    excerpt: "How edge computing is changing the landscape of cloud services",
    category: "Cloud Services",
    date: "July 2, 2023",
    readTime: "8 min read",
    image: "/assets/blog-edge.jpg"
  },
  {
    id: 5,
    title: "Building Cross-Platform Apps with Flutter",
    excerpt: "Our experience developing a production-ready Flutter application",
    category: "Mobile Apps",
    date: "July 18, 2023",
    readTime: "7 min read",
    image: "/assets/blog-flutter.jpg"
  },
  {
    id: 6,
    title: "AI-Powered E-commerce Success Story",
    excerpt: "How we helped a retail client increase conversions by 40% with AI",
    category: "Case Studies",
    date: "August 5, 2023",
    readTime: "9 min read",
    image: "/assets/blog-ecommerce.jpg"
  }
];

export default function AllBlogPosts() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mb-4">
            Latest Articles
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Browse our collection of technical insights and industry perspectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-[#C5487E] text-xs font-semibold">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-[#5C213C] my-3 group-hover:text-[#C5487E] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Link 
                  href={`/blogs/${post.id}`}
                  className="mt-4 inline-flex items-center text-[#5C213C] font-medium hover:text-[#C5487E] transition-colors"
                >
                  Read full article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}