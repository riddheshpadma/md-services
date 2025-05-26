"use client";

import BlogHero from "../../../components/blogs/BlogHero";
import FeaturedPosts from "../../../components/blogs/FeaturedPosts";
import CategoriesFilter from "../../../components/blogs/CategoriesFilter";
import AllBlogPosts from "../../../components/blogs/AllBlogPosts";
import NewsletterSignup from "../../../components/blogs/NewsletterSignup";
import Navbar from "../../../components/ui/Navbar";
import Footer from "../../../components/ui/Footer";

export default function BlogsPage() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50">
      <Navbar />
      <BlogHero />
      <FeaturedPosts />
      <CategoriesFilter />
      <AllBlogPosts />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}