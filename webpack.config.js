const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CommentPlugin = require("./comment-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: path.join(__dirname, "domain-loader.js")
          },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  plugins: [new CommentPlugin("copyright reserved"), new HtmlWebpackPlugin()]
};
