"use client";

import { MapPin } from "lucide-react";
import { salonInfo } from "@/lib/data";

export default function GoogleMap() {
  // Valley Girl Salon coordinates (approximated from address)
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977584595624!2d-122.42191798468186!3d37.78790797975744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus`;
  
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
        title="Valley Girl Salon Location"
      />
      
      {/* Map Overlay Card */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white rounded-xl shadow-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-salon-rose-100 rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5 text-salon-rose-500" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-salon-charcoal">Valley Girl Salon</h3>
            <p className="text-sm text-salon-neutral-600 mt-1">{salonInfo.address}</p>
            <div className="flex gap-3 mt-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(salonInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-salon-rose-500 hover:text-salon-rose-600 font-medium transition-colors"
              >
                Get Directions
              </a>
              <a
                href={`tel:${salonInfo.phone}`}
                className="text-sm text-salon-teal-500 hover:text-salon-teal-600 font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}