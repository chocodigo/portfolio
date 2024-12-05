import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental: {
    esmExternals: true, // ESM 모듈 외부화 지원 활성화
  },
  output: "export",
  assetPrefix: isProd
    ? "https://portfolio-chocodigo-haerim-chois-projects.vercel.app"
    : "",
};

export default nextConfig;
