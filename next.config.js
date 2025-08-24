/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '9ae5edccc14b5e9d0342.cdn6.editmysite.com',
      },
    ],
  },
}

module.exports = nextConfig