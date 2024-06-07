// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'img.buzzfeed.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'apipics.s3.amazonaws.com',
          port: '',
          pathname: '/**',
        },
        // Add more remote patterns as needed
        // {
        //   protocol: 'https',
        //   hostname: 'your-image-host.com',
        //   port: '',
        //   pathname: '/**',
        // },
        // Add more remote patterns as needed
      ],
    },
  };
  
  export default nextConfig;
  