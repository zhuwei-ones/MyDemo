/** @type {import('next').NextConfig} */

const cwebp = require("./webp");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dev.myones.net",
      "cdn2.ones-ai.cn",
      "www.baidu.com",
      "127.0.0.1",
    ],
    formats: ["image/avif", "image/webp"],
  },

  webpack(config) {
    config.plugins.push(new cwebp());
    return config;
  },
};
module.exports = nextConfig;
