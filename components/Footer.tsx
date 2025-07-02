// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Glanzpunkt</h2>
            <p className="text-sm text-gray-400 mt-1">
              Weil Ihr Glanz unser Punkt ist
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-sm">
            <a href="#leistungen" className="hover:text-primary">
              Leistungen
            </a>
            <a href="#angebote" className="hover:text-primary">
              Angebote
            </a>
            <a href="#galerie" className="hover:text-primary">
              Galerie
            </a>
            <a href="#über-uns" className="hover:text-primary">
              Über uns
            </a>
          </div>

          {/* Kontakt & Socials */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Phone size={16} /> +49 123 456 789
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail size={16} /> kontakt@glanzpunkt.de
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <hr className="border-t border-gray-800 my-6" />

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Glanzpunkt. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}

