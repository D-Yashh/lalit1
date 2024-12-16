/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Explicitly set the output
  output: 'standalone',
  // Add transpilePackages for external dependencies that need it
  transpilePackages: ['next-themes', 'recharts'],
}

module.exports = nextConfig

