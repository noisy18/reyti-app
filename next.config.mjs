/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  
  basePath: isProd ? '/reyti-app' : '',
  
  assetPrefix: isProd ? '/reyti-app/' : '',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
}

export default nextConfig
