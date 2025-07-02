import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B', // يمكنك تخصيص الألوان حسب هوية Glanzpunkt
        secondary: '#38BDF8',
        accent: '#F59E0B',
        dark: '#0F172A',
        light: '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        custom: ['"Noto Sans Arabic"', 'sans-serif'], // دعم العربية
      },
    },
  },
  plugins: [],
};

export default config;

