const path = require("path");

module.exports = {
  entry: {
    index: path.join(__dirname, "./src/index.js"),
    main: path.join(__dirname, "./es6/main.js"),
    es6loop: path.join(__dirname, "./es6/loop/index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "development",
  // devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  }
};
