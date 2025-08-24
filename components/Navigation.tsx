"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Scissors, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/stylists", label: "Stylists" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled || !isHomePage
        ? 'bg-white shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled || !isHomePage ? 'h-16' : 'h-20'
        }`}>
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="transition-transform duration-300 group-hover:rotate-12">
              <Scissors className={`transition-all duration-300 ${
                scrolled || !isHomePage
                  ? 'h-7 w-7 text-salon-rose-500' 
                  : 'h-8 w-8 text-white drop-shadow-lg'
              }`} />
            </div>
            <span className={`font-bold transition-all duration-300 ${
              scrolled || !isHomePage
                ? 'text-xl text-salon-rose-600' 
                : 'text-2xl text-white drop-shadow-lg'
            }`}>
              Valley Girl
            </span>
          </Link>

          <div className={`hidden md:flex items-center space-x-8 transition-all duration-500 ${
            scrolled || !isHomePage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 group ${
                    isActive 
                      ? 'text-salon-rose-500' 
                      : 'text-salon-neutral-700 hover:text-salon-rose-500'
                  }`}
                >
                  {link.label}
                  {/* Animated underline for all links */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-salon-rose-500 transition-all duration-300 ${
                    isActive 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
            <Link
              href="https://instagram.com/valleygirlsalon"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${
                scrolled || !isHomePage ? 'text-salon-neutral-700 hover:text-salon-rose-500' : 'text-white'
              }`}
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="/book"
              className={`relative px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                scrolled || !isHomePage
                  ? 'bg-salon-rose-500 text-white hover:bg-salon-rose-600' 
                  : 'bg-white text-salon-rose-500 hover:bg-salon-rose-50'
              }`}
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled || !isHomePage
                ? 'hover:bg-gray-100 text-salon-neutral-700' 
                : 'hover:bg-white/20 text-white'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-lg rounded-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-salon-rose-50 text-salon-rose-500 font-medium'
                          : 'text-salon-neutral-700 hover:bg-salon-neutral-50 hover:text-salon-rose-500'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Link
                  href="https://instagram.com/valleygirlsalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-salon-neutral-700 hover:text-salon-rose-500 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 text-center bg-salon-rose-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:bg-salon-rose-600 transition-all duration-200 font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}