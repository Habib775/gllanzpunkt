/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'media.giphy.com',
      'cdn.jsdelivr.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
};

module.exports = nextConfig;

