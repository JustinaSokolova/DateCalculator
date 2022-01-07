const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpacktPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.sass$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new HtmlWebpacktPlugin({ template: resolve(__dirname, "index.html") }),
  ],
};
