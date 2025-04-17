"use client";

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Footer from "@/components/Footer";
import BlogPosts from "./components/BlogPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BlogPosts />
      <Footer />
    </main>
  );
}
