/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                protocol:"https",
                hostname: "www.dewr.gov.au"
            },
            {
                protocol:"https",
                hostname: "w1.pngwing.com"
            },
            {
                protocol:'https',
                hostname:"upload.wikimedia.org"
            }
        ]
    }
};

export default nextConfig;
