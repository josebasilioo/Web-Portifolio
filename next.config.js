/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
