const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  trailingSlash: false,
  webpack: (config, { isDev, webpack }) => {
    return config;
  },
});
