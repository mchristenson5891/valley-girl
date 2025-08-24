import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { salonInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-salon-charcoal to-salon-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-salon-rose-400 to-salon-rose-300 bg-clip-text text-transparent mb-4">
              Valley Girl
            </h3>
            <p className="text-salon-neutral-300 mb-4">{salonInfo.tagline}</p>
            <Link
              href={salonInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-salon-neutral-300 hover:text-salon-rose-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>{salonInfo.instagram}</span>
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/stylists" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors">
                  Our Stylists
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-salon-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-salon-neutral-300">{salonInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-salon-rose-400 flex-shrink-0" />
                <a href={`tel:${salonInfo.phone}`} className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors">
                  {salonInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-salon-rose-400 flex-shrink-0" />
                <a href={`mailto:${salonInfo.email}`} className="text-salon-neutral-300 hover:text-salon-rose-400 transition-colors">
                  {salonInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-1">
              <li className="flex justify-between text-salon-neutral-300">
                <span>Mon-Fri:</span>
                <span>{salonInfo.hours.monday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Saturday:</span>
                <span>{salonInfo.hours.saturday}</span>
              </li>
              <li className="flex justify-between text-salon-neutral-300">
                <span>Sunday:</span>
                <span>{salonInfo.hours.sunday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-salon-neutral-700 mt-8 pt-8 text-center text-salon-neutral-400">
          <p>&copy; {new Date().getFullYear()} Valley Girl Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}