/** @type {import('next').NextConfig} */
const path = require('path');
const withLess = require('next-with-less');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withAntdMobile = require('next-transpile-modules')(['antd-mobile']);
const withPlugins = require('next-compose-plugins');

module.exports = withFonts();

const nextConfig = {
  images: {
    disableStaticImages: true,
    domains: [
      's3.ap-northeast-2.amazonaws.com',
      'oasis-1302397712.cos.ap-seoul.myqcloud.com',
      'gw.alipayobjects.com'
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compiler: {
    styledComponents: true
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compiler: {
    styledComponents: true
  }

  // experimental: {
  //   runtime: 'nodejs',
  //   serverComponents: true,
  // },
};

module.exports = withPlugins(
  [withImages, withFonts, withLess, withAntdMobile],
  nextConfig
);
