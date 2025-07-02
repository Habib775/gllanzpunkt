// components/Offers.tsx
"use client";

import { motion } from "framer-motion";
import { Gift, PercentCircle, Star } from "lucide-react";

const offers = [
  {
    icon: <Gift className="w-10 h-10 text-white" />,
    title: "Willkommensangebot",
    description: "10% Rabatt auf Ihre erste Reinigung – nur für Neukunden!",
  },
  {
    icon: <PercentCircle className="w-10 h-10 text-white" />,
    title: "Monatlicher Deal",
    description: "Jeden Monat neue Angebote auf ausgewählte Dienstleistungen.",
  },
  {
    icon: <Star className="w-10 h-10 text-white" />,
    title: "Treuebonus",
    description: "Erhalten Sie exklusive Rabatte als Stammkunde.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Offers() {
  return (
    <section id="angebote" className="py-20 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Unsere Angebote
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full shadow-md">
                {offer.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

