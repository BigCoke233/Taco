/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eltrac.s3.bitiful.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    pagePadding: 'md:px-16',
  },
}

module.exports = nextConfig
