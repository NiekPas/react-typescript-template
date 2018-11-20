var path = require("path");
var config = {
  entry: ["./index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  optimization: {
    minimize: false
  },

  devServer: {
    contentBase: path.resolve(__dirname),
    watchContentBase: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;

