module.exports = {
  basePath: "/My-Portfolio",
  assetPrefix: "/My-Portfolio",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/typeit/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    });
    return config;
  },
};
