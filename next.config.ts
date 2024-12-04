import type { NextConfig } from "next";

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
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

export default nextConfig;
