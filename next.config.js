/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ✅ Next.js 13+ compatible
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "a0.muscache.com" // ✅ Hindi muna tinanggal (Para iwas problema sa assets)
    ],
  },
  reactStrictMode: true, // ✅ Idinagdag para maiwasan ang bugs at stability issues
};

module.exports = nextConfig;
