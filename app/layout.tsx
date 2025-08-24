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
