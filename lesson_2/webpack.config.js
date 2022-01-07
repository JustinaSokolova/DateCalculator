const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpacktPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new HtmlWebpacktPlugin({ template: resolve(__dirname, "index.html") }),
    new BundleAnalyzerPlugin(),
  ],
};
