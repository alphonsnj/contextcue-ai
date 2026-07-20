import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/contextcue-ai" : "",
  assetPrefix: isProd ? "/contextcue-ai/" : "",
};

export default nextConfig;