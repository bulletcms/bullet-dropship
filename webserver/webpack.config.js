const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('style[name].css', {allChunks: false});

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js' ,
    dashboard: './dashboard.js'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: extractCss.extract(['css']) }
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
    extractCss
  ]
};
