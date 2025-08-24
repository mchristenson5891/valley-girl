"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Award } from "lucide-react";
import { stylists } from "@/lib/data";

export default function StylistsPage() {
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
              Our Stylists
            </span>
          </h1>
          <p className="text-xl text-salon-neutral-600 max-w-2xl mx-auto">
            Meet our team of talented professionals dedicated to making you look and feel your best
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <Link href={`/stylists/${stylist.id}`} className="block transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-80 bg-gradient-to-br from-salon-rose-100 to-salon-rose-100 overflow-hidden">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <h2 className="text-3xl font-bold text-white">{stylist.name}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-salon-neutral-600 mb-4 line-clamp-3">{stylist.bio}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-salon-rose-500 mr-2" />
                      <span className="font-semibold text-salon-charcoal">Specialties:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stylist.specialties.slice(0, 3).map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-salon-rose-50 text-salon-rose-500 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                      {stylist.specialties.length > 3 && (
                        <span className="px-3 py-1 bg-salon-neutral-100 text-salon-neutral-600 rounded-full text-sm">
                          +{stylist.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="flex items-center text-salon-neutral-600">
                      <Instagram className="h-4 w-4 mr-1" />
                      {stylist.instagram}
                    </span>
                    <span className="text-salon-rose-500 font-medium group-hover:text-salon-rose-600 transition-colors">
                      View Profile →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}