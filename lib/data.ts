export const salonInfo = {
  name: "Valley Girl Salon",
  tagline: "Come as you are, leave as a Valley Girl.",
  heroText: "Affordable unique products just right for you",
  address: "19461 Ventura Blvd, Tarzana, CA 91356",
  phone: "(818) 253-9333",
  email: "hello@valleygirl.salon",
  instagram: "@valleygirlsalon",
  instagramUrl: "https://instagram.com/valleygirlsalon",
  squareAppointments: "https://valleygirl-salon.square.site/appointments",
  hours: {
    monday: "9:00 AM - 7:00 PM",
    tuesday: "9:00 AM - 7:00 PM",
    wednesday: "9:00 AM - 7:00 PM",
    thursday: "9:00 AM - 7:00 PM",
    friday: "9:00 AM - 7:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "10:00 AM - 5:00 PM"
  }
};

export const stylists = [
  {
    id: "laura",
    name: "Laura",
    image: "/images/stylists/laura.jpg",
    bio: "Texture specialist and curl enthusiast. I'll help you embrace and enhance your natural hair texture.",
    specialties: ["Curly Cuts", "Natural Hair", "Protective Styles", "Deep Conditioning"],
    instagram: "@laura_curls"
  },
  {
    id: "malaika",
    name: "Malaika",
    image: "/images/stylists/malaika.jpg",
    bio: "Precision cutting and styling expert. I create timeless looks with a modern edge that grow out beautifully.",
    specialties: ["Precision Cuts", "Bob Specialist", "Men's Cuts", "Styling"],
    instagram: "@malaika_cuts"
  },
  {
    id: "brooke",
    name: "Brooke",
    image: "/images/stylists/brooke.jpg",
    bio: "Specializing in modern cuts and vibrant color transformations. With over 10 years of experience, I love creating looks that make you feel confident and beautiful.",
    specialties: ["Balayage", "Creative Color", "Precision Cuts", "Keratin Treatments"],
    instagram: "@brooke_styles"
  },
  {
    id: "donya",
    name: "Donya",
    image: "/images/stylists/donya.jpg",
    bio: "Master colorist with a love for bold transformations and subtle enhancements. Your hair is my canvas!",
    specialties: ["Color Correction", "Highlights", "Fashion Colors", "Glossing"],
    instagram: "@donya_colors"
  },
  {
    id: "casey",
    name: "Casey",
    image: "/images/stylists/casey.jpg",
    bio: "Passionate about creating effortless, lived-in looks. I believe great hair should look amazing even on your lazy days.",
    specialties: ["Lived-in Color", "Beach Waves", "Extensions", "Bridal Styling"],
    instagram: "@casey_hair"
  },
  {
    id: "lauren-lo",
    name: "Lauren (Lo)",
    image: "/images/stylists/lauren-lo.jpg",
    bio: "Blonding expert and extension specialist. From subtle highlights to full platinum transformations.",
    specialties: ["Blonding", "Hand-tied Extensions", "Tape-in Extensions", "Olaplex Treatments"],
    instagram: "@lo_blonde"
  }
];

export const brands = [
  { 
    id: "davines", 
    name: "Davines", 
    description: "Sustainable beauty from Italy",
    logo: "/images/brands/davines.png",
    featured: true
  },
  { 
    id: "k18", 
    name: "K18", 
    description: "Molecular repair hair mask",
    logo: "/images/brands/k18.png",
    featured: true
  },
  { 
    id: "olaplex", 
    name: "Olaplex", 
    description: "Bond building hair treatment",
    logo: "/images/brands/olaplex.png",
    featured: true
  },
  { 
    id: "milbon", 
    name: "Milbon", 
    description: "Japanese hair care innovation",
    logo: "/images/brands/milbon.png",
    featured: false
  },
  { 
    id: "sebastian", 
    name: "Sebastian", 
    description: "Professional styling products",
    logo: "/images/brands/sebastian.png",
    featured: false
  },
  { 
    id: "kenra", 
    name: "Kenra", 
    description: "Professional performance hair care",
    logo: "/images/brands/kenra.png",
    featured: false
  },
  { 
    id: "12benefits", 
    name: "12 Benefits", 
    description: "Multi-benefit hair treatments",
    logo: "/images/brands/12benefits.png",
    featured: false
  },
  { 
    id: "valleygirl", 
    name: "Valley Girl", 
    description: "Our signature product line",
    logo: "/images/brands/valleygirl.png",
    featured: true
  },
  { 
    id: "reverie", 
    name: "Reverie", 
    description: "Clean, natural hair care",
    logo: "/images/brands/reverie.png",
    featured: false
  }
];

export const services = [
  {
    category: "Haircuts & Styling",
    items: [
      { name: "Women's Haircut & Blow-Dry", price: "$95-$125" },
      { name: "Men's Haircut", price: "$65-$85" },
      { name: "Kids' Haircut (Under 12)", price: "$45-$55" },
      { name: "Bang/Fringe Trim", price: "$25" },
      { name: "Blowout & Style", price: "$65-$85" },
      { name: "Special Event Updo", price: "$125-$175" },
      { name: "Bridal Hair", price: "Starting at $250" }
    ]
  },
  {
    category: "Color Services",
    items: [
      { name: "Single Process Color", price: "Starting at $95" },
      { name: "Root Touch-Up", price: "$85-$105" },
      { name: "Full Highlights", price: "$185-$250" },
      { name: "Partial Highlights", price: "$135-$175" },
      { name: "Balayage/Ombré", price: "$225-$350" },
      { name: "Color Correction", price: "Consultation Required" },
      { name: "Fashion/Vivid Colors", price: "Starting at $200" },
      { name: "Gloss/Toner", price: "$65-$85" }
    ]
  },
  {
    category: "Treatments",
    items: [
      { name: "Olaplex Stand-Alone Treatment", price: "$75" },
      { name: "K18 Molecular Repair", price: "$95" },
      { name: "Deep Conditioning Mask", price: "$55" },
      { name: "Keratin Smoothing", price: "$275-$450" },
      { name: "Brazilian Blowout", price: "$350-$500" },
      { name: "Scalp Detox Treatment", price: "$85" },
      { name: "Bond Building Treatment", price: "$65" }
    ]
  },
  {
    category: "Extensions & Enhancements",
    items: [
      { name: "Hand-Tied Weft Extensions", price: "$800-$1500" },
      { name: "Tape-In Extensions", price: "$500-$900" },
      { name: "I-Tip Extensions", price: "$600-$1200" },
      { name: "Extension Move-Up", price: "$250-$400" },
      { name: "Extension Removal", price: "$100-$150" },
      { name: "Hair Tinsel", price: "$35-$55" }
    ]
  }
];