import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing"
});

export const metadata: Metadata = {
  title: "Valley Girl Salon - Come as you are, leave as a Valley Girl",
  description: "Premier hair salon in San Francisco offering cutting-edge styling, coloring, and treatments. Book your transformation today!",
  keywords: "hair salon, San Francisco, hair color, haircut, balayage, highlights, hair treatment, K18, Olaplex, Davines, Valley Girl Salon",
  authors: [{ name: "Valley Girl Salon" }],
  creator: "Valley Girl Salon",
  publisher: "Valley Girl Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://valleygirlsalon.com"),
  openGraph: {
    title: "Valley Girl Salon - Premier Hair Salon in San Francisco",
    description: "Come as you are, leave as a Valley Girl. Expert hair styling, coloring, and treatments in the heart of San Francisco.",
    url: "https://valleygirlsalon.com",
    siteName: "Valley Girl Salon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valley Girl Salon - San Francisco's Premier Hair Salon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valley Girl Salon - Come as you are, leave as a Valley Girl",
    description: "Premier hair salon in San Francisco offering cutting-edge styling, coloring, and treatments.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dancing.variable} ${poppins.className}`}>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
