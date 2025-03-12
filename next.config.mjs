/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tank/:factor',
        destination: '/?conversionFactor=:factor',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;