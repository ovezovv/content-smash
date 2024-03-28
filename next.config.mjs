/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo", // if your website has no www, drop it
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "cataas.com", // if your website has no www, drop it
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // if your website has no www, drop it
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
