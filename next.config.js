/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/rin-yokoyama.github.io' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/rin-yokoyama.github.io' : '',
}

module.exports = nextConfig