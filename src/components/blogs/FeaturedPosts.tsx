import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "How artificial intelligence is revolutionizing the way we build websites and applications",
    category: "AI Integration",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/images/services.jpg"
  },
  {
    id: 2,
    title: "Building Scalable Microservices",
    excerpt: "Best practices for creating maintainable and scalable microservice architectures",
    category: "Backend",
    date: "June 2, 2023",
    readTime: "7 min read",
    image: "/assets/blog-microservices.jpg"
  }
];

export default function FeaturedPosts() {
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
          <span className="text-[#C5487E] font-semibold tracking-wider uppercase text-sm">
            Featured Content
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
            Editor's Picks
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Dive into our most insightful articles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden max-h-[60%] rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C213C] to-transparent opacity-80 z-10"></div>
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                <span className="bg-[#C5487E] text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">{post.date} · {post.readTime}</span>
                  <Link 
                    href={`/blogs/${post.id}`} 
                    className="flex items-center text-sm font-semibold hover:text-pink-200 transition-colors"
                  >
                    Read more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}