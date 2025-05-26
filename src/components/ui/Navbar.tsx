"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full flex justify-between items-center px-6 md:px-20  z-50 transition-all duration-300 ${
        scrolled ? "bg-[#C0467B] shadow-lg" : "bg-transparent"
      }`}
    >
      <Link href="/" className="z-50">
        <Image 
          src="/favicon.png" 
          alt="logo" 
          width={70} 
          height={50}
          className="hover:scale-105 transition-transform drop-shadow-2xl"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item, i) => (
          <motion.li 
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={` font-medium hover:text-pink-200 transition-colors ${
        scrolled ? "text-white " : "text-[#5C213C]"
      }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </motion.li>
        ))}
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-4"
        >
          <Link 
            href="/getquote" 
            className="bg-gradient-to-r from-[#FF7BAC] to-[#FF4081] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Get Quote
          </Link>
        </motion.li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setNavbar(!navbar)}
        className="md:hidden z-50"
        aria-label="Menu"
      >
        {navbar ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: navbar ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 w-full h-screen bg-[#5C213C] bg-opacity-95 backdrop-blur-md md:hidden flex flex-col items-center justify-center z-40"
      >
        <ul className="space-y-10 text-center">
          {navItems.map((item, i) => (
            <motion.li 
              key={i}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-medium text-white hover:text-pink-200"
            >
              <Link href={item.href} onClick={() => setNavbar(false)}>
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="pt-10"
          >
            <Link
              href="/getquote"
              onClick={() => setNavbar(false)}
              className="inline-block bg-gradient-to-r from-[#FF7BAC] to-[#FF4081] text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg"
            >
              Get Quote
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;