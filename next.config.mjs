/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/reyti-app',  // ← измените на название вашего репозитория
  images: {
    unoptimized: true,
  },
}

export default nextConfig;