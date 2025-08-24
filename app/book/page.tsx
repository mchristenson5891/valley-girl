"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Scissors, ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { stylists, services } from "@/lib/data";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookingPage() {
  const [selectedStylist, setSelectedStylist] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState(1);
  const [showCalEmbed, setShowCalEmbed] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#e84c79" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepComplete = () => {
    switch (step) {
      case 1: return selectedService !== "";
      case 2: return selectedStylist !== "";
      case 3: return selectedDate !== "" && selectedTime !== "";
      case 4: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-white py-24 relative">
      {/* Subtle background pattern for visual interest */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069')] bg-cover"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 bg-clip-text text-transparent">
              Book Your Appointment
            </span>
          </h1>
          <p className="text-xl text-salon-neutral-600">
            Follow the steps below to schedule your visit
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    step >= stepNumber
                      ? "bg-salon-rose-500 text-white"
                      : "bg-salon-neutral-200 text-salon-neutral-500"
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="h-6 w-6" /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`w-full h-1 mx-2 transition-colors ${
                      step > stepNumber ? "bg-salon-rose-500" : "bg-salon-neutral-200"
                    }`}
                    style={{ width: "100px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-salon-neutral-600">Service</span>
            <span className="text-xs text-salon-neutral-600">Stylist</span>
            <span className="text-xs text-salon-neutral-600">Date & Time</span>
            <span className="text-xs text-salon-neutral-600">Confirm</span>
          </div>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-salon-neutral-100"
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-salon-charcoal mb-6 flex items-center">
                <Scissors className="h-6 w-6 text-salon-rose-500 mr-2" />
                Select Your Service
              </h2>
              <div className="space-y-4">
                {services.map((category) => (
                  <div key={category.category}>
                    <h3 className="font-semibold text-salon-neutral-700 mb-2">{category.category}</h3>
                    <div className="grid gap-2">
                      {category.items.map((service) => (
                        <label
                          key={service.name}
                          className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedService === service.name
                              ? "border-salon-rose-500 bg-salon-rose-50 shadow-md"
                              : "border-salon-neutral-200 hover:border-salon-rose-300 hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="service"
                              value={service.name}
                              checked={selectedService === service.name}
                              onChange={(e) => setSelectedService(e.target.value)}
                              className="sr-only"
                            />
                            <span className="font-medium">{service.name}</span>
                          </div>
                          <span className="text-salon-rose-500 font-semibold">{service.price}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-salon-charcoal mb-6 flex items-center">
                <User className="h-6 w-6 text-salon-rose-500 mr-2" />
                Choose Your Stylist
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <label
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedStylist === "any"
                      ? "border-salon-rose-500 bg-salon-rose-50 shadow-md"
                      : "border-salon-neutral-200 hover:border-salon-rose-300 hover:shadow-sm"
                  }`}
                >
                  <input
                    type="radio"
                    name="stylist"
                    value="any"
                    checked={selectedStylist === "any"}
                    onChange={(e) => setSelectedStylist(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 rounded-full bg-salon-neutral-200 flex items-center justify-center">
                      <User className="h-8 w-8 text-salon-neutral-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-salon-charcoal">No Preference</h3>
                      <p className="text-sm text-salon-neutral-600 mt-1">
                        We&apos;ll match you with an available stylist
                      </p>
                    </div>
                  </div>
                </label>
                {stylists.map((stylist) => (
                  <label
                    key={stylist.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedStylist === stylist.id
                        ? "border-salon-rose-500 bg-salon-rose-50 shadow-md"
                        : "border-salon-neutral-200 hover:border-salon-rose-300 hover:shadow-sm"
                    }`}
                  >
                    <input
                      type="radio"
                      name="stylist"
                      value={stylist.id}
                      checked={selectedStylist === stylist.id}
                      onChange={(e) => setSelectedStylist(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={stylist.image}
                          alt={stylist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-salon-charcoal">{stylist.name}</h3>
                        <p className="text-sm text-salon-neutral-600 mt-1">
                          {stylist.specialties.slice(0, 2).join(", ")}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-salon-charcoal mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-salon-rose-500 mr-2" />
                Select Date & Time
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent transition-all hover:border-salon-rose-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg border-2 transition-all ${
                          selectedTime === time
                            ? "border-salon-rose-500 bg-salon-rose-50 text-salon-rose-500 shadow-sm"
                            : "border-salon-neutral-200 hover:border-salon-rose-300 hover:shadow-sm"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-salon-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-salon-teal-500" />
                </div>
                <h2 className="text-2xl font-bold text-salon-charcoal mb-2">Confirm Your Booking</h2>
                <p className="text-salon-neutral-600">Please review your appointment details</p>
              </div>
              
              <div className="bg-salon-neutral-50 rounded-lg p-6 text-left mb-6 border border-salon-neutral-100">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-salon-neutral-600">Service:</span>
                    <span className="font-medium">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-salon-neutral-600">Stylist:</span>
                    <span className="font-medium">
                      {selectedStylist === "any" 
                        ? "No Preference" 
                        : stylists.find(s => s.id === selectedStylist)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-salon-neutral-600">Date:</span>
                    <span className="font-medium">
                      {selectedDate ? new Date(selectedDate).toLocaleDateString() : ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-salon-neutral-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent transition-all hover:border-salon-rose-300"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    <Mail className="inline-block h-4 w-4 mr-1" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent transition-all hover:border-salon-rose-300"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-salon-neutral-700 mb-2">
                    <Phone className="inline-block h-4 w-4 mr-1" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-salon-neutral-200 focus:outline-none focus:ring-2 focus:ring-salon-rose-500 focus:border-transparent transition-all hover:border-salon-rose-300"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={handlePrevStep}
                className="px-6 py-3 text-salon-neutral-600 hover:text-salon-charcoal font-medium transition-colors"
              >
                ← Previous
              </button>
            )}
            <div className="ml-auto">
              {step < 4 ? (
                <button
                  onClick={handleNextStep}
                  disabled={!isStepComplete()}
                  className={`px-8 py-3 rounded-full font-medium transition-all flex items-center ${
                    isStepComplete()
                      ? "bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 text-white hover:shadow-xl transform hover:scale-105"
                      : "bg-salon-neutral-200 text-salon-neutral-400 cursor-not-allowed"
                  }`}
                >
                  Next Step
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => setShowCalEmbed(true)}
                  disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone}
                  className={`px-8 py-3 rounded-full font-medium transition-all ${
                    customerInfo.name && customerInfo.email && customerInfo.phone
                      ? "bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 text-white hover:shadow-xl transform hover:scale-105"
                      : "bg-salon-neutral-200 text-salon-neutral-400 cursor-not-allowed"
                  }`}
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {showCalEmbed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-salon-neutral-100"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-salon-charcoal mb-2">Complete Your Booking</h2>
              <p className="text-salon-neutral-600">
                {customerInfo.name} - {selectedService} with{" "}
                {selectedStylist === "any"
                  ? "Any Available Stylist"
                  : stylists.find((s) => s.id === selectedStylist)?.name}
              </p>
            </div>

            <Cal
              calLink="valleygirl/appointment"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                name: customerInfo.name,
                email: customerInfo.email,
                notes: `Service: ${selectedService}\nStylist: ${
                  selectedStylist === "any"
                    ? "Any Available"
                    : stylists.find((s) => s.id === selectedStylist)?.name
                }\nPhone: ${customerInfo.phone}\nPreferred Date: ${selectedDate}\nPreferred Time: ${selectedTime}`,
                theme: "light",
              }}
            />

            <div className="mt-6 p-4 bg-salon-gold/10 border border-salon-gold/30 rounded-lg">
              <p className="text-sm text-salon-charcoal">
                <strong>Note:</strong> To complete setup, create a Cal.com account and replace
                &quot;valleygirl/appointment&quot; with your actual Cal.com link. You can also integrate with
                other booking systems like Calendly, Acuity, or Square Appointments.
              </p>
            </div>

            <button
              onClick={() => setShowCalEmbed(false)}
              className="mt-4 text-salon-rose-500 hover:text-salon-rose-600 font-medium transition-colors"
            >
              ← Back to form
            </button>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <p className="text-salon-neutral-600 mb-4">Prefer to book by phone?</p>
          <a
            href="tel:555-555-5555"
            className="inline-flex items-center text-salon-rose-500 hover:text-salon-rose-600 font-semibold transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call us at (555) 555-5555
          </a>
        </div>
      </div>
    </div>
  );
}