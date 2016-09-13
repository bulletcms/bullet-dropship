const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('style[name].css', {allChunks: false});

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js' ,
    dashboard: './dashboard.js'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loader: extractSass.extract(['css','sass']) }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'src')
    ],
    alias: {

    },
    extensions: ['', '.js']
  },
  plugins: [
    extractSass
  ]
};
