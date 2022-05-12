const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src", "index.tsx"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "../src", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "../src")],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    path: path.resolve(__dirname, "../", "public"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
};
