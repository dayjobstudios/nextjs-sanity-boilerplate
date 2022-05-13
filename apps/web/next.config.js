/** @type {import('next').NextConfig} */
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: config => {
    config.plugins.push(new StylelintPlugin())
    return config
  },
}
