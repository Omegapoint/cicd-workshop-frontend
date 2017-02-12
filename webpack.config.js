var webpack = require('webpack');

module.exports = {
  entry: './src/app.jsx',
  output: { path: __dirname + "/build", filename: 'bundle.js' },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
