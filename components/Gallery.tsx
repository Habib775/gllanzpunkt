// components/Gallery.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Unsere Galerie
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={item}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <Image
                src={src}
                alt={`Galeriebild ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

