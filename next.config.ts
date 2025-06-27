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
}

export default nextConfig