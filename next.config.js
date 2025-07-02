/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'your-domain.com'], // أضف الدومينات التي تستضيف صورك هنا
  },
  experimental: {
    serverActions: true // إذا كنت تستخدم ميزات تجريبية مثل Server Actions
  }
};

module.exports = nextConfig;

