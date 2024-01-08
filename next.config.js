/** @type {import('next').NextConfig} */

const path = require('path')
const webpack = require('webpack')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eltrac.s3.bitiful.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.guhub.cn',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config) => {
    config.plugins.push(new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    }));
    return config;
  },
}

module.exports = nextConfig