/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",            // emit a static site to ./out
  images: { unoptimized: true }, // required for static export
  reactStrictMode: true,
};
export default nextConfig;
