import Link from "next/link";
import { Instagram, Phone, Mail, MapPin, Clock, Heart, Facebook } from "lucide-react";
import { salonInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-salon-charcoal to-salon-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Valley Girl
              <span className="text-salon-rose-400 font-dancing ml-2">Salon</span>
            </h3>
            <p className="text-salon-neutral-300 mb-4">{salonInfo.tagline}</p>
            <div className="flex space-x-4">
              <a
                href={salonInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-salon-rose-500 rounded-full flex items-center justify-center hover:bg-salon-rose-400 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-salon-rose-500 rounded-full flex items-center justify-center hover:bg-salon-rose-400 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-salon-rose-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/stylists" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300">
                  Our Stylists
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300">
                  Book Appointment
                </Link>
              </li>
              <li>
                <a 
                  href="https://valleygirl-salon.square.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300"
                >
                  Online Store ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-salon-rose-400">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(salonInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300 group"
                >
                  <MapPin className="h-5 w-5 text-salon-rose-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{salonInfo.address}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${salonInfo.phone}`} 
                  className="flex items-center space-x-2 text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300 group"
                >
                  <Phone className="h-5 w-5 text-salon-rose-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{salonInfo.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${salonInfo.email}`} 
                  className="flex items-center space-x-2 text-salon-neutral-300 hover:text-salon-rose-400 transition-colors duration-300 group"
                >
                  <Mail className="h-5 w-5 text-salon-rose-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{salonInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-salon-rose-400 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Hours
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between text-salon-neutral-300">
                <span>Monday</span>
                <span className="font-medium">{salonInfo.hours.monday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Tuesday</span>
                <span className="font-medium">{salonInfo.hours.tuesday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Wednesday</span>
                <span className="font-medium">{salonInfo.hours.wednesday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Thursday</span>
                <span className="font-medium">{salonInfo.hours.thursday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Friday</span>
                <span className="font-medium">{salonInfo.hours.friday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Saturday</span>
                <span className="font-medium">{salonInfo.hours.saturday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Sunday</span>
                <span className="font-medium">{salonInfo.hours.sunday}</span>
              </li>
            </ul>
            
            <Link 
              href="/book"
              className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-salon-rose-500 text-white rounded-full text-sm font-medium hover:bg-salon-rose-400 transition-all duration-300 hover:scale-105 w-full text-center"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="border-t border-salon-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-salon-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} Valley Girl Salon. All rights reserved.
            </p>
            <p className="text-salon-neutral-400 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-salon-rose-400 mx-1 animate-pulse" /> in California
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}