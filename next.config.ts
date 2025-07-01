import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /url/,
      type: 'asset/resource'
    })
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: ['@svgr/webpack', 'url-loader']
    });

    return config
  }
};

export default nextConfig;