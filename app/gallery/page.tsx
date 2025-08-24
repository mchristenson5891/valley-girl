"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles, X } from "lucide-react";

// Gallery categories
const categories = [
  { id: "all", name: "All Work" },
  { id: "color", name: "Color" },
  { id: "cuts", name: "Cuts" },
  { id: "balayage", name: "Balayage" },
  { id: "highlights", name: "Highlights" },
  { id: "extensions", name: "Extensions" },
  { id: "treatments", name: "Treatments" }
];

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    category: "balayage",
    title: "Dimensional Balayage",
    stylist: "Malaika",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
    description: "Natural sun-kissed balayage with money piece highlights"
  },
  {
    id: 2,
    category: "color",
    title: "Vibrant Red Transformation",
    stylist: "Sarah",
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
    description: "Bold copper red with deep dimension"
  },
  {
    id: 3,
    category: "cuts",
    title: "Modern Bob Cut",
    stylist: "Alex",
    before: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop",
    description: "Sleek, angled bob with face-framing layers"
  },
  {
    id: 4,
    category: "highlights",
    title: "Blonde Highlights",
    stylist: "Jordan",
    before: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=600&h=800&fit=crop",
    description: "Bright blonde highlights with root shadow"
  },
  {
    id: 5,
    category: "extensions",
    title: "Length & Volume",
    stylist: "Jamie",
    before: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
    description: "Hand-tied extensions for dramatic length"
  },
  {
    id: 6,
    category: "treatments",
    title: "Keratin Treatment",
    stylist: "Casey",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=600&h=800&fit=crop",
    description: "Smooth, frizz-free results with keratin treatment"
  },
  {
    id: 7,
    category: "balayage",
    title: "Blonde Balayage",
    stylist: "Lauren",
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop",
    description: "Seamless blonde balayage blend"
  },
  {
    id: 8,
    category: "color",
    title: "Fashion Colors",
    stylist: "Brooke",
    before: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=600&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1502719414926-613c6be89d20?w=600&h=800&fit=crop",
    description: "Creative purple and pink color melt"
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [showBefore, setShowBefore] = useState(false);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-cream to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-salon-rose-500 to-salon-rose-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-salon-neutral-600 max-w-2xl mx-auto">
            Browse our collection of stunning transformations
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-salon-rose-500 text-white shadow-lg"
                  : "bg-white text-salon-neutral-700 hover:bg-salon-rose-50 border border-salon-neutral-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-salon-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Before/After Images */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">by {item.stylist}</p>
                      <div className="flex items-center mt-2">
                        <Camera className="h-4 w-4 mr-1" />
                        <span className="text-xs">Click to view before/after</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-salon-neutral-700">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setShowBefore(false);
                  }}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image Display */}
                <div className="relative aspect-[4/5] bg-salon-neutral-100">
                  <Image
                    src={showBefore ? selectedImage.before : selectedImage.after}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Before/After Toggle */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 flex shadow-lg">
                      <button
                        onClick={() => setShowBefore(true)}
                        className={`px-4 py-2 rounded-full font-medium transition-all ${
                          showBefore 
                            ? "bg-salon-rose-500 text-white" 
                            : "text-salon-neutral-700 hover:bg-salon-neutral-100"
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setShowBefore(false)}
                        className={`px-4 py-2 rounded-full font-medium transition-all ${
                          !showBefore 
                            ? "bg-salon-rose-500 text-white" 
                            : "text-salon-neutral-700 hover:bg-salon-neutral-100"
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-salon-charcoal mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-salon-neutral-600 mb-4">{selectedImage.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-salon-neutral-500">
                      Styled by {selectedImage.stylist}
                    </span>
                    <a
                      href="/book"
                      className="px-6 py-2 bg-salon-rose-500 text-white rounded-full font-medium hover:bg-salon-rose-600 transition-colors"
                    >
                      Book This Look
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Sparkles className="h-12 w-12 text-salon-rose-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-salon-charcoal mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-lg text-salon-neutral-600 mb-8 max-w-2xl mx-auto">
            Let our talented stylists create your perfect look
          </p>
          <a
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-salon-rose-500 text-white rounded-full font-medium hover:bg-salon-rose-600 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </div>
  );
}