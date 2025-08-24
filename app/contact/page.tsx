"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Send } from "lucide-react";
import { salonInfo } from "@/lib/data";
import Link from "next/link";

export default function ContactPage() {
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
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-salon-neutral-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Visit us, call, or send us a message
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-salon-neutral-100">
              <h2 className="text-2xl font-bold text-salon-charcoal mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-salon-rose-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-salon-rose-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-salon-charcoal mb-1">Address</h3>
                    <p className="text-salon-neutral-600">{salonInfo.address}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(salonInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-salon-rose-500 hover:text-salon-rose-600 text-sm font-medium mt-1 inline-block transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-salon-rose-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-salon-rose-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-salon-charcoal mb-1">Phone</h3>
                    <a
                      href={`tel:${salonInfo.phone}`}
                      className="text-salon-neutral-600 hover:text-salon-rose-500 transition-colors"
                    >
                      {salonInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-salon-rose-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-salon-rose-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-salon-charcoal mb-1">Email</h3>
                    <a
                      href={`mailto:${salonInfo.email}`}
                      className="text-salon-neutral-600 hover:text-salon-rose-500 transition-colors"
                    >
                      {salonInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-salon-rose-100 rounded-full flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-salon-rose-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-salon-charcoal mb-1">Instagram</h3>
                    <a
                      href={salonInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-salon-neutral-600 hover:text-salon-rose-500 transition-colors"
                    >
                      {salonInfo.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-salon-neutral-100">
              <h2 className="text-2xl font-bold text-salon-charcoal mb-6 flex items-center">
                <Clock className="h-6 w-6 text-salon-rose-500 mr-2" />
                Hours of Operation
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b border-salon-neutral-100">
                  <span className="text-salon-neutral-600">Monday</span>
                  <span className="font-medium text-salon-charcoal">{salonInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-salon-neutral-100">
                  <span className="text-salon-neutral-600">Tuesday</span>
                  <span className="font-medium text-salon-charcoal">{salonInfo.hours.tuesday}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-salon-neutral-100">
                  <span className="text-salon-neutral-600">Wednesday</span>
                  <span className="font-medium text-salon-charcoal">{salonInfo.hours.wednesday}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-salon-neutral-100">
                  <span className="text-salon-neutral-600">Thursday</span>
                  <span className="font-medium text-salon-charcoal">{salonInfo.hours.thursday}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-salon-neutral-100">
                  <span className="text-salon-neutral-600">Friday</span>
                  <span className="font-medium text-salon-charcoal">{salonInfo.hours.friday}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-salon-neutral-100">
                  <span className="text-salon-neutral-600">Saturday</span>
                  <span className="font-medium text-salon-charcoal">{salonInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-salon-neutral-600">Sunday</span>
                  <span className="font-medium text-salon-charcoal">{salonInfo.hours.sunday}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-salon-neutral-100">
              <h2 className="text-2xl font-bold text-salon-charcoal mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent transition-all hover:border-salon-rose-300"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent transition-all hover:border-salon-rose-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="jane@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent resize-none transition-all hover:border-salon-rose-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 text-white py-3 rounded-lg font-medium hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-8 bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">Ready to Book?</h3>
              <p className="mb-4 text-salon-rose-100">
                Skip the wait and book your appointment online now!
              </p>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-salon-rose-500 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}