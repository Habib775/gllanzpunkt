'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';

export default function Hero() {
  return (
    <div className="relative w-full h-[40rem] overflow-hidden bg-black flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="black"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={1500}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Glanzpunkt
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-gray-200">
          <Typewriter
            words={[
              'Weil Ihr Glanz unser Punkt ist.',
              'Professionelle Reinigung für Ihr Zuhause.',
              'Zuverlässigkeit & Qualität garantiert.',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
      </motion.div>
    </div>
  );
}

