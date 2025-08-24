"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Award, ArrowLeft, Calendar } from "lucide-react";
import { stylists } from "@/lib/data";

export default function StylistProfilePage() {
  const params = useParams();
  const stylist = stylists.find((s) => s.id === params.id);

  if (!stylist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-salon-charcoal mb-4">Stylist not found</h1>
          <Link
            href="/stylists"
            className="text-salon-rose-500 hover:text-salon-rose-600 font-medium transition-colors"
          >
            ← Back to stylists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/stylists"
          className="inline-flex items-center text-salon-neutral-600 hover:text-salon-rose-500 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to all stylists
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[600px] bg-gradient-to-br from-salon-rose-100 to-salon-rose-100 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={stylist.image}
                alt={stylist.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                <h1 className="text-5xl font-bold text-white mb-2">{stylist.name}</h1>
                <a
                  href={`https://instagram.com/${stylist.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  {stylist.instagram}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-salon-charcoal mb-4">About {stylist.name}</h2>
              <p className="text-lg text-salon-neutral-600 leading-relaxed">{stylist.bio}</p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-salon-rose-500 mr-2" />
                <h3 className="text-2xl font-bold text-salon-charcoal">Specialties</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stylist.specialties.map((specialty) => (
                  <div
                    key={specialty}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-salon-neutral-100"
                  >
                    <span className="text-salon-charcoal font-medium">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Book with {stylist.name}</h3>
              <p className="mb-6 text-salon-rose-100">
                Ready to transform your look? Book your appointment with {stylist.name} today!
              </p>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-salon-rose-500 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Link>
            </div>

            <div className="bg-salon-cream rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-salon-charcoal mb-3">Gallery</h3>
              <p className="text-salon-neutral-600">
                Check out {stylist.name}&apos;s work on Instagram for inspiration and ideas for your next visit!
              </p>
              <a
                href={`https://instagram.com/${stylist.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-salon-rose-500 hover:text-salon-rose-600 font-medium transition-colors"
              >
                View on Instagram
                <Instagram className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}