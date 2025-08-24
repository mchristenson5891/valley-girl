"use client";

// Brand logos data - professional styling
const brandLogos = [
  {
    id: "davines",
    name: "Davines",
    displayName: "DAVINES",
    color: "#2d2d2d",
    featured: true
  },
  {
    id: "k18",
    name: "K18",
    displayName: "K18",
    color: "#000000",
    featured: true
  },
  {
    id: "olaplex",
    name: "Olaplex",
    displayName: "OLAPLEX",
    color: "#000000",
    featured: true
  },
  {
    id: "milbon",
    name: "Milbon",
    displayName: "MILBON",
    color: "#8b7355",
    featured: false
  },
  {
    id: "sebastian",
    name: "Sebastian",
    displayName: "Sebastian",
    color: "#2d2d2d",
    featured: false
  },
  {
    id: "kenra",
    name: "Kenra",
    displayName: "KENRA",
    color: "#000000",
    featured: false
  },
  {
    id: "12benefits",
    name: "12 Benefits",
    displayName: "12 BENEFITS",
    color: "#e84c79",
    featured: false
  },
  {
    id: "valleygirl",
    name: "Valley Girl",
    displayName: "VALLEY GIRL",
    color: "#e84c79",
    featured: true
  },
  {
    id: "reverie",
    name: "Reverie",
    displayName: "Reverie",
    color: "#6b7280",
    featured: false
  }
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-24 bg-gradient-to-b from-white via-salon-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-salon-charcoal mb-4">
            Premium Brands We Trust
          </h2>
          <p className="text-lg text-salon-neutral-600 max-w-3xl mx-auto">
            We exclusively carry professional-grade products from the industry&apos;s most innovative and trusted brands
          </p>
        </div>
        
        {/* Brand Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3 sm:gap-4 md:gap-6">
            {brandLogos.map((brand) => (
              <div
                key={brand.id}
                className="group flex flex-col items-center"
              >
                <div className={`
                  w-full aspect-square bg-white rounded-2xl 
                  flex items-center justify-center 
                  shadow-md hover:shadow-2xl 
                  transition-all duration-300 
                  border-2 ${brand.featured ? 'border-salon-rose-100' : 'border-salon-neutral-50'}
                  hover:border-salon-rose-300 
                  cursor-pointer hover:-translate-y-2 
                  relative overflow-hidden
                  p-3 md:p-5
                `}>
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-salon-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Brand name */}
                  <h3 
                    className="text-center font-bold relative z-10 transition-all duration-300 group-hover:scale-105"
                    style={{ 
                      color: brand.color,
                      fontSize: brand.id === 'k18' ? 'clamp(2rem, 4vw, 2.5rem)' : 
                               brand.id === '12benefits' ? 'clamp(1.2rem, 2.5vw, 1.5rem)' :
                               brand.id === 'sebastian' ? 'clamp(0.75rem, 1.5vw, 1rem)' :
                               brand.id === 'reverie' ? 'clamp(0.85rem, 1.8vw, 1.1rem)' :
                               'clamp(0.9rem, 2vw, 1.2rem)',
                      fontStyle: brand.id === 'sebastian' || brand.id === 'reverie' ? 'italic' : 'normal',
                      letterSpacing: brand.id === 'milbon' || brand.id === 'davines' ? '0.15em' : 
                                    brand.id === 'olaplex' || brand.id === 'kenra' ? '0.08em' : '0.05em',
                      fontWeight: brand.id === 'k18' ? '900' : 
                                 brand.id === 'davines' || brand.id === 'reverie' ? '300' :
                                 brand.id === 'milbon' ? '400' :
                                 '600',
                      lineHeight: 1.2
                    }}
                  >
                    {brand.id === '12benefits' ? (
                      <div className="flex flex-col items-center justify-center">
                        <span className="block text-4xl md:text-5xl font-black leading-none">12</span>
                        <span className="block text-[0.65rem] md:text-xs tracking-[0.2em] mt-1 font-medium">BENEFITS</span>
                      </div>
                    ) : brand.id === 'valleygirl' ? (
                      <div className="flex flex-col items-center justify-center">
                        <span className="block text-sm md:text-base font-bold tracking-wider leading-tight">VALLEY</span>
                        <span className="block text-sm md:text-base font-bold tracking-wider leading-tight">GIRL</span>
                      </div>
                    ) : (
                      brand.displayName
                    )}
                  </h3>
                </div>
                
                {/* Brand name label */}
                <p className="text-center mt-3 text-xs md:text-sm font-medium text-salon-neutral-600 group-hover:text-salon-rose-500 transition-colors">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-salon-rose-50 to-salon-teal-50 rounded-full border border-salon-rose-100">
            <span className="text-salon-rose-600 font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              All products available in-store and select items online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}