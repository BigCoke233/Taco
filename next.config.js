/** @type {import('next').NextConfig} */

const path = require('path')
const webpack = require('webpack')
const fmMode = require('frontmatter-markdown-loader/mode')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  /* === 允许的外部图片源 === */
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
  /* === Webpack 设置 === */
  webpack: (config) => {
    // 修复 Waline 导致的客户端问题
    config.plugins.push(new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    }));
    //添加 Markdown Frontmatter 加载器
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [fmMode.BODY, fmMode.HTML]
        }
      }
    )
    return config;
  },
}

module.exports = nextConfig;