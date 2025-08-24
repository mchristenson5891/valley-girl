"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Filter, Search, ExternalLink, Package, Sparkles, Heart } from "lucide-react";
import { brands } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

// Actual products from Valley Girl Square store
const featuredProducts = [
  {
    id: 1,
    name: "Davines Oi Hair Butter",
    price: "$56.00",
    brand: "Davines",
    category: "Hair Care",
    description: "Luxurious antioxidant nourishing butter",
    inStock: true
  },
  {
    id: 2,
    name: "Valley Girl Red Dad Hat",
    price: "$36.00",
    brand: "Valley Girl",
    category: "Merchandise",
    description: "Classic embroidered dad hat",
    inStock: true
  },
  {
    id: 3,
    name: "K18 Leave-In Molecular Repair",
    price: "$75.00",
    brand: "K18",
    category: "Treatment",
    description: "4-minute molecular repair mask",
    inStock: true
  }
];

export default function ShopPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSquareStore, setShowSquareStore] = useState(false);

  const filteredBrands = selectedBrand === "all" 
    ? brands 
    : brands.filter(brand => brand.id === selectedBrand);

  const searchedBrands = searchQuery
    ? filteredBrands.filter(brand => 
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredBrands;

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream via-white to-salon-rose-50">
      {/* Hero Header Section */}
      <div className="relative h-[50vh] overflow-hidden">
        {/* Mobile-optimized hero background */}
        <div className="absolute inset-0">
          {/* Desktop background - hair products */}
          <div className="hidden md:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2011')] bg-cover bg-center"></div>
          {/* Mobile background - portrait oriented hair styling */}
          <div className="md:hidden absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1480')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Shop Valley Girl
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg">
              Premium products for your perfect look
            </p>
            <button
              onClick={() => setShowSquareStore(true)}
              className="bg-white text-salon-rose-500 px-8 py-3 rounded-full font-semibold hover:bg-salon-rose-50 hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now on Square
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <Sparkles className="inline-block h-8 w-8 text-salon-rose-500 mr-2" />
            Featured Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all border border-salon-neutral-100">
                <div className="h-48 bg-gradient-to-br from-salon-rose-100 to-salon-rose-50 rounded-lg mb-4 flex items-center justify-center">
                  <Package className="h-20 w-20 text-salon-rose-300" />
                </div>
                <span className="text-xs font-semibold text-salon-rose-500 uppercase">{product.brand}</span>
                <h3 className="font-bold text-lg text-salon-charcoal mt-1">{product.name}</h3>
                <p className="text-salon-neutral-600 text-sm mt-2 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-salon-charcoal">{product.price}</span>
                  <span className={`text-sm ${product.inStock ? 'text-salon-teal-500' : 'text-salon-neutral-400'}`}>
                    {product.inStock ? '✓ In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://valleygirl-salon.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-salon-rose-500 hover:text-salon-rose-600 font-semibold transition-colors"
            >
              View All Products
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-salon-neutral-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent hover:border-salon-rose-300 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-salon-neutral-600" />
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-3 rounded-full border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent hover:border-salon-rose-300 transition-all"
            >
              <option value="all">All Brands</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          <Heart className="inline-block h-8 w-8 text-salon-rose-500 mr-2" />
          Our Premium Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {searchedBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-salon-neutral-100"
            >
              <div className="aspect-square bg-gradient-to-br from-white to-salon-neutral-50 flex items-center justify-center p-6 group-hover:from-salon-rose-50 group-hover:to-salon-rose-100 transition-colors">
                {/* Brand Logo Placeholder */}
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-salon-rose-400 to-salon-rose-300 bg-clip-text text-transparent mb-2">
                    {brand.name.charAt(0)}
                  </div>
                  <span className="text-xs text-salon-neutral-500 font-medium">{brand.name}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-salon-charcoal text-sm mb-1">{brand.name}</h3>
                <p className="text-salon-neutral-600 text-xs line-clamp-2">{brand.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {searchedBrands.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <ShoppingBag className="h-16 w-16 text-salon-neutral-300 mx-auto mb-4" />
            <p className="text-salon-neutral-500">No products found matching your search.</p>
          </motion.div>
        )}

        {/* Square Store Embed Modal */}
        {showSquareStore && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Valley Girl Store - Powered by Square</h2>
                <button
                  onClick={() => setShowSquareStore(false)}
                  className="text-salon-neutral-500 hover:text-salon-neutral-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              <iframe
                src="https://valleygirl-salon.square.site"
                className="w-full h-[80vh]"
                title="Valley Girl Square Store"
              />
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Shop In-Store or Online</h2>
          <p className="text-lg mb-6 text-salon-rose-100 max-w-2xl mx-auto">
            Get personalized product recommendations from our expert stylists or shop our full collection online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowSquareStore(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-salon-rose-500 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Online
            </button>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 bg-salon-rose-600 text-white rounded-full font-medium hover:bg-salon-rose-700 transition-all hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}