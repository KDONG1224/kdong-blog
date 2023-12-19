/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    forceSwcTransforms: true
  },
  images: {
    disableStaticImages: true,
    domains: [
      'kdong-portfolio.s3.amazonaws.com',
      'kdong-portfolio.s3.ap-northeast-2.amazonaws.com',
      'img.youtube.com',
      'kdong-dev.s3.amazonaws.com',
      'kdong.s3.amazonaws.com'
    ]
  }
};

const withPWACustom = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
  runtimeCaching: [],
  buildExcludes: [/app-build-manifest.json$/],
  maximumFileSizeToCacheInBytes: 5000000 // 5MB로 설정
})(nextConfig);

module.exports = withPlugins(
  [withPWACustom, withFonts, withImages],
  nextConfig
);
