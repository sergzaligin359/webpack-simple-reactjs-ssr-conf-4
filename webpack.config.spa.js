const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/client.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CompressionPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({ // use in code app console.log('process.env', process.env.NODE_ENV);
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  devtool: 'inline-source-map'
})