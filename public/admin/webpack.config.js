var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/js/index"
  },
  output: {
    filename: "assets/js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }, {
        test: /\.html$/,
        loader: 'html',
        query: {
          minimize: true
        }
      }
    ]
  },
  plugins: [new ExtractTextPlugin("assets/css/style.css")],
  devtool: "source-map",
  devServer: {
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
