module.exports = {
  basePath: "/My-Portfolio",
  assetPrefix: "/My-Portfolio", // Optional but recommended for static assets
  redirects() {
    return [
      {
        source: "/",
        destination: "/My-Portfolio", // Ensure people are redirected to the base path
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/typeit/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"],
        },
      },
    });
    return config;
  },
};
