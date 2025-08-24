"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Heart } from "lucide-react";
import { services } from "@/lib/data";
import Link from "next/link";

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Color Services": <Palette className="h-8 w-8" />,
  "Cut & Style": <Scissors className="h-8 w-8" />,
  "Treatments": <Sparkles className="h-8 w-8" />,
  "Extensions": <Heart className="h-8 w-8" />
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-salon-neutral-600 max-w-2xl mx-auto">
            Professional hair care services tailored to bring out your unique beauty
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-salon-neutral-100"
            >
              <div className="bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                  <div className="text-white/80">
                    {categoryIcons[category.category]}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center py-3 border-b border-salon-neutral-100 last:border-0"
                    >
                      <span className="text-salon-neutral-700 font-medium">{item.name}</span>
                      <span className="text-salon-rose-500 font-semibold whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-lg mb-6 text-salon-rose-100 max-w-2xl mx-auto">
            All services include a consultation to ensure we understand your vision and deliver results that exceed your expectations.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-salon-rose-500 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Book Your Service
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-12 text-center text-salon-neutral-600"
        >
          <p className="text-sm">
            * Prices may vary based on hair length, thickness, and complexity.
            <br />
            Final pricing will be confirmed during consultation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}