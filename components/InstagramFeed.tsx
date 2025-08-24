"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

// Sample posts - these are placeholder images
// To get real Instagram posts, you'd need to integrate with Instagram's API
const mockInstagramPosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1560869713-da86a9ec0744?w=600&h=600&fit=crop",
    caption: "Stunning balayage transformation! 🌟",
    likes: 234,
    comments: 18,
    link: "https://instagram.com/p/1"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop",
    caption: "Fresh cut, fresh vibes ✨",
    likes: 189,
    comments: 12,
    link: "https://instagram.com/p/2"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1605497787865-e6d4762b386f?w=600&h=600&fit=crop",
    caption: "Blonde perfection achieved! 💫",
    likes: 312,
    comments: 24,
    link: "https://instagram.com/p/3"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=600&h=600&fit=crop",
    caption: "Color correction magic ✨",
    likes: 267,
    comments: 15,
    link: "https://instagram.com/p/4"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=600&fit=crop",
    caption: "Curls for days! 🌀",
    likes: 298,
    comments: 21,
    link: "https://instagram.com/p/5"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=600&fit=crop",
    caption: "That shine though! ✨",
    likes: 445,
    comments: 32,
    link: "https://instagram.com/p/6"
  }
];

export default function InstagramFeed() {
  const [posts] = useState(mockInstagramPosts);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-salon-charcoal mb-4 flex items-center justify-center">
              <Instagram className="h-10 w-10 text-salon-rose-500 mr-3" />
              Follow Our Work
            </h2>
            <p className="text-lg text-salon-neutral-600 mb-2">
              Visit our Instagram for real transformations
            </p>
            <a
              href="https://instagram.com/valleygirlsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-salon-rose-500 hover:text-salon-rose-600 font-medium transition-colors"
            >
              @valleygirlsalon
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-salon-neutral-100"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <span className="flex items-center">
                      <Heart className="h-5 w-5 mr-1 fill-current" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-1" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-xs px-2 line-clamp-2">{post.caption}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/valleygirlsalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-salon-rose-500 text-white rounded-full font-medium hover:bg-salon-rose-600 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Instagram className="h-5 w-5 mr-2" />
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}