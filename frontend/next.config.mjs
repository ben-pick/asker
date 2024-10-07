/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["geist"],
    env: {
        backend_host: process.env.BACKEND_HOST
    }

};

export default nextConfig;
