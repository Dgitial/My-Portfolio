module.exports = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/Home", // Or just remove the redirect if no specific page
        permanent: false,
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
