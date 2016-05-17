var webpack = require('webpack');

module.exports = {
  entry: {
    main: __dirname + "/src/main.js"
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    contentBase: './public'
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
    sourceMapFilename: "debugging/[file].map",
    pathInfo: true
  },
  resolveLoader: {
    moduleDirectories: ['node_modules']
  },
  module: {
    preloaders: [
      { test: /\.jsx?$/, loader: 'source-map' }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }
    ]
  }
};
