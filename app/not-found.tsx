"use client";

import Link from "next/link";
import { Scissors, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <Scissors className="h-24 w-24 text-salon-rose-400 mx-auto animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-salon-rose-500 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-salon-charcoal mb-4">
          Oops! Page Not Found
        </h2>
        
        <p className="text-lg text-salon-neutral-600 mb-8 max-w-md mx-auto">
          Looks like this page got a bad haircut and ran away! 
          Don&apos;t worry, we can help you find your way back.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-salon-rose-500 text-white rounded-full font-medium hover:bg-salon-rose-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Home className="mr-2 h-5 w-5" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-salon-rose-500 border-2 border-salon-rose-500 rounded-full font-medium hover:bg-salon-rose-50 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 p-6 bg-salon-rose-50 rounded-2xl">
          <h3 className="text-lg font-semibold text-salon-charcoal mb-3">
            Popular Pages
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/services"
              className="text-salon-rose-500 hover:text-salon-rose-600 underline transition-colors"
            >
              Services
            </Link>
            <Link
              href="/stylists"
              className="text-salon-rose-500 hover:text-salon-rose-600 underline transition-colors"
            >
              Our Stylists
            </Link>
            <Link
              href="/book"
              className="text-salon-rose-500 hover:text-salon-rose-600 underline transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="text-salon-rose-500 hover:text-salon-rose-600 underline transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}