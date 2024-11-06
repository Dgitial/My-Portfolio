module.exports = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/My-Portfolio",
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
