/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreDuringBuilds: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 's.gravatar.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};

module.exports = nextConfig;

