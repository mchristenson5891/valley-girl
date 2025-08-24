"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, TrendingUp } from "lucide-react";

// Blog categories
const categories = [
  "All Posts",
  "Hair Care Tips",
  "Trending Styles",
  "Product Reviews",
  "Seasonal Looks",
  "Tutorials"
];

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Maintaining Your Balayage",
    excerpt: "Learn how to keep your balayage looking fresh between salon visits with our expert tips and recommended products.",
    category: "Hair Care Tips",
    author: "Malaika",
    date: "January 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Spring 2024 Hair Trends: What's Hot Right Now",
    excerpt: "From copper tones to modern shags, discover the hottest hair trends taking over this spring season.",
    category: "Trending Styles",
    author: "Sarah",
    date: "January 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "K18 vs Olaplex: Which Treatment is Right for You?",
    excerpt: "We break down the differences between these two powerhouse treatments to help you choose the best one for your hair.",
    category: "Product Reviews",
    author: "Jordan",
    date: "January 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "How to Style Curtain Bangs Like a Pro",
    excerpt: "Master the art of styling curtain bangs with our step-by-step tutorial and product recommendations.",
    category: "Tutorials",
    author: "Casey",
    date: "January 8, 2024",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "Winter Hair Care: Protecting Your Hair from the Cold",
    excerpt: "Combat dry, brittle winter hair with these essential tips and hydrating treatments.",
    category: "Seasonal Looks",
    author: "Alex",
    date: "January 5, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "The Science Behind Hair Damage and How to Prevent It",
    excerpt: "Understanding what causes hair damage at a molecular level and how to protect your strands.",
    category: "Hair Care Tips",
    author: "Jamie",
    date: "January 3, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
    featured: false
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 bg-clip-text text-transparent">
              Hair Tips & Trends
            </span>
          </h1>
          <p className="text-xl text-salon-neutral-600 max-w-2xl mx-auto">
            Expert advice, tutorials, and the latest trends from our stylists
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-salon-neutral-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-salon-rose-500 text-white shadow-lg"
                  : "bg-white text-salon-neutral-700 hover:bg-salon-rose-50 border border-salon-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All Posts" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-salon-charcoal mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 text-salon-rose-500 mr-2" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-salon-rose-500 text-white rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-salon-neutral-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-salon-charcoal mb-2 group-hover:text-salon-rose-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-salon-neutral-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-salon-neutral-400 mr-1" />
                          <span className="text-sm text-salon-neutral-600">by {post.author}</span>
                        </div>
                        <span className="text-salon-rose-500 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-salon-neutral-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-salon-neutral-500 mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-salon-charcoal mb-2 group-hover:text-salon-rose-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-salon-neutral-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-salon-neutral-500">by {post.author}</span>
                    <ArrowRight className="h-4 w-4 text-salon-rose-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg mb-6 text-salon-rose-100 max-w-2xl mx-auto">
            Get the latest hair tips, trends, and exclusive offers delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-salon-charcoal placeholder-salon-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-salon-rose-500 rounded-full font-medium hover:bg-salon-rose-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}