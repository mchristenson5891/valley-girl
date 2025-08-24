"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-salon-neutral-200 p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Cookie className="h-6 w-6 text-salon-rose-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-salon-charcoal mb-2">
                  We value your privacy
                </h3>
                <p className="text-sm text-salon-neutral-600 mb-4">
                  We use cookies to enhance your browsing experience and analyze our traffic. 
                  By clicking &quot;Accept&quot;, you consent to our use of cookies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-salon-rose-500 text-white rounded-full text-sm font-medium hover:bg-salon-rose-600 transition-colors"
                  >
                    Accept Cookies
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-salon-neutral-100 text-salon-neutral-700 rounded-full text-sm font-medium hover:bg-salon-neutral-200 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="flex-shrink-0 text-salon-neutral-400 hover:text-salon-neutral-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}