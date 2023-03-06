/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['imagineshop.fly.dev', 'localhost']
  }
}

module.exports = nextConfig
