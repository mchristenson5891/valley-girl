import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, Heart } from "lucide-react";
import { salonInfo, stylists, services } from "@/lib/data";
import BrandsSection from "@/components/BrandsSection";
import Testimonials from "@/components/Testimonials";
import { FadeInUp, FadeInScale, StaggerChildren, StaggerItem } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Mobile-optimized hero background */}
        <div className="absolute inset-0">
          {/* Desktop background */}
          <div className="hidden md:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074')] bg-cover bg-center"></div>
          {/* Mobile background - portrait oriented */}
          <div className="md:hidden absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1469')] bg-cover bg-top"></div>
        </div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-salon-rose-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="animate-fade-in-up"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              <span className="text-white drop-shadow-2xl">
                Valley Girl
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-salon-rose-200 drop-shadow-2xl font-dancing">Salon</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-salon-rose-100 mb-4 font-dancing drop-shadow-xl animate-fade-in animation-delay-200">
              {salonInfo.tagline}
            </p>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow animate-fade-in animation-delay-300">
              {salonInfo.heroText}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-salon-rose-500 rounded-full hover:shadow-xl hover:bg-salon-rose-600 transform hover:scale-105 transition-all duration-200"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/stylists"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-salon-teal-500 border-2 border-white rounded-full shadow-md hover:shadow-xl hover:bg-salon-teal-600 transform hover:scale-105 transition-all duration-200"
              >
                Meet Our Stylists
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div
            className="mt-16 flex justify-center space-x-1 animate-pulse-slow"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p
            className="mt-2 text-gray-600"
          >
            5.0 rating from 500+ happy clients
          </p>
        </div>
      </section>

      <section id="stylists" className="py-20 bg-salon-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Talented Stylists</h2>
            <p className="text-lg text-gray-600">Meet the artists behind your transformation</p>
          </FadeInUp>
          
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" staggerDelay={0.1}>
            {stylists.map((stylist) => (
              <StaggerItem key={stylist.id}>
                <Link
                  href={`/stylists/${stylist.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-square bg-salon-rose-100 mb-3">
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-center font-semibold text-salon-neutral-800 group-hover:text-salon-rose-500 transition-colors">
                    {stylist.name}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section id="services" className="py-20 bg-salon-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Professional hair care tailored to you</p>
          </FadeInUp>
          
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {services.map((category) => (
              <StaggerItem key={category.category}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-salon-rose-500 mr-2" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.slice(0, 3).map((item) => (
                    <li key={item.name} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name}</span>
                      <span className="text-gray-900 font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
                {category.items.length > 3 && (
                  <Link
                    href="/services"
                    className="mt-4 inline-block text-salon-teal-500 hover:text-salon-teal-600 text-sm font-medium"
                  >
                    View all →
                  </Link>
                )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <BrandsSection />
      
      <Testimonials />

      <section className="py-20 bg-salon-rose-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInScale>
            <h2 className="text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
            <p className="text-xl mb-8 text-salon-rose-100">
              Book your appointment today and let us bring out your inner Valley Girl
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-salon-rose-600 bg-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </FadeInScale>
        </div>
      </section>
    </div>
  );
}