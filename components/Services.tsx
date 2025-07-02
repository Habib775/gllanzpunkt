// components/Services.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBroom, FaSoap, FaSprayCan, FaShower } from "react-icons/fa";

const services = [
  {
    icon: <FaBroom size={40} className="text-white" />,
    title: "Grundreinigung",
    description: "Tiefgehende Reinigung für ein hygienisches Zuhause.",
  },
  {
    icon: <FaSoap size={40} className="text-white" />,
    title: "Unterhaltsreinigung",
    description: "Regelmäßige Pflege für Sauberkeit und Ordnung.",
  },
  {
    icon: <FaSprayCan size={40} className="text-white" />,
    title: "Glasreinigung",
    description: "Kristallklare Fenster für besten Durchblick.",
  },
  {
    icon: <FaShower size={40} className="text-white" />,
    title: "Sanitärreinigung",
    description: "Sauberkeit und Frische für Ihre Sanitärbereiche.",
  },
];

export default function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      if (top > 200) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-gray-100 py-16" id="leistungen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Unsere Leistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300"
            >
              <div className="bg-blue-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

