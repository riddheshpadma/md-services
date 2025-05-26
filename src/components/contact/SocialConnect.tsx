// components/contact/SocialConnect.tsx
import { motion } from "framer-motion";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

export default function SocialConnect() {
  const socialLinks = [
    {
      icon: <LuLinkedin size={28} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/106391569",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <RiTwitterXFill size={28} />,
      name: "Twitter",
      url: "https://x.com/mandaladevhub",
      color: "from-black to-gray-800"
    },
    {
      icon: <BsInstagram size={28} />,
      name: "Instagram",
      url: "https://www.instagram.com/mandaladevhub/",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-pink-50 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#5C213C] mb-4">Connect With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest projects and insights.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-r ${social.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}