"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Valley Girl Salon transformed my hair! The balayage is absolutely perfect, and the stylists really listened to what I wanted. I've never felt more confident!",
    service: "Balayage & Cut",
    stylist: "Malaika",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Emily Chen",
    rating: 5,
    text: "Best salon experience in SF! The atmosphere is welcoming, the team is professional, and my hair has never looked better. Worth every penny!",
    service: "Full Highlights",
    stylist: "Sarah",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Jessica Martinez",
    rating: 5,
    text: "I've been coming here for years and they never disappoint. The K18 treatment literally saved my damaged hair. Can't recommend enough!",
    service: "K18 Treatment",
    stylist: "Alex",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Amanda Roberts",
    rating: 5,
    text: "The attention to detail is incredible. My stylist took the time to understand my lifestyle and gave me a cut that's both stylish and manageable.",
    service: "Cut & Style",
    stylist: "Jordan",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Nicole Kim",
    rating: 5,
    text: "Finally found my hair home in SF! The color correction was flawless, and the team made me feel so comfortable throughout the process.",
    service: "Color Correction",
    stylist: "Jamie",
    date: "2 months ago"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-salon-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-salon-charcoal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-salon-neutral-600">
            Real reviews from our amazing Valley Girls
          </p>
          <div className="flex justify-center items-center mt-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-salon-neutral-600">5.0 from 500+ reviews</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <Quote className="h-12 w-12 text-salon-rose-200 mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-salon-neutral-700 mb-6 italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              
              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-salon-charcoal text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-salon-neutral-600">
                      {testimonials[currentIndex].service} with {testimonials[currentIndex].stylist}
                    </p>
                    <p className="text-xs text-salon-neutral-500 mt-1">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-2 text-sm text-salon-neutral-600">
                      <span className="px-3 py-1 bg-salon-rose-100 text-salon-rose-500 rounded-full">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-salon-rose-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-salon-neutral-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-salon-rose-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-salon-neutral-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-salon-rose-500"
                  : "bg-salon-neutral-300 hover:bg-salon-neutral-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}