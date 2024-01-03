/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 's.gravatar.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'www.drogarianovaesperanca.com.br' },
      { protocol: 'https', hostname: 'farmaonline.vtexassets.com' },
    ],
  },
};

module.exports = nextConfig;
