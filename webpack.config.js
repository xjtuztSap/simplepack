const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CommentPlugin = require("./comment-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { argv } = process;
const isCustomDevServer =
  argv && argv[1] && argv[1].endsWith("custom-dev-server");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "development",
  // mode: "production",
  // devtool: "source-map",
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
  plugins: [
    new CommentPlugin("copyright reserved"),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      isCustomDevServer
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      isCustomDevServer
    })
  ],
  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000 // 每秒检查一次变动
  // },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 8089,
    host: "localhost",
    disableHostCheck: true
  }
};
