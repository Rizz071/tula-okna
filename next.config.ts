import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    async redirects() {
        return [
            {
                source: '/ceny',
                destination: '/ceny/stoimost-tipovyh-okon',
                permanent: true,
            },
        ]
    },
    images: {
        qualities: [75, 85, 95],
    }
}

export default nextConfig