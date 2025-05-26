// components/contact/ContactInfo.tsx
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      value: "mandaladevhub@gmail.com",
      link: "mailto:mandaladignite@gmail.com"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      value: "+91 92264 06267",
      link: "tel:+919226406267"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "Solapur-413006, Bharat"
    }
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pink-50 rounded-xl p-8 text-center border border-pink-100 hover:shadow-lg transition-all"
            >
              <div className="bg-gradient-to-r from-[#5C213C] to-[#C5487E] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-[#5C213C] mb-2">{method.title}</h3>
              {method.link ? (
                <a href={method.link} className="text-gray-600 hover:text-[#C5487E] transition-colors">
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-600">{method.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}