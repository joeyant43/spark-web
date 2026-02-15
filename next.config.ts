import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com', 'firebasestorage.googleapis.com'],
  },
}

export default nextConfig
