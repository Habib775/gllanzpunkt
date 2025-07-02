// components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-white" id="über-uns">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Über uns
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Bei Glanzpunkt legen wir großen Wert auf Sauberkeit, Präzision und
            Kundenzufriedenheit. Unser erfahrenes Team sorgt mit modernen
            Reinigungsmethoden dafür, dass Ihr Zuhause oder Ihr Unternehmen
            stets im besten Glanz erscheint.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

