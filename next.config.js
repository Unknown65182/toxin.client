const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  trailingSlash: false,
  webpack: (config, { webpack, buildId, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.BUILD_ID": JSON.stringify(buildId),
      })
    );
    // config.module.rules.push({
    //   test: /\.graphql?$/,
    //   loader: "webpack-graphql-loader",
    // });
    if (!isServer) {
      config.node = {
        fs: "empty",
        module: "empty",
      };
    }
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: "/api/:slug/:slug",
        destination: "/_error", // The :path parameter is used here so will not be automatically passed in the query
        permanent: true,
      },
    ];
  },
});
